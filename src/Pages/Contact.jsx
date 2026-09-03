import React, { useState } from 'react'

function Contact() {

  const initialstate = {
    name:"",
    email:"",
    message:"",
  }
  const [formDetails, setformDetails] = useState(initialstate)

  const handleSubmit = (e) => {
  e.preventDefault()

    console.log({formDetails});

    setformDetails(initialstate)
    
  }

  return (
    <div className='bg-slate-100 px-20 py-20 '>
      <div className='rounded-xl bg-white shadow-xl shadow-slate-300 p-5 '>

        <div>
          <h1 className='text-3xl font-bold text-center' >Get in Touch with <span className='text-blue-600'>BrandName</span></h1>
        </div>
        {/* main content */}
        <div className='grid grid-cols-2 p-10'>
          {/* left aprt */}
          <div className='flex flex-col gap-8 p-8'>
            <div className='flex flex-col gap-1'>
              <h1 className='text-3xl font-bold text-black'>Contact Info</h1>
              <p className='text-xl line-clamp-2'>Have a question or need support? We're here to help you with your electronics journey.</p>
            </div>
            <div>
              <h2 className='text-xl'><span className='font-semibold text-xl'>Address:</span> 123 Web Lane, Laptop Location,Near by Me, India</h2>
              <h2 className='text-xl'><span className='font-semibold text-xl'>Email:</span> support@Jhepto.com</h2>
              <h2 className='text-xl'><span className='font-semibold text-xl'>Phone:</span> +91 9876543210</h2>
            </div>
          </div>
          {/* right part */}
          <div className='p-8'>
            <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
              <label className=' font-semibold text-xl' htmlFor="name">Your Name:</label>
              <input value={formDetails.name} onChange={(e) => setformDetails({...formDetails , name:e.target.value})} className='outline-none h-10 rounded border border-slate-400' type="text" required placeholder='  Enter your name' id='name' />

              <label className='font-semibold text-xl' htmlFor="email">Your Name:</label>
              <input value={formDetails.email} onChange={(e) => setformDetails({...formDetails, email:e.target.value})} className='outline-none border h-10 rounded border-slate-400' type="email" required placeholder='  Enter your email' id='email' />

              <label className='font-semibold text-xl' htmlFor="message">Your Message:</label>
              <textarea value={formDetails.message} onChange={(e)=>setformDetails({...formDetails, message:e.target.value})} className='outline-none border rounded border-slate-400' name="message" id="message" rows="8"></textarea>


              <button type='submit' className='px-3 cursor-pointer py-3 text-xl hover:bg-blue-500 rounded text-white font-semibold bg-blue-600'>Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact