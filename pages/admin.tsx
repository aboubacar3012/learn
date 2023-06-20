import Comptability from "../components/admin/comptabily"
import Dashboard from "../components/admin/dashboard"
import Inbox from "../components/admin/inbox"
import UserInfos from "../components/admin/userInfos"
import { useRouter } from "next/router"
import type { RootState } from "../redux/store"
import { useSelector, useDispatch } from "react-redux"
import { useState, useEffect } from "react"

const AdminPage = () => {
  const auth = useSelector((state: RootState) => state.auth)

  const router = useRouter()

  useEffect(() => {
    if (auth.user && auth.user.role !== "admin") router.push("/")
  }, [auth])

  const [sidebarIndex, setSidebarIndex] = useState(1)

  return (
    <div className="h-screen w-full flex overflow-hidden">
      <nav className="w-24 flex flex-col items-center bg-white  py-4">
        {/* Left side NavBar */}
        <div>
          {/* App Logo */}
          <svg className="h-8 w-8 fill-current text-blue-600 " viewBox="0 0 24 24">
            <path
              d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3m6.82
					6L12 12.72 5.18 9 12 5.28 18.82 9M17 16l-5 2.72L7 16v-3.73L12
					15l5-2.73V16z"
            />
          </svg>
        </div>
        <ul className="mt-2 text-gray-700 capitalize">
          {/* Links */}
          <li
            onClick={() => setSidebarIndex(1)}
            className={`mt-3 p-2 ${
              sidebarIndex === 1 ? "text-blue-600" : "hover:text-blue-600"
            }  rounded-lg`}
          >
            <a href="#" className=" flex flex-col items-center">
              <svg className="fill-current h-5 w-5" viewBox="0 0 24 24">
                <path
                  d="M19 5v2h-4V5h4M9 5v6H5V5h4m10 8v6h-4v-6h4M9
							17v2H5v-2h4M21 3h-8v6h8V3M11 3H3v10h8V3m10
							8h-8v10h8V11m-10 4H3v6h8v-6z"
                />
              </svg>
              <span className="text-xs mt-2">Dashboard</span>
            </a>
          </li>
          <li
            onClick={() => setSidebarIndex(2)}
            className={`mt-3 p-2 ${
              sidebarIndex === 2 ? "text-blue-600" : "hover:text-blue-600"
            }  rounded-lg`}
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
            onClick={() => setSidebarIndex(3)}
            className={`mt-3 p-2 ${
              sidebarIndex === 3 ? "text-blue-600" : "hover:text-blue-600"
            } rounded-lg`}
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
            onClick={() => setSidebarIndex(4)}
            className={`mt-3 p-2 ${
              sidebarIndex === 4 ? "text-blue-600" : "hover:text-blue-600"
            }  rounded-lg`}
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
            onClick={() => setSidebarIndex(5)}
            className={`mt-3 p-2 ${
              sidebarIndex === 5 ? "text-blue-600" : "hover:text-blue-600"
            }  rounded-lg`}
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
          <li
            onClick={() => setSidebarIndex(6)}
            className={`mt-3 p-2 ${
              sidebarIndex === 6 ? "text-blue-600" : "hover:text-blue-600"
            } rounded-lg`}
          >
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
        <div className="mt-auto flex items-center p-2 text-blue-700 bg-purple-200 rounded-full">
          {/* important action */}
          <a href="/">
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
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
              />
            </svg>
          </a>
        </div>
      </nav>
      {/* // Container */}
      <main className="my-1 pt-2 pb-2 px-10 flex-1 bg-gray-200  rounded-l-lg transition duration-500 ease-in-out overflow-y-auto">
        {sidebarIndex === 1 && <Dashboard />}
        {sidebarIndex === 2 && <Inbox />}
        {sidebarIndex === 3 && <Comptability />}

        {/* <UserInfos /> */}
      </main>
    </div>
  )
}

export default AdminPage
