import React, { useState, useEffect } from "react"
import UserRow from "./userRow"
import TogglePaiementLevelOne from "./togglePaiementLevelOne"
import TogglePaiementLevelTwo from "./togglePaiementLevelTwo"
import TogglePaiementLevelThree from "./togglePaiementLevelThree"

const Dashboard = (props) => {
  const [users, setUsers] = useState(null)
  const [usersToShow, setUsersToShow] = useState(null)
  const [search, setSearch] = useState("")
  const [filterIndex, setFilterIndex] = useState(1) // 1: Tous, 2: Debutant, 3: Props, 4: Experts, 5: Actifs, 6: Inactifs
  const [showStudent, setShowStudent] = useState(false)
  const [studentToShow, setStudentToShow] = useState(null)

  const getAllUsers = async () => {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/users`
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
    })

    const data = await response.json()
    setUsers(data.users)
    setUsersToShow(data.users)
  }
  useEffect(() => {
    getAllUsers()
  }, [])

  const handleSubmitSearch = (event) => {
    event.preventDefault()
    const toShow = users.filter((user) =>
      search.length > 3
        ? user.id.includes(search) || user.email.includes(search) || user.phone.includes(search)
        : user
    )
    setUsersToShow(toShow)
  }

  useEffect(() => {
    if (users) {
      const toShow = users.filter((user) => {
        if (filterIndex === 1) return user
        if (filterIndex === 2) return user.level === 1
        if (filterIndex === 3) return user.level === 2
        if (filterIndex === 4) return user.level === 3
        if (filterIndex === 5) return user.isActive
        if (filterIndex === 6) return !user.isActive
      })
      setUsersToShow(toShow)
    }
  }, [filterIndex])

  if (!usersToShow) return <></>

  return (
    <div>
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
      <div className="md:flex">
        <div className={`px-2 ${showStudent ? "md:w-3/4" : "w-full"}`}>
          {/*- more free and premium Tailwind CSS components at https://tailwinduikit.com/ -*/}
          <div className="px-2 md:px-10 py-4 md:py-7">
            <div className="flex items-center justify-between">
              <p
                tabIndex={0}
                className="focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800"
              >
                Liste d'étudiants
              </p>
              <div className="py-3 px-2 flex items-center text-sm font-medium leading-none text-gray-600 bg-gray-200 hover:bg-gray-300 cursor-pointer rounded">
                {/* <p>Sort By:</p>
                <select
                  aria-label="select"
                  className="focus:text-indigo-600 focus:outline-none bg-transparent ml-1"
                >
                  <option className="text-sm text-indigo-800">Latest</option>
                  <option className="text-sm text-indigo-800">Oldest</option>
                  <option className="text-sm text-indigo-800">Latest</option>
                </select> */}
              </div>
            </div>
          </div>
          <div className="relative bg-white py-4 md:py-7 px-4 md:px-4 xl:px-5">
            <div className="sticky top-0 sm:flex items-center justify-between">
              <div className="flex items-center">
                <div
                  onClick={() => setFilterIndex(1)}
                  className="cursor-pointer rounded-full focus:outline-none focus:ring-2  focus:bg-indigo-50 focus:ring-indigo-800"
                >
                  <div
                    className={`py-2 px-5 ${
                      filterIndex === 1 && "bg-indigo-100"
                    } text-indigo-700 rounded-full`}
                  >
                    <p>Tous</p>
                  </div>
                </div>
                <div
                  onClick={() => setFilterIndex(2)}
                  className="cursor-pointer rounded-full focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800 ml-4 sm:ml-8"
                >
                  <div
                    className={`py-2 px-5 ${
                      filterIndex === 2 && "bg-indigo-100"
                    } text-indigo-700 rounded-full`}
                  >
                    <p>Débutants</p>
                  </div>
                </div>
                <div
                  onClick={() => setFilterIndex(3)}
                  className="cursor-pointer rounded-full focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800 ml-4 sm:ml-8"
                >
                  <div
                    className={`py-2 px-5 ${
                      filterIndex === 3 && "bg-indigo-100"
                    } text-indigo-700 rounded-full`}
                  >
                    <p>Pros</p>
                  </div>
                </div>
                <div
                  onClick={() => setFilterIndex(4)}
                  className="cursor-pointer rounded-full focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800 ml-4 sm:ml-8"
                >
                  <div
                    className={`py-2 px-5 ${
                      filterIndex === 4 && "bg-indigo-100"
                    } text-indigo-700 rounded-full`}
                  >
                    <p>Experts</p>
                  </div>
                </div>
                <div
                  onClick={() => setFilterIndex(5)}
                  className="cursor-pointer rounded-full focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800 ml-4 sm:ml-8"
                >
                  <div
                    className={`py-2 px-5 ${
                      filterIndex === 5 && "bg-indigo-100"
                    } text-indigo-700 rounded-full`}
                  >
                    <p>Actifs</p>
                  </div>
                </div>
                <div
                  onClick={() => setFilterIndex(6)}
                  className="cursor-pointer rounded-full focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800 ml-4 sm:ml-8"
                >
                  <div
                    className={`py-2 px-5 ${
                      filterIndex === 6 && "bg-indigo-100"
                    } text-indigo-700 rounded-full`}
                  >
                    <p>Inactifs</p>
                  </div>
                </div>
              </div>

              <form className="hidden md:block w-5/12" onSubmit={handleSubmitSearch}>
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only"
                >
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-500 "
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                  </div>
                  <input
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    type="search"
                    id="default-search"
                    className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                    placeholder="Rechercher par Matricule, Email ou Telephone"
                    required
                  />
                  <button
                    type="submit"
                    className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 "
                  >
                    Rechercher
                  </button>
                </div>
              </form>

              {/* <button
              // onclick="popuphandler(true)"
              className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded"
            >
              <p className="text-sm font-medium leading-none text-white">Ajouter un étudiants</p>
            </button> */}
            </div>
            <div className="mt-7 overflow-y-scroll  h-[38rem]">
              <table className="w-full whitespace-nowrap">
                <thead>
                  <tr>
                    <th className="sticky z-10 top-0 py-3 text-blue-900 bg-blue-300">N°</th>
                    <th className="sticky z-10 top-0 py-3 text-blue-900 bg-blue-300">Matricule</th>
                    <th className="sticky z-10 top-0 py-3 text-blue-900 bg-blue-300">Nom</th>
                    <th className="sticky z-10 top-0 py-3 text-blue-900 bg-blue-300">Prenom</th>
                    <th className="sticky z-10 top-0 py-3 text-blue-900 bg-blue-300">
                      Date de naissance
                    </th>
                    <th className="sticky z-10 top-0 py-3 text-blue-900 bg-blue-300">E-mail</th>
                    <th className="sticky z-10 top-0 py-3 text-blue-900 bg-blue-300">Telephone</th>
                    <th className="sticky z-10 top-0 py-3 text-blue-900 bg-blue-300 text-left ">
                      Dejà appelé
                    </th>
                    <th className="sticky z-10 top-0 py-3 text-blue-900 bg-blue-300 text-left ">
                      Status
                    </th>
                    <th className="sticky z-10 top-0 py-3 text-blue-900 bg-blue-300"></th>
                  </tr>
                </thead>
                <tbody>
                  {usersToShow.map((user, index) => (
                    <UserRow
                      user={user}
                      index={index}
                      key={user.id}
                      showStudent={showStudent}
                      setShowStudent={setShowStudent}
                      setStudentToShow={setStudentToShow}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {showStudent && studentToShow && (
          <div className="py-16 w-1/4 hidden md:block">
            <div className="overflow-y-scroll  h-[47rem] p-8 bg-white shadow mt-6">
              <button
                onClick={() => setShowStudent(false)}
                className="text-white py-1 px-2 uppercase rounded bg-red-400 hover:bg-red-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
              >
                Fermer
              </button>
              <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl  flex items-center justify-center text-indigo-500">
                <img
                  alt="..."
                  src="https://img.freepik.com/free-icon/user_318-159711.jpg"
                  className="shadow-xl rounded-full h-auto align-middle border-none -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                />
              </div>

              <div className=" border-b pb-12">
                <div className="space-x-10 py-2 flex justify-around">
                  <button className="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                    Modifier
                  </button>
                  <button className="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                    Message
                  </button>
                </div>
                <h1 className="text-4xl text-center font-medium text-gray-700 mt-5">
                  {studentToShow.firstName} {studentToShow.lastName}
                </h1>
                <h1 className="text-xl  font-medium text-gray-700 mt-5">Message de soumission:</h1>
                <p className="text-gray-600  py-3">{studentToShow.submitMessage || "unknown"}</p>
                <div className="flex py-1">
                  <div className="py-1 font-semibold">Metier:</div>
                  <div className="px-4 py-1">{studentToShow.job || "unknown"}</div>
                </div>
                <div className="flex py-1">
                  <div className="py-1 font-semibold">E-mail:</div>
                  <div className="px-4 py-1">{studentToShow.email || "unknown"}</div>
                </div>
                <div className="flex py-1">
                  <div className="py-1 font-semibold">Telephone:</div>
                  <div className="px-4 py-1">{studentToShow.phone || "unknown"}</div>
                </div>
                <div className="flex py-1">
                  <div className="py-1 font-semibold">Adresse:</div>
                  <div className="px-4 py-1">{studentToShow.address || "unknown"}</div>
                </div>
                <div className="flex py-1">
                  <div className="py-1 font-semibold">Genre:</div>
                  <div className="px-4 py-1">{studentToShow.gender || "unknown"}</div>
                </div>
                <div className="flex py-1">
                  <div className="py-1 font-semibold">Type:</div>
                  <div className="px-4 py-1">{studentToShow.role || "unknown"}</div>
                </div>
                <div className="flex py-1">
                  <div className="py-1 font-semibold">Pays:</div>
                  <div className="px-4 py-1">{studentToShow.country || "unknown"}</div>
                </div>
                <div className="flex py-1">
                  <div className="py-1 font-semibold">Ville:</div>
                  <div className="px-4 py-1">{studentToShow.city || "unknown"}</div>
                </div>

                {/* <div className="flex py-1">
                <div className="px-4 py-2 font-semibold">Paiement niveau 1</div>
                <div className="px-4 py-2">
                  <TogglePaiementLevelOne user={studentToShow} />
                </div>
              </div>
              <div className="flex py-1">
                <div className="px-4 py-2 font-semibold">Paiement niveau 2</div>
                <div className="px-4 py-2">
                  <TogglePaiementLevelTwo user={studentToShow} />
                </div>
              </div>
              <div className="flex py-1">
                <div className="px-4 py-2 font-semibold">Paiement niveau 3</div>
                <div className="px-4 py-2">
                  <TogglePaiementLevelThree user={studentToShow} />
                </div>
              </div> */}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Dashboard
