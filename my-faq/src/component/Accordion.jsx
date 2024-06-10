import React, { useState } from 'react';
import Faq from './Faq';
const Accordion = ({faqs}) => {

    const [isOpen, setIsOpen] = useState(1);
    


    
    // console.log(faqs.faqs);

    const toggleOpen = (id) => {
        setIsOpen(isOpen === id ? null :id);
    };
        // console.log(faqs);
    return (
        <div>
         {
        faqs.map(faqItem =><Faq key={faqItem.id} faqItem={faqItem} onClick ={toggleOpen} isOpen = { isOpen === faqItem.id } /> )           
        }
        </div>
    );
};
export default Accordion;