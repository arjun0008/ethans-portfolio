// Components
import Circles from '../../components/Circles';

// icons
import {BsArrowRight} from 'react-icons/bs';

// framer
import {motion} from 'framer-motion';
import {fadeIn} from '../../variants';
  
const Contact = () => {
  return (
    <div className='h-full bg-primary/30'>
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
        <div className='flex flex-col w-full max-w-[700px]'>
          {/* text */}
          <motion.h2 variants={fadeIn('up',0.2)} initial='hidden' animate='show' exit='hidden' className="h2 text-center mb-12">Let&apos;s <span className='text-accent'>connect</span></motion.h2>
          {/* Form */}
          <motion.form variants={fadeIn('up',0.4)} initial='hidden' animate='show' exit='hidden' className="flex-1 flex flex-col gap-6 w-full mx-auto" action="" method="">
            {/*  input group */}
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                id="id"
                name="name"
                placeholder="Name"
                className="input w-full border border-slate-200/20 rounded-lg py-3 px-5 outline-none	bg-transparent"
              />
              <input
                type="text"
                id="id"
                name="name"
                placeholder="Email"
                className="input w-full border border-slate-200/20 rounded-lg py-3 px-5 outline-none	bg-transparent"
              />
            </div>
            <input
              type="text"
              id="id"
              name="name"
              placeholder="Subject"
              className=" input w-full border border-slate-200/20 rounded-lg py-3 px-5 outline-none	bg-transparent"
            />
            <textarea
              id="id"
              name="name"
              placeholder="placeholder"
              className="textarea w-full p-4 bg-transparent border border-gray-200/20 rounded-lg outline-none resize-none min-h-[150px]"
            />
            <button type="" className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'>
              <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-300'>Let&apos;s talk</span>
              <BsArrowRight className='translate-y-[120%] opacity-0 transition-all duration-300 absolute text-[22px] group-hover:translate-y-0 group-hover:opacity-100' />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
