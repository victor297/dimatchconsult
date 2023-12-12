import Tabs from "./Tabs";
import faqDataMock from "@/utils/faq";

const Faq = () => {
  return(
    <div>
      <Tabs faqData={faqDataMock} />
    </div>
  );
};

export default Faq;
