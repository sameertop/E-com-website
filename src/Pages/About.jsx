import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div className='bg-slate-100 p-10 '>
    <div className='flex flex-col gap-10 rounded-2xl p-10 m-5 text-black bg-white shadow-xl shadow-slate-400 '>
      <div className='flex flex-col gap-5'>
        <h1 className='text-5xl text-center font-bold text-black'>About Brand</h1>
        <h3 className='text-xl'>Welcome to <span className='text-blue-700 font-bold'>Brand</span>, your one-stop destination for the latest and greatest in electronics. From cutting-edge gadgets to must-have accessories, we’re here to power up your tech life with premium products and unbeatable service. </h3>
        <h1 className='text-3xl font-bold text-blue-700'>Our Mission</h1>
        <h3 className='text-xl'>At <span className='text-blue-700 font-bold'>Brand</span>, our mission is to make innovative technology accessible to everyone. We’re passionate about connecting people with the tools and tech they need to thrive in a digital world — all at competitive prices and deliveblue with speed and care.</h3>

      </div>
      <div className='flex flex-col gap-3'>
        <h1 className='text-3xl text-blue-700 font-bold'>Why Choose Brand?</h1>
        <ul className='flex flex-col gap-3 text-xl font-semibold list-disc px-10'>
          <li>Top-quality electronic products from trusted brands</li>
          <li>Lightning-fast and secure shipping</li>
          <li>Reliable customer support, always ready to help</li>
          <li>Easy returns and hassle-free shopping experience</li>
        </ul>
      </div>
      <div className='flex flex-col gap-3'>
        <h1 className='text-3xl font-bold text-blue-700 '>
          Our Vision
        </h1>
        <h3 className='text-xl'>We envision a future where technology elevates everyday life. At Brand, we’re committed to staying ahead of the curve, offering cutting-edge solutions that are both practical and affordable.</h3>
      </div>
      <div className='flex flex-col gap-3 text-center justify-center items-center'>
        <h1 className='text-3xl font-bold text-blue-700'>Join the Brand Family</h1>
        <h3 className='text-xl'>Whether you’re a tech enthusiast, a professional, or just looking for something cool and functional — Brand has something for everyone.</h3>
        <Link className='px-4 py-3 font-semibold bg-blue-600 text-white rounded-xl w-fit' to="/product">start shopping</Link>

      </div>

    </div>
    </div>
  )
}

export default About