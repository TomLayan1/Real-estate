import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <section className='py-10 bg-footerBg'>
      <div className='container'>
        <div className='text-white md:flex items-center justify-between'>
          <div className='mb-10 md:mb-0'>
            <h4 className='text-xl font-semibold mb-4'>Also get in touch</h4>
            <p className='text-sm cursor-pointer'>hello@realtorpace.com</p>
          </div>
          <div>
            <div className='flex gap-4 mb-4'>
              <p className='uppercase text-sm cursor-pointer'>Privacy Policy</p>
              <p className='uppercase text-sm cursor-pointer'>Terms & Condition</p>
              <p className='uppercase text-sm cursor-pointer'>About Us</p>
            </div>
            <div className='flex gap-4 mb-4'>
              <div className='shadow-customShadow p-2 rounded-full bg-footerBgTwo'>
                <FaInstagram size={15} />
              </div>
              <div className='shadow-customShadow p-2 rounded-full bg-footerBgTwo'>
                <FaFacebookF size={15} />
              </div>
              <div className='shadow-customShadow p-2 rounded-full bg-footerBgTwo'>
                <FaXTwitter size={15} />
              </div>
              <div className='shadow-customShadow p-2 rounded-full bg-footerBgTwo'>
                <FaYoutube size={15} />
              </div>
            </div>
            <p className='text-xs'>&copy;2024 Tomisin. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer