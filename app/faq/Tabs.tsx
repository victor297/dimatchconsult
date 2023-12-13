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
    <div className="flex flex-col md:flex-row justify-center pt-10 mb-10">
      <div className="bg-[#F4F4F4] md:w-[200px] w-[320px] md:h-[230px] h-[85px] mb-5 md:mb-0 ml-4 md:ml-0">
        <h1 className="font-bold pl-6 md:pt-6 pt-2 md:pb-4 pb-2">Categories</h1>
        <div>
          <nav
            className="flex md:flex-col flex-row space-y-0 md:space-y-2 md:px-8 px-4"
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
      <div className="pl-4 md:pl-10">
        {faqData.map((category, index) => (
          <div
            key={index}
            className={activeTab === index + 1 ? '' : 'hidden'}
          >
            {category.items.map((item, itemIndex) => (
              <div key={itemIndex} className="border border-gray mb-4 p-2 md:p-4 w-[350px] md:w-[500px]">
                <button
                  type="button"
                  className="font-bold flex items-center justify-between w-full"
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
                    <p className="text-gray-500 md:w-[480px] pt-2 text-sm">{item.answer}</p>
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
