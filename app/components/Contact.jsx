import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, {useState} from 'react'

const Contact = () => {

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "85083e90-e655-4809-a97f-1e9c8a5c6ea0");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };



  return (
    <div className='w-full px-[12%] py-10 scroll-mt-20 bg-[ur("/footer-bg-color.png")] bg-no-repeat bg-center bg-length[90%_auto] dark:bg-none' id="contact">
         <h4 className='text-center mb-2 text-lg font-ovo'>Get in touch</h4>
          <h2 className='text-center text-5xl font-ovo'>Contact Me</h2>
          <p className='text-center font-ovo max-w-2xl mx-auto mt-5 mb-12'>  I'd love to hear from you! if you have any further question, feedback, or comments, feel free to ask on the form below.</p> 

          <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>
              <div className='grid grid-cols-(--my-grid-auto) gap-6 mt-10 mb-8'>
                  <input name='name' type="text" placeholder='enter your name...' required
                  className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90'/>
                  <input type="email" name='email' placeholder='enter your email...' className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white  bg-white dark:bg-darkHover/30 dark:border-white/90' required/>
              </div>
        <textarea rows='16' name="message" placeholder="Enter you message..." required className='w-full outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 p-4 h-32 resize-none
               bg-white dark:bg-darkHover/30 dark:border-white/90'></textarea>

              <button type="submit"
                  className="py-3 px-8 w-max flex-center gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 cursor-pointer dark:bg-transparent dark:hover:bg-darkHover dark:border-[0.5px]">Submit<Image src={assets.right_arrow_white} alt="" className="w-4" /></button>

              <p className='mt-4'>{result}</p>
          </form>
    </div>
  )
}

export default Contact
