import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { ContactType } from '../../Interface/Interface';

interface Props {
  displayContact: boolean;
  setDisplayContact: React.Dispatch<React.SetStateAction<boolean>>
}

const Contact: React.FC<Props> = ({displayContact, setDisplayContact}) => {
  // For contact
  const [contact, setContact] = useState<ContactType>({
    name: '',
    email: '',
    country: '',
    message: ''
  })

  const [contactMessage, setContactMessage] = useState<string | null>(null);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContact(prev => (
      {...prev, [e.target.name]: e.target.value}
    ))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!contact.country || !contact.email || !contact.message || !contact.name) {
      setContactMessage('All fields are required')
    } else {
      setContactMessage('Message sent')
      setContact({
        name: '',
        email: '',
        country: '',
        message: ''
      })
    }
  }

  return (
    <>
      {displayContact && <div className='bg-contactBg fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center shadow-customShadow'>
        <div className='container bg-white rounded-xl w-[70%] h-[490px] py-6'>
          <div className='flex items-center justify-between pl-3 text-lg'>
            <h3>Contact Us</h3>
            <FaTimes style={{ cursor: 'pointer'}} onClick={()=>setDisplayContact(false)} />
          </div>
          <div className='md:flex items-center gap-3'>
            <div className='md:w-[50%] h-full flex items-center px-3 py-6'>
              <form className='w-full'>
                <p className='text-center text-[14px] mb-3'>{contactMessage}</p>
                <div className='mb-3'>
                  <p className='text-[14px] text-primaryColor'>Name</p>
                  <input className='border border-slate-400 outline-none w-full p-1' onChange={handleInput} type='text' name='name' value={contact.name} />
                </div>
                <div className='mb-3'>
                  <p className='text-[14px] text-primaryColor'>Email</p>
                  <input className='border border-slate-400 outline-none w-full p-1' onChange={handleInput} type='email' name='email' value={contact.email} />
                </div>
                <div className='mb-3'>
                  <p className='text-[14px] text-primaryColor'>Country</p>
                  <input className='border border-slate-400 outline-none w-full p-1' onChange={handleInput} type='text' name='country' value={contact.country} />
                </div>
                <div className='mb-3'>
                  <p className='text-[14px] text-primaryColor'>Message</p>
                  <textarea className='border border-slate-400 outline-none w-full h-[78px] p-1' onChange={handleInput} name='message' value={contact.message}></textarea>
                </div>
                <button className='bg-primaryColor text-white w-full py-2 text-[15px] rounded-lg' onSubmit={handleSubmit}>Send Message</button>
              </form>
            </div>
            <div className='contact-form-bg hidden md:block md:w-[50%] h-[400px] bg-black rounded-xl'></div>
          </div>
        </div>
      </div>}
    </>
  )
}

export default Contact