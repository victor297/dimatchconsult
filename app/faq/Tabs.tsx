"use client"
import Image from "next/image";
import React,{useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  category: string;
  items: FAQItem[];
}

interface TabsComponentProps {
  faqData: FAQCategory[];
}
const Tabs = ({ faqData }: TabsComponentProps) => {
  const [activeTab, setActiveTab] = useState(1);
  const [activeQuestions, setActiveQuestions] = React.useState<number[]>([]);

  const handleTabClick = (tabNumber: number) => {
    setActiveTab(tabNumber);
    setActiveQuestions([]);
  };
  const toggleAnswer = (questionIndex: number) => {
    setActiveQuestions((prevActiveQuestions) => {
      if (prevActiveQuestions.includes(questionIndex)) {
        // If the question is already active, remove it
        return prevActiveQuestions.filter((index) => index !== questionIndex);
      } else {
        // If the question is not active, add it
        return [...prevActiveQuestions, questionIndex];
      }
    });
  };

  return (
    <div className="flex justify-center pt-10 mb-10">
      <div className="bg-[#F4F4F4] w-[200px] h-[230px]">
        <h1 className="font-bold pl-6 pt-6 pb-4">Categories</h1>
        <div>
          <nav
            className="flex flex-col space-y-2 px-8"
          >
            {faqData.map((category, index) => (
              <button
                key={index}
                type="button"
                className={`${activeTab === index + 1
                    ? 'bg-blue text-white'
                    : ''
                  } py-1 px-2 inline-flex text-sm`}
                onClick={() => handleTabClick(index + 1)}
              >
                {category.category}
              </button>
            ))}
          </nav>
        </div>
      </div> 
      <div className="pl-10">
        {faqData.map((category, index) => (
          <div
            key={index}
            className={activeTab === index + 1 ? '' : 'hidden'}
          >
            {category.items.map((item, itemIndex) => (
              <div key={itemIndex} className="border border-gray mb-4 p-4">
                <button
                  type="button"
                  className="font-bold flex items-center justify-between w-[500px]"
                  onClick={() => toggleAnswer(itemIndex)}
                >
                  <span className="text-sm">{item.question}</span>
                  <span className="">
                    <Image
                      src={activeQuestions.includes(itemIndex) ? '/chevron-down.svg' : '/chevron-up.svg'}
                      alt="chevron-up"
                      width={24}
                      height={24}
                    />
                  </span>
                </button>
                {activeQuestions.includes(itemIndex) && (
                  <div>
                    <p className="text-gray-500 w-[480px] pt-2 text-sm">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
