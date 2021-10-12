import React from 'react'

export default function About (props) {
  return (
    // header container
    <div>

      {/* steps section */}
      <div className="ml-4 mr-4 bg-white">
        <div className="">
          <h2 className="p-8 text-2xl text-black flex items-center justify-center bg-altbox border-none leading-2 pl-4 pr-4 box-border rounded-lg m-10">Austin Spurs was formed on February 26th, 2012...</h2>
        </div>

        <div className="flex items-center justify-center">
          <div className="grid grid-cols-3 gap-4">

            <div className="min-h-screen bg-gray-100 flex items-center justify-center">
              <div className=" w-80 bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 duration-500 transform transition cursor-pointer">
                <img src="./images/Logo.png" alt="Chuck Hoffman<"></img>
                <div className="p-5">
                  <h1 className="text-2xl font-bold">Chuck Hoffman</h1>
                  <p className="mt-2 text-lg font-semibold text-gray-600">Chair</p>
                  <p className="mt-1 text-gray-500 font-">Chuck...</p>
                  <div className="flex justify-center mr-8 underline hover:text-blue-800 visited:text-purple-600"><a rel="noopener noreferrer" target="_blank" href="h">
                  Email</a></div>
                  <div className="flex justify-center mr-8 underline hover:text-blue-800 visited:text-purple-600"><a rel="noopener noreferrer" target="_blank" href="">
                  Twitter</a></div>
                </div>
              </div>
            </div>

            <div className="min-h-screen bg-gray-100 flex items-center justify-center">
              <div className=" w-80 bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 duration-500 transform transition cursor-pointer">
                <img src="./images/Logo.png" alt=""></img>
                <div className="p-5">
                  <h1 className="text-2xl font-bold">Kevin Buechler</h1>
                  <p className="mt-2 text-lg font-semibold text-gray-600">Vice Chair</p>
                  <p className="mt-1 text-gray-500 font-">Kevin...</p>
                  <div className="flex justify-center mr-8 underline hover:text-blue-800 visited:text-purple-600"><a rel="noopener noreferrer" target="_blank" href="">
                  Email</a></div>
                  <div className="flex justify-center mr-8 underline hover:text-blue-800 visited:text-purple-600"><a rel="noopener noreferrer" target="_blank" href="">
                  Twitter</a></div>
                </div>
              </div>
            </div>

            <div className="min-h-screen bg-gray-100 flex items-center justify-center">
              <div className=" w-80 bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 duration-500 transform transition cursor-pointer">
                <img src="./images/Logo.png" alt=""></img>
                <div className="p-5">
                  <h1 className="text-2xl font-bold">Dianne Dillinger</h1>
                  <p className="mt-2 text-lg font-semibold text-gray-600">Outreach</p>
                  <p className="mt-1 text-gray-500 font-">Dianne...</p>
                  <div className="flex justify-center mr-8 underline hover:text-blue-800 visited:text-purple-600"><a rel="noopener noreferrer" target="_blank" href="">
                  Email</a></div>
                  <div className="flex justify-center mr-8 underline hover:text-blue-800 visited:text-purple-600"><a rel="noopener noreferrer" target="_blank" href="">
                  Twitter</a></div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}
