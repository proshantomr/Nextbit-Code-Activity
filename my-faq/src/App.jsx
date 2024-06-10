import { useEffect, useState } from "react";
import Accordion from "./component/Accordion";


const faqData = [
  {
    id: 1,
    question: "What is javascript?",
    answer: "Language"
  },
  {
    id: 2,
    question: "Why Javascript",
    answer: "something"
  },

  {
    id: 3,
    question: "Is Javascript friendly",
    answer: "Maybe yes"
  },

  {
    id: 4,
    question: "Java que?",
    answer: "answer"
  },

  {
    id: 5,
    question: "Java que?",
    answer: "answer"
  },
];

function App() {
  const [faqs, setFaqs] = useState([]);
  // console.log(faqs);
  useEffect(() => {
    setFaqs(faqData);
  }, [faqs])
  // console.log(faqs);
  return (
    <div className="w-full h-screen py-10 p-40 bg-gradient-to-r from-indigo-500 to-blue-300 ">
      <div className="p-5">
        <Accordion faqs={faqs} />
      </div>

      <div className="text-center">
        <button className="p-3 bg-color- bg-cyan-950 text-white" >
          Seemore
        </button>

      </div>
    </div>

  );
}

export default App;

