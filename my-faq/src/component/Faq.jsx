

const Faq = ({ faqItem, isOpen, onClick }) => {
    const { id, question, answer } = faqItem;
  

    

    return (
        <div className="w-[400px] mx-auto my-5 py-2 border-2">
            <div className="flex justify-between items-center">
                <p>{question}</p>
                <button className='text-3xl'  onClick={() => onClick(id)}>
                    {isOpen ? '-' : '+'}
                </button>
            </div>
            {isOpen&& 
                <div className="mt-2">
                    <p>{answer}</p>
                </div>
            }
        </div>
    );
};

export default Faq;
