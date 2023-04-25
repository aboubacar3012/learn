import { Fragment } from "react"
// import { Popover, Transition } from "@headlessui/react"
import MobileNav from "./Mobile/MobileNav"
import Link from "next/link"
import coursesJson from "../data/courses.json"
import { MenuIcon } from "@heroicons/react/outline"
import { ChevronDownIcon, CodeIcon } from "@heroicons/react/solid"

import type { RootState } from "../redux/store"
import { useSelector, useDispatch } from "react-redux"
import { logout } from "../redux/slices/auth.slice"
import CallToChat from "./call-to-chat"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function Header() {
  const auth = useSelector((state: RootState) => state.auth)
  const dispatch = useDispatch()
  // const coursesJsonCourses = Object.keys(coursesJson)

  return (
    <>
      {/* <Popover className="relative bg-white  lg:block">
        <div
          className="absolute inset-0 shadow z-30 pointer-events-none"
          aria-hidden="true"
        />
        <div className="relative z-20">
          <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-8 md:justify-start md:space-x-10">
            <div>
              <Link href="/">
                <a className="flex">
                  <span className="sr-only">Workflow</span>
                  <CodeIcon className="h-8 w-auto sm:h-10 text-blue-500" />
                </a>
              </Link>
            </div> */}

      {/* <div className="md:hidden">
              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
              <Popover.Group as="nav" className="flex space-x-10">
                <Popover>
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open ? "text-gray-900" : "text-gray-500",
                          "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        )}
                        data-test="courses-dropdown"
                      >
                        <span>Courses</span>
                        <ChevronDownIcon
                          className={classNames(
                            open ? "text-gray-600" : "text-gray-400",
                            "ml-2 h-5 w-5 group-hover:text-gray-500"
                          )}
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 -translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 -translate-y-1"
                      >
                        <Popover.Panel className="hidden md:block absolute z-10 top-full inset-x-0 transform shadow-lg bg-white">
                          <div
                            className="max-w-7xl mx-auto grid gap-y-6 px-4 py-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-4 lg:px-8 lg:py-12 xl:py-16"
                            data-test="courses-dropdown-menu"
                          >
                            {coursesJsonCourses.map((course, index) => (
                              <a
                                key={coursesJson[course].slug}
                                href={`/${coursesJson[course].slug}`}
                                className="-m-3 p-3 flex flex-col justify-between rounded-lg hover:bg-gray-50"
                              >
                                <div className="flex md:h-full lg:flex-col">
                                  <div className="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                                    <div>
                                      <p className="text-base font-medium text-gray-900">
                                        {`${index + 1}. ${
                                          coursesJson[course].title
                                        }`}
                                      </p>
                                      <p className="mt-1 text-sm text-gray-500">
                                        {coursesJson[course].description}
                                      </p>
                                    </div>
                                    <p className="mt-2 text-sm font-medium text-blue-500 lg:mt-4">
                                      Get Started{" "}
                                      <span aria-hidden="true">&rarr;</span>
                                    </p>
                                  </div>
                                </div>
                              </a>
                            ))}
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
              </Popover.Group>
            </div> */}
      {/* <h1>Innotech Academy </h1>
            
          </div>
        </div>
      </Popover> */}

      {/* <MobileNav
        content={content}
        courses={courses}
        progressService={progressService}
      /> */}

      <div className="bg-white shadow">
        {auth.isConnected && <CallToChat /> }
        <div className="container mx-auto px-4 ">
          <div className="flex items-center justify-between py-4">
            <div>
              <div>
                <Link href="/" className="flex mr-5 items-center space-x-1 md:space-x-5">
                  <span className="sr-only">Innotech Academy</span>
                  <CodeIcon className="h-8 w-auto sm:h-10 text-blue-500" />
                  <h1>Innotech Academy</h1>
                </Link>
              </div>
            </div>
            <div className="md:flex items-center hidden">
              <Link href="/" className="text-blue-800 text-sm font-semibold hover:text-purple-600 mr-4">
                  Administration
              </Link>
              <Link href="/" className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4">
                  Accueil
              </Link>
              <Link href="/lessons" className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4">
                  Programme
              </Link>
              <Link href="/contact" className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4">
                  Contact
              </Link>
            </div>
            {auth.isConnected ? (
              <div className="flex items-center">
                <Link
                  href="/profile"
                  className="text-blue-500 mx-1 text-sm font-semibold border px-4 py-2 rounded-lg hover:text-blue-600 hover:border-blue-600 cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <p
                  onClick={() => dispatch(logout())}
                  className="text-red-500 mx-1 text-sm font-semibold border px-4 py-2 rounded-lg hover:text-red-600 hover:border-red-600 cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm10.72 4.72a.75.75 0 011.06 0l3 3a.75.75 0 010 1.06l-3 3a.75.75 0 11-1.06-1.06l1.72-1.72H9a.75.75 0 010-1.5h10.94l-1.72-1.72a.75.75 0 010-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </p>
              </div>
            ) : (
              <>
                <div className="hidden md:flex items-center">
                  <Link
                    href="/connexion"
                    className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4"
                  >
                    Connexion
                  </Link>
                  {/* <Link
                    href="/inscription"
                    className="text-gray-800 text-sm font-semibold border px-4 py-2 rounded-lg hover:text-purple-600 hover:border-purple-600"
                  >
                    Inscription
                  </Link> */}
                </div>
                <div className="md:hidden flex items-center">
                  <Link
                    href="/connexion"
                    className="text-blue-500 mx-1 text-sm font-semibold border px-4 py-2 rounded-lg hover:text-blue-600 hover:border-blue-600 cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                      />
                    </svg>
                  </Link>
                  {/* <Link
                    href="/inscription"
                    className="text-red-500 mx-1 text-sm font-semibold border px-4 py-2 rounded-lg hover:text-red-600 hover:border-red-600 cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                      />
                    </svg>
                  </Link> */}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
