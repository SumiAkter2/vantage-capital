import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./Faq.css";
import "react-accessible-accordion/dist/fancy-example.css";
import { faqInfo } from "../../../Info/FaqInfo";

const Faq = () => {
  return (
    <section className="my-12 text-black" >
      <h1 className="text-4xl font-semibold text-center mb-12">
        Frequently Asked Questions
      </h1>
      <div className="  faq-bg ">
        <div className=" bg-black opacity-80 md:p-24 p-12">
          <div className="backdrop-blur-md">
            <Accordion
              allowZeroExpanded
              className="text-xl font-semibold text-white "
            >
              {faqInfo.map((item) => (
                <AccordionItem key={item.id}>
                  <AccordionItemHeading>
                    <AccordionItemButton>{item.qs}</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>{item.ans}</AccordionItemPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
