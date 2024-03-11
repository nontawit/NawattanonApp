import React from 'react'

const page = () => {
  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Address, Tel, Email */}
        <div className="space-y-4">
          <div className="flex items-center">
            <svg className="w-6 h-6 mr-2 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-2.4 0-4.72-.7-6.67-2C5.86 16.61 7.24 14 10 14h4c2.76 0 4.14 2.61 2.67 4-1.95 1.3-4.27 2-6.67 2zm0-16a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path>
            </svg>
            <p>123 Main Street, Cityville</p>
          </div>
          <div className="flex items-center">
            <svg className="w-6 h-6 mr-2 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-2.76 0-5-2.24-5-5H7c0 2.76-2.24 5-5 5s-5-2.24-5-5 2.24-5 5-5h1c0-3.87 3.13-7 7-7s7 3.13 7 7h1c2.76 0 5 2.24 5 5s-2.24 5-5 5z"></path>
            </svg>
            <p>(123) 456-7890</p>
          </div>
          <div className="flex items-center">
            <svg className="w-6 h-6 mr-2 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 2h-4.586l-2.707 2.707c-1.247 1.248-3.289 1.248-4.536 0L9.293 2H4c-1.104 0-2 .896-2 2v16c0 1.104.896 2 2 2h18c1.104 0 2-.896 2-2V4c0-1.104-.896-2-2-2z"></path>
            </svg>
            <p>info@example.com</p>
          </div>
        </div>
        {/* Line, Fanpage */}
        <div className="space-y-4">
          <div className="flex items-center">
            <svg className="w-6 h-6 mr-2 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 17.5v2.5M14 17.5v2.5"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5l1.216 6.214C4.27 13.972 5.898 15 8 15h8c2.102 0 3.73-1.028 3.784-3.786L20 5M3 5l1.216 6.214C4.27 13.972 5.898 15 8 15h8c2.102 0 3.73-1.028 3.784-3.786L20 5M3 5l1.216 6.214C4.27 13.972 5.898 15 8 15h8c2.102 0 3.73-1.028 3.784-3.786L20 5"></path>
            </svg>
            <p>@yourlineid</p>
          </div>
          <div className="flex items-center">
            <svg className="w-6 h-6 mr-2 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-2.6 9.6h-4.8v4.8h-2.4v-4.8H8.8v-2.4h4.8V8.8h2.4v4.8h4.8v2.4z"></path>
            </svg>
            <p>yourfanpage</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
