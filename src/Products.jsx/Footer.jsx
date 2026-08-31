import React from 'react'

function Footer() {
  return (
    <div>
    <footer className="bg-black text-white py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-300">
          &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
        </p>

        <div className="flex items-center gap-6 text-sm text-gray-300">
          <a href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Terms of Service
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer