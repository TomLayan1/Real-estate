import  React, { useState } from 'react';
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";


const Faqs: React.FC = () => {

  interface faqType {
    id: number;
    question: string;
    answer: string;
  }

  const faqs: faqType[] = [
    {
      id: 1,
      question: 'What services do you offer?',
      answer: 'We provide a wide range of services, including property buying, selling, and renting for both residential and commercial purposes. We also offer property management services, real estate consulting, and assistance with legal documentation and financing.'
    },
    {
      id: 2,
      question: ' How can I schedule a property viewing?',
      answer: 'You can schedule a property viewing by contacting us through our website or by calling our office directly. Simply let us know the property you are interested in, and we\'ll arrange a convenient time for you to visit.'
    },
    {
      id: 3,
      question: 'What is the process of buying a property?',
      answer: 'The process of buying a property starts with identifying your needs and budget. Once you find a suitable property, we assist with negotiations, preparing contracts, and facilitating the legal and financial aspects until the deal is finalized and ownership is transferred.'
    },
    {
      id: 4,
      question: 'How do I know if a property is priced fairly?',
      answer: 'Our experienced real estate agents conduct thorough market research and property evaluations to ensure that each property is priced competitively based on current market trends. We provide transparent information to help you make informed decisions.'
    },
    {
      id: 5,
      question: 'Do you assist with financing options for property purchases?',
      answer: 'Yes, we work with a network of financial institutions to help our clients find suitable mortgage and financing options. We guide you through the process to secure the best rates and terms based on your financial situation.'
    }
  ]
  const [viewAns, setViewAns] = useState<boolean>(false)
  const [viewAnswer, setViewAnswer] = useState<number | null>(null)
  console.log(viewAnswer)

  // Toggle the selected FAQ
  const handleFaq = (id: number) => {
    setViewAnswer(prev => prev === id ? null : id);
  };

  return(
    <section className=''>
      <div className='h-[100px] md:h-[200px] faq-bx relative'>
        <div className='absolute top-0 bottom-0 left-0 right-0 bg-heroBg flex items-center justify-center'>
          <div className='md:w-[90%] mx-auto container'>
            <h1 className='text-2xl md:text-4xl text-center text-white font-bold'>Frequently Asked Questions</h1>
          </div>
        </div>
      </div>

      <div className='bg-black py-14'>
        <div className='container lg:w-[50%] mx-auto text-white'>
          {faqs.map((faq, index) => (
            <div key={index} className='border border-white rounded-lg mb-5'>
              <div className='flex items-center justify-between py-2 px-2 bg-white bg-opacity-15'>
                <p className='w-[80%]'>{faq.question}</p>
                <div className='bg-white py-2 px-2 rounded-full bg-opacity-40' onClick={()=>handleFaq(faq.id)}>
                  {viewAnswer === faq.id ? <FaAngleUp /> : <FaAngleDown />}
                </div>
              </div>
              <div className={`${viewAnswer === faq.id ? 'h-auto py-2' : 'h-[0px]'}  px-2 overflow-hidden ease-linear duration-150`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Faqs