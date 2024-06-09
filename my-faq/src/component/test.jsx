

const Faq = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const faqs = [
        {
            question: "What is JavaScript?",
            answer: "JavaScript is a high-level, interpreted programming language used for adding interactivity and dynamic behavior to web pages."
        },
        {
            question: "What are the key features of JavaScript?",
            answer: "Key features of JavaScript include its dynamic typing, prototype-based object orientation, functions as first-class objects, and support for closures."
        },
        {
            question: "How is JavaScript executed?",
            answer: "JavaScript code is executed by web browsers' JavaScript engines, parsing and interpreting code to execute dynamically within web pages."
        },
        {
            question: "What are common data types in JavaScript?",
            answer: "JavaScript supports data types such as numbers, strings, booleans, arrays, objects, null, and undefined."
        },
        {
            question: "What is the DOM in JavaScript?",
            answer: "The Document Object Model (DOM) in JavaScript represents the structure of an HTML document as a hierarchical tree of objects, enabling manipulation and interaction with document elements."
        }
    ];

    const filteredFaqs = faqs.filter(faq =>
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className='text-white p-4 bg-slate-800 rounded-lg mx-auto'>
            <h1 className="text-2xl font-bold text-center"><u>FAQ</u></h1>
            <p className='text-normal font-bold text-center'>We will try to solve your problem</p>
            
            <div className='my-4 flex justify-center '>
                <input 
                    type="text" 
                    placeholder="Search FAQ..." 
                    className="w-[400px] p-2  rounded-lg text-black"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>

            <div className='text-white p-4 bg-slate-800 rounded-lg '>
                {filteredFaqs.map((faq, index) => (
                    <Accordion key={index} Question={faq.question} answer={faq.answer} />
                ))}
            </div>
        </div>
    );
};

export default Faq;
