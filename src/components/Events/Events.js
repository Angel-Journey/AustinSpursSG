import React from 'react'

export default function Events (props) {
  return (
    // header container
    <div>

      {/* <div className="ml-4 mr-4 bg-white">
        <div className="">
          <h2 className="p-8 text-2xl text-black flex items-center justify-center bg-altbox border-none leading-2 pl-4 pr-4 box-border rounded-lg m-10">Events...</h2>
        </div>
      </div> */}

      <div className="container flex flex-col mx-auto w-full items-center justify-center mt-10">

        <ul className="flex flex-col">
          <div className="px-4 py-5 sm:px-6 w-full border dark:bg-gray-800 bg-white shadow mb-2 rounded-md">
            <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                Events
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-200">
                Mister Tramps
            </p>
          </div>

          <li className="border-gray-400 flex flex-row mb-2">
            <div className="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
              <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                <a href="#" className="block relative">
                  <img alt="profil" src="./images/Logo.png" className="mx-auto object-cover rounded-full h-10 w-10 "/>
                </a>
              </div>
              <div className="flex-1 pl-1 md:mr-16">
                <div className="font-medium dark:text-white">
                        Vitesse vs Tottenham (Europa Conference)
                </div>
                <div className="text-gray-600 dark:text-gray-200 text-sm">
                        Thu, Oct 21
                </div>
              </div>
              <div className="text-gray-600 dark:text-gray-200 text-xs">
                    11:45 AM
              </div>
            </div>
          </li>
          <li className="border-gray-400 flex flex-row mb-2">
            <div className="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
              <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                <a href="#" className="block relative">
                  <img alt="profil" src="./images/Logo.png" className="mx-auto object-cover rounded-full h-10 w-10 "/>
                </a>
              </div>
              <div className="flex-1 pl-1 md:mr-16">
                <div className="font-medium dark:text-white">
                        West Ham vs Tottenham
                </div>
                <div className="text-gray-600 dark:text-gray-200 text-sm">
                        Sun, Oct 24
                </div>
              </div>
              <div className="text-gray-600 dark:text-gray-200 text-xs">
                    8:00 AM
              </div>
            </div>
          </li>
          <li className="border-gray-400 flex flex-row mb-2">
            <div className="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
              <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                <a href="#" className="block relative">
                  <img alt="profil" src="./images/Logo.png" className="mx-auto object-cover rounded-full h-10 w-10 "/>
                </a>
              </div>
              <div className="flex-1 pl-1 md:mr-16">
                <div className="font-medium dark:text-white">
                        Burnley vs Tottenham (EFL Cup)
                </div>
                <div className="text-gray-600 dark:text-gray-200 text-sm">
                        Wed, Oct 27
                </div>
              </div>

              <div className="text-gray-600 dark:text-gray-200 text-xs">
                    1:45 PM
              </div>
            </div>
          </li>
          <li className="border-gray-400 flex flex-row mb-2">
            <div className="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
              <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                <a href="#" className="block relative">
                  <img alt="profil" src="./images/Logo.png" className="mx-auto object-cover rounded-full h-10 w-10 "/>
                </a>
              </div>
              <div className="flex-1 pl-1 md:mr-16">
                <div className="font-medium dark:text-white">
                        Tottenham vs Manchester United
                </div>
                <div className="text-gray-600 dark:text-gray-200 text-sm">
                        Sat, Oct 30th
                </div>
              </div>
              <div className="text-gray-600 dark:text-gray-200 text-xs">
                        11:30 AM
              </div>
            </div>
          </li>
        </ul>
      </div>

    </div>
  )
}
