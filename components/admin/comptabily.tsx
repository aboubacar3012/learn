import React, { useState, useEffect } from "react"
import ToggleStatus from "./toggleStatus"
import TogglePaiementLevelOne from "./togglePaiementLevelOne"
import TogglePaiementLevelTwo from "./togglePaiementLevelTwo"
import TogglePaiementLevelThree from "./togglePaiementLevelThree"

const Comptability = (props) => {
  const [users, setUsers] = useState(null)
  const [usersToShow, setUsersToShow] = useState(null)
  const [search, setSearch] = useState("")
  const [filterIndex, setFilterIndex] = useState(1) // 1: Tous, 2: Debutant, 3: Props, 4: Experts, 5: Actifs, 6: Inactifs

  const [isChecked, setIsChecked] = useState(null)

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

  const checkHandlerLevelStatus = async (userId: number) => {
    setIsChecked(!isChecked)

    const url = `${process.env.NEXT_PUBLIC_API_URL}/users/${userId}`
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isActive: !isChecked }),
    })

    const data = await response.json()

    // afficher un toast
  }

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
      {/* Table */}
      <div className="sm:px-6 w-full">
        {/*- more free and premium Tailwind CSS components at https://tailwinduikit.com/ -*/}
        <div className="px-4 md:px-10 py-4 md:py-7">
          <div className="flex items-center justify-between">
            <p
              tabIndex={0}
              className="focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800"
            >
              Comptabilité
            </p>
          </div>
        </div>
        <div className="relative bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10">
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
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
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
                    className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Rechercher par Matricule, Email ou Telephone"
                    required
                  />
                  <button
                    type="submit"
                    className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
          <div className="mt-7 overflow-y-scroll  h-[48rem]">
            <table className="w-full whitespace-nowrap">
              <thead>
                <tr className="">
                  <th className="sticky z-10 top-0 py-3 text-orange-900 bg-orange-300">N°</th>
                  <th className="sticky z-10 top-0 text-left py-3 text-orange-900 bg-orange-300">
                    Matricule
                  </th>
                  <th className="sticky z-10 top-0 text-left py-3 text-orange-900 bg-orange-300">
                    Nom & Prenom
                  </th>
                  <th className="sticky z-10 top-0 text-left py-3 text-orange-900 bg-orange-300">
                    Paiement niveau 1
                  </th>
                  <th className="sticky z-10 top-0 text-left py-3 text-orange-900 bg-orange-300">
                    Paiement niveau 2
                  </th>
                  <th className="sticky z-10 top-0 text-left py-3 text-orange-900 bg-orange-300">
                    Paiement niveau 3
                  </th>
                  <th className="sticky z-10 top-0 text-left py-3 text-orange-900 bg-orange-300">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {usersToShow.map((user, index) => (
                  <tr
                    key={user.id}
                    tabIndex={0}
                    className={`focus:outline-none h-16 border border-gray-100 rounded z-0 ${
                      index % 2 === 0 ? "bg-gray-50" : ""
                    }`}
                  >
                    <td>
                      <p className="text-base text-center font-medium leading-none text-gray-700 mr-2">
                        {index + 1}
                      </p>
                    </td>
                    <td>
                      <p className="text-base text-left font-medium leading-none text-gray-700 mr-2">
                        {user.id}
                      </p>
                    </td>
                    <td className="">
                      <p className="text-base text-left font-medium leading-none text-gray-700 mr-2">
                        {user.lastName} {user.firstName}
                      </p>
                    </td>

                    <td className="">
                      {/* <div className="text-base text-left font-medium leading-none text-gray-700 mr-2">
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            // checked={isChecked}
                            // onChange={checkHandler}
                            type="checkbox"
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                        </label>
                      </div> */}
                      <TogglePaiementLevelOne user={user} />
                    </td>
                    <td className="">
                      <TogglePaiementLevelTwo user={user} />
                    </td>
                    <td className="">
                      <TogglePaiementLevelThree user={user} />
                    </td>
                    <td className="">
                      <ToggleStatus user={user} />
                    </td>
                    
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Comptability
