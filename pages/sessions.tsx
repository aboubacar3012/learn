import { useEffect, useState } from "react"
import type { RootState } from "../redux/store"
import { useSelector, useDispatch } from "react-redux"

const SessionsPage = () => {
  const [level, setLevel] = useState(1)

  const auth = useSelector((state: RootState) => state.auth)
  const dispatch = useDispatch()
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl py-5 font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
          NOS SESSIONS DE FORMATION 2023
        </h1>

        <div className="flex items-center justify-center  py-5">
          <div className="flex items-center p-1 border border-blue-600 dark:border-blue-400 rounded-xl">
            <button
              onClick={() => setLevel(1)}
              className={`px-4 py-2 text-sm font-medium capitalize ${
                level === 1
                  ? "bg-blue-600 text-white"
                  : "transition-colors duration-300 text-blue-600 focus:outline-none hover:bg-blue-600 hover:text-white"
              } md:py-3 rounded-xl md:px-12`}
            >
              DEBUTANT
            </button>
            <button
              onClick={() => setLevel(2)}
              className={`px-4 py-2 text-sm font-medium capitalize  md:py-3 rounded-xl mx-4 md:mx-8 md:px-12  ${
                level === 2
                  ? "bg-blue-600 text-white"
                  : "transition-colors duration-300 text-blue-600 focus:outline-none hover:bg-blue-600 hover:text-white"
              }`}
            >
              PRO
            </button>
            <button
              onClick={() => setLevel(3)}
              className={`px-4 py-2 text-sm font-medium text-blue-600 capitalize md:py-3  rounded-xl md:px-12 ${
                level === 3
                  ? "bg-blue-600 text-white"
                  : "transition-colors duration-300 text-blue-600 focus:outline-none hover:bg-blue-600 hover:text-white"
              }`}
            >
              EXPERT
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
        <div className="flex flex-col items-center p-5">
          <a
            className=" relative flex items-start justify-between rounded-xl border border-gray-100 p-4 shadow-xl sm:p-6 lg:p-8"
            href="#"
          >
            <div className="pt-4 text-gray-500">
              <h3 className="mt-4 text-center py-2 text-lg font-bold text-gray-900 sm:text-xl">
                13 Mai - 11 Juin 2023
              </h3>
              <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
                <li className="flex items-center py-1">
                  <svg
                    className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  4 semaines de formation - 180h
                </li>
                <li className="flex items-center py-1">
                  <svg
                    className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Du lundi au vendredi, de 9h à 18h
                </li>
                <li className="flex items-center py-1">
                  <svg
                    className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  En présentiel ou distanciel
                </li>
              </ul>

              <h3 className="mt-4 text-center text-xl font-bold text-gray-900 sm:text-xl">
                Prix : 500 000 GNF{" "}
              </h3>
            </div>
            <span className="rounded-full bg-blue-100 px-3 py-1.5 text-xs font-medium text-blue-600">
              Niveau 1
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default SessionsPage
