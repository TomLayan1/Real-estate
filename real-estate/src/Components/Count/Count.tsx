import React, { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Count: React.FC = () => {
  const [counterOn, setCounterOn] = useState<boolean>(true);
  
  // Create a ref for the count container
  const countRef = useRef<HTMLDivElement>(null);

  useEffect(()=>{
    if(countRef.current) {
      // Set up the scroll trigger
      const trigger = ScrollTrigger.create({
        trigger: countRef.current,
        // Start when the top of the element hits the bottom of the viewport
        start: 'top bottom',
        // End when the bottom of the element hits the top of the viewport
        end: 'bottom top',
        onEnter: () => setCounterOn(true),
        onLeaveBack: () => setCounterOn(false)
      });

      // Cleanup on Component unmount
      return () => {
        trigger.kill();
      }
    }
  }, [])

  // Custom formatter function
  const formatNumber = (value: number): string => {
    if (value >= 1000) {
      return `${(value / 1000).toFixed(1)}k`; // Converts to '1.0k', use .toFixed(0) for '1k'
    }
    return value.toString();
  };


  return (
    <div ref={countRef} className='bg-slate-200 py-6'>
      <div className='container'>
          <div className='flex flex-col md:flex-row justify-center gap-7 md:gap-16 lg:gap-36'>
            <div className='flex flex-col items-center'>
              <h2 className='text-primaryColor text-3xl font-bold'>
                {counterOn && <CountUp start={0} end={1000} duration={2} />}+
              </h2>
              <p className='text-[14px]'>Successful projects</p>
            </div>
            <div className='flex flex-col items-center'>
              <h2 className='text-primaryColor text-3xl font-bold'>
                {counterOn && <CountUp start={0} end={12} duration={3} formattingFn={formatNumber} />}
              </h2>
              <p className='text-[14px]'>Countries</p>
            </div>
            <div className='flex flex-col items-center'>
              <h2 className='text-primaryColor text-3xl font-bold'>
                {counterOn && <CountUp start={0} end={1000000} duration={2} />}
              </h2>
              <p className='text-[14px]'>Satisfied clients</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Count