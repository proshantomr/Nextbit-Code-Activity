import React, { useState } from 'react';
const Accordion = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div>
            <div className="w-[400px] mx-auto my-5 py-2 border-2  ">
                <div className="flex justify-between">
                    <p>{question}</p>
                    <button className="" onClick={toggleAccordion}>{isOpen ? '-' : '+'}</button>
                </div>
                {isOpen && (
                    <div className=''>
                        <p>{answer}</p>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Accordion;