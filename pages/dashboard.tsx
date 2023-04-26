const Dashboard = () => {
  return (
    <div className="h-screen w-full flex overflow-hidden select-none">
      <nav className="w-24 flex flex-col items-center bg-white dark:bg-gray-800 py-4">
        {/* Left side NavBar */}
        <div>
          {/* App Logo */}
          <svg
            className="h-8 w-8 fill-current text-blue-600 dark:text-blue-300"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3m6.82
					6L12 12.72 5.18 9 12 5.28 18.82 9M17 16l-5 2.72L7 16v-3.73L12
					15l5-2.73V16z"
            />
          </svg>
        </div>
        <ul className="mt-2 text-gray-700 dark:text-gray-400 capitalize">
          {/* Links */}
          <li className="mt-3 p-2 text-blue-600 dark:text-blue-300 rounded-lg">
            <a href="#" className=" flex flex-col items-center">
              <svg className="fill-current h-5 w-5" viewBox="0 0 24 24">
                <path
                  d="M19 5v2h-4V5h4M9 5v6H5V5h4m10 8v6h-4v-6h4M9
							17v2H5v-2h4M21 3h-8v6h8V3M11 3H3v10h8V3m10
							8h-8v10h8V11m-10 4H3v6h8v-6z"
                />
              </svg>
              <span className="text-xs mt-2">DashBoard</span>
            </a>
          </li>
          <li
            className="mt-3 p-2 hover:text-blue-600 dark-hover:text-blue-300
				rounded-lg"
          >
            <a href="#" className=" flex flex-col items-center">
              <svg className="fill-current h-5 w-5" viewBox="0 0 24 24">
                <path
                  d="M23 3v-.5a2.5 2.5 0 00-5 0V3c-.55 0-1 .45-1 1v4c0
							.55.45 1 1 1h5c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1m-1
							0h-3v-.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V3M6
							11h9v2H6v-2m0-4h9v2H6V7m16 4v5c0 1.11-.89 2-2 2H6l-4
							4V4a2 2 0 012-2h11v2H4v13.17L5.17 16H20v-5h2z"
                />
              </svg>
              <span className="text-xs mt-2">Messages</span>
            </a>
          </li>
          <li
            className="mt-3 p-2 hover:text-blue-600 dark-hover:text-blue-300
				rounded-lg"
          >
            <a href="#" className=" flex flex-col items-center">
              <svg className="fill-current h-5 w-5" viewBox="0 0 24 24">
                <path
                  d="M21 18v1a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0
							012-2h14a2 2 0 012 2v1h-9a2 2 0 00-2 2v8a2 2 0 002
							2m0-2h10V8H12m4 5.5a1.5 1.5 0 01-1.5-1.5 1.5 1.5 0
							011.5-1.5 1.5 1.5 0 011.5 1.5 1.5 1.5 0 01-1.5 1.5z"
                />
              </svg>
              <span className="text-xs mt-2">Comptabilite</span>
            </a>
          </li>
          <li
            className="mt-3 p-2 hover:text-blue-600 dark-hover:text-blue-300
				rounded-lg"
          >
            <a href="#" className=" flex flex-col items-center">
              <svg className="fill-current h-5 w-5" viewBox="0 0 512 512">
                <path
                  d="M505 442.7L405.3
							343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7
							44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208
							208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7
							17l99.7 99.7c9.4 9.4 24.6 9.4 33.9
							0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7
							0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128
							57.2 128 128 0 70.7-57.2 128-128 128z"
                />
              </svg>
              <span className="text-xs mt-2">Emplois</span>
            </a>
          </li>
          <li
            className="mt-3 p-2 hover:text-blue-600 dark-hover:text-blue-300
				rounded-lg"
          >
            <a href="#" className=" flex flex-col items-center">
              <svg className="fill-current h-5 w-5" viewBox="0 0 24 24">
                <path
                  d="M19 19H5V8h14m0-5h-1V1h-2v2H8V1H6v2H5a2 2 0 00-2
							2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2m-2.47
							8.06L15.47 10l-4.88 4.88-2.12-2.12-1.06 1.06L10.59
							17l5.94-5.94z"
                />
              </svg>
              <span className="text-xs mt-2">Planning</span>
            </a>
          </li>
          <li className="mt-3 p-2 hover:text-blue-600 rounded-lg">
            <a href="#" className=" flex flex-col items-center">
              <svg className="fill-current h-5 w-5" viewBox="0 0 24 24">
                <path
                  d="M17 10.5V7a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0
							001 1h12a1 1 0 001-1v-3.5l4 4v-11l-4 4z"
                />
              </svg>
              <span className="text-xs mt-2">Autres</span>
            </a>
          </li>
        </ul>
        <div
          className="mt-auto flex items-center p-2 text-blue-700 bg-purple-200
			dark:text-blue-500 rounded-full"
        >
          {/* important action */}
          <a href="#">
            <svg className="fill-current h-5 w-5" viewBox="0 0 24 24">
              <path
                d="M12 1c-5 0-9 4-9 9v7a3 3 0 003 3h3v-8H5v-2a7 7 0 017-7
						7 7 0 017 7v2h-4v8h4v1h-7v2h6a3 3 0
						003-3V10c0-5-4.03-9-9-9z"
              />
            </svg>
          </a>
        </div>
      </nav>
      {/* // Container */}
      <main className="my-1 pt-2 pb-2 px-10 flex-1 bg-gray-200 dark:bg-black rounded-l-lg transition duration-500 ease-in-out overflow-y-auto">
        {/* // Statistics */}
        <div className="grid grid-cols-12 gap-6 mt-5">
          <a
            className="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
            href="#"
          >
            <div className="p-5">
              <div className="flex justify-between">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                <div className="bg-green-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                  <span className="flex items-center">30%</span>
                </div>
              </div>
              <div className="ml-2 w-full flex-1">
                <div>
                  <div className="mt-3 text-3xl font-bold leading-8">4.510</div>
                  <div className="mt-1 text-base text-gray-600">Item Sales</div>
                </div>
              </div>
            </div>
          </a>
          <a
            className="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
            href="#"
          >
            <div className="p-5">
              <div className="flex justify-between">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-yellow-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
                <div className="bg-red-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                  <span className="flex items-center">30%</span>
                </div>
              </div>
              <div className="ml-2 w-full flex-1">
                <div>
                  <div className="mt-3 text-3xl font-bold leading-8">4.510</div>
                  <div className="mt-1 text-base text-gray-600">Item Sales</div>
                </div>
              </div>
            </div>
          </a>
          <a
            className="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
            href="#"
          >
            <div className="p-5">
              <div className="flex justify-between">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-pink-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                  />
                </svg>
                <div className="bg-yellow-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                  <span className="flex items-center">30%</span>
                </div>
              </div>
              <div className="ml-2 w-full flex-1">
                <div>
                  <div className="mt-3 text-3xl font-bold leading-8">4.510</div>
                  <div className="mt-1 text-base text-gray-600">Item Sales</div>
                </div>
              </div>
            </div>
          </a>
          <a
            className="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
            href="#"
          >
            <div className="p-5">
              <div className="flex justify-between">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-green-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                  />
                </svg>
                <div className="bg-blue-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                  <span className="flex items-center">30%</span>
                </div>
              </div>
              <div className="ml-2 w-full flex-1">
                <div>
                  <div className="mt-3 text-3xl font-bold leading-8">4.510</div>
                  <div className="mt-1 text-base text-gray-600">Item Sales</div>
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* Table */}
        <div className="sm:px-6 w-full">
          {/*- more free and premium Tailwind CSS components at https://tailwinduikit.com/ -*/}
          <div className="px-4 md:px-10 py-4 md:py-7">
            <div className="flex items-center justify-between">
              <p
                tabIndex={0}
                className="focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800"
              >
                Tasks
              </p>
              <div className="py-3 px-4 flex items-center text-sm font-medium leading-none text-gray-600 bg-gray-200 hover:bg-gray-300 cursor-pointer rounded">
                <p>Sort By:</p>
                <select
                  aria-label="select"
                  className="focus:text-indigo-600 focus:outline-none bg-transparent ml-1"
                >
                  <option className="text-sm text-indigo-800">Latest</option>
                  <option className="text-sm text-indigo-800">Oldest</option>
                  <option className="text-sm text-indigo-800">Latest</option>
                </select>
              </div>
            </div>
          </div>
          <div className="relative bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10">
            <div className="sticky top-0 sm:flex items-center justify-between">
              <div className="flex items-center">
                <a
                  className="rounded-full focus:outline-none focus:ring-2  focus:bg-indigo-50 focus:ring-indigo-800"
                  href=" javascript:void(0)"
                >
                  <div className="py-2 px-8 bg-indigo-100 text-indigo-700 rounded-full">
                    <p>Tous</p>
                  </div>
                </a>
                <a
                  className="rounded-full focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800 ml-4 sm:ml-8"
                  href="javascript:void(0)"
                >
                  <div className="py-2 px-8 text-gray-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-full ">
                    <p>Débutants</p>
                  </div>
                </a>
                <a
                  className="rounded-full focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800 ml-4 sm:ml-8"
                  href="javascript:void(0)"
                >
                  <div className="py-2 px-8 text-gray-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-full ">
                    <p>Pros</p>
                  </div>
                </a>
                <a
                  className="rounded-full focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800 ml-4 sm:ml-8"
                  href="javascript:void(0)"
                >
                  <div className="py-2 px-8 text-gray-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-full ">
                    <p>Experts</p>
                  </div>
                </a>
                <a
                  className="rounded-full focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800 ml-4 sm:ml-8"
                  href="javascript:void(0)"
                >
                  <div className="py-2 px-8 text-gray-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-full ">
                    <p>Actifs</p>
                  </div>
                </a>
                <a
                  className="rounded-full focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800 ml-4 sm:ml-8"
                  href="javascript:void(0)"
                >
                  <div className="py-2 px-8 text-gray-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-full ">
                    <p>Inactifs</p>
                  </div>
                </a>
              </div>
              <button
                onclick="popuphandler(true)"
                className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded"
              >
                <p className="text-sm font-medium leading-none text-white">Add Task</p>
              </button>
            </div>
            <div className="mt-7 overflow-y-scroll  h-[38rem]">
              <table className="w-full whitespace-nowrap">
                <thead>
                  <tr>
                    <th className="py-3 text-red-900 bg-red-300">Matricule</th>
                    <th className="py-3 text-red-900 bg-red-300">Nom</th>
                    <th className="py-3 text-red-900 bg-red-300">Prenom</th>
                    <th className="py-3 text-red-900 bg-red-300">Date de naissance</th>
                    <th className="py-3 text-red-900 bg-red-300">E-mail</th>
                    <th className="py-3 text-red-900 bg-red-300">Telephone</th>
                    <th className="py-3 text-red-900 bg-red-300">Status</th>
                    <th className="py-3 text-red-900 bg-red-300"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    tabIndex={0}
                    className="focus:outline-none h-16 border border-gray-100 rounded"
                  >
                    <td>
                      <p className="text-base text-center font-medium leading-none text-gray-700 mr-2">
                        00304043u43FGD
                      </p>
                    </td>
                    <td className="">
                      <p className="text-base text-center font-medium leading-none text-gray-700 mr-2">
                        Diallo
                      </p>
                    </td>
                    <td className="">
                      <p className="text-base text-center font-medium leading-none text-gray-700 mr-2">
                        Diallo
                      </p>
                    </td>
                    <td className="">
                      <p className="text-base text-center font-medium leading-none text-gray-700 mr-2">
                        Diallo
                      </p>
                    </td>
                    <td className="">
                      <p className="text-base text-center font-medium leading-none text-gray-700 mr-2">
                        Diallo
                      </p>
                    </td>
                    <td className="">
                      <p className="text-base text-center font-medium leading-none text-gray-700 mr-2">
                        Diallo
                      </p>
                    </td>
                    <td className="">
                      <p className="text-base text-center font-medium leading-none text-gray-700 mr-2">
                        Diallo
                      </p>
                    </td>
                    <td className="">
                      <p className="text-base text-center font-medium leading-none text-gray-700 mr-2">
                        Diallo
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Dashboard
