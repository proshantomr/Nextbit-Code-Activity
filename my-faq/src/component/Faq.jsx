import React, { useState } from 'react';
import Accordion from './Accordion';

const Faq = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        
                <div className='text-white p-4 bg-gray-800 rounded-lg mx-auto'>
                    <h1 className="text-2xl font-bold text-center"><u>FAQ</u></h1>
                    <p className='text-normal font-bold text-center'>We will try to solve your problem</p>
                    <div className='text-white p-4 bg-gray-800 rounded-lg'>
                        <Accordion 
                            question="What is JavaScript?"
                            answer="JavaScript is a high-level, interpreted programming language used for adding interactivity and dynamic behavior to web pages." 
                        />
                        <Accordion 
                            question="What are the key features of JavaScript?"
                            answer="Key features of JavaScript include its dynamic typing, prototype-based object orientation, functions as first-class objects, and support for closures." 
                        />
                        <Accordion 
                            question="How is JavaScript executed?"
                            answer="JavaScript code is executed by web browsers' JavaScript engines, parsing and interpreting code to execute dynamically within web pages." 
                        />
                        <Accordion 
                            question="What are common data types in JavaScript?"
                            answer="JavaScript supports data types such as numbers, strings, booleans, arrays, objects, null, and undefined." 
                        />
                        <Accordion 
                            question="What is the DOM in JavaScript?"
                            answer="The Document Object Model (DOM) in JavaScript represents the structure of an HTML document as a hierarchical tree of objects, enabling manipulation and interaction with document elements." 
                        />
                    </div>
                </div>
           
    );
};

export default Faq;
