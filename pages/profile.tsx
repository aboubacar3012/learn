import type { RootState } from "../redux/store"
import { useSelector, useDispatch } from "react-redux"
import { useRouter } from "next/router"
import { useEffect } from "react"

const Profile = () => {
  const { user, isConnected } = useSelector((state: RootState) => state.auth)

  const dispatch = useDispatch()

  const router = useRouter()

  useEffect(() => {
    if (!isConnected) router.push("/")
  }, [isConnected])

  if(!user) return <></>
  
  return (
    <div className="container mx-auto my-5 p-5">
      <div className="md:flex justify-center  no-wrap md:-mx-2 ">
        {/* Left Side */}
        <div className="w-full md:w-3/12 md:mx-2">
          {/* Profile Card */}
          <div className="bg-white p-3 border-t-4 border-blue-400">
            <div className="hidden image overflow-hidden">
              <img
                className="h-auto w-2/4 mx-auto"
                src="https://sierraseguros.com/wp-content/uploads/2019/04/user-300x300.png"
                alt=""
              />
            </div>
            <h1 className="text-gray-900 font-bold text-xl leading-8 my-1 md:text-left text-center">
              {user.firstName} {user.lastName}
            </h1>
            <h3 className="text-gray-600 font-lg text-semibold leading-6 md:text-left text-center">
              Developpeur FullStack web & mobile
            </h3>

            <blockquote className="text-sm text-gray-500 hover:text-gray-600 leading-6 md:text-left text-center">
              La maîtrise du développement Fullstack est essentielle pour créer des projets Web de
              qualité en ayant une compréhension approfondie des technologies utilisées. Mon
              objectif est de travailler dans une entreprise de technologie ou de créer ma propre
              entreprise pour contribuer au développement de projets innovants.
            </blockquote>

            <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
              <li className="flex items-center py-3">
                <span>Status</span>
                <span className="ml-auto">
                  {user.isActive ? (
                    <span className="bg-green-500 py-1 px-2 rounded text-white text-sm">
                      Active
                    </span>
                  ) : (
                    <span className="bg-red-500 py-1 px-2 rounded text-white text-sm">
                      Inactive
                    </span>
                  )}
                </span>
              </li>
              <li className="flex items-center py-3">
                <span>Inscrit depuis</span>
                <span className="ml-auto">{new Date(user.createdAt).toLocaleDateString()}</span>
              </li>
            </ul>
          </div>
          {/* End of profile card */}
          <div className="my-4" />
        </div>
        {/* Right Side */}
        <div className="w-full md:w-6/12 mx-2 h-64">
          {/* Profile tab */}
          {/* About Section */}
          <div className="bg-white p-3 shadow-sm rounded-sm">
            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
              <span className="text-blue-500">
                <svg
                  className="h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </span>
              <span className="tracking-wide">Informations personnelles</span>
            </div>
            <div className="text-gray-700">
              <div className="grid md:grid-cols-2 text-sm">
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Prénom</div>
                  <div className="px-4 py-2">{user.firstName}</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Nom</div>
                  <div className="px-4 py-2">{user.lastName}</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Genre</div>
                  <div className="px-4 py-2">{user.gender}</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Télphone</div>
                  <div className="px-4 py-2">{user.phone}</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Adresse</div>
                  <div className="px-4 py-2">{user.address}</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Email</div>
                  <div className="px-4 py-2">
                    <p className="text-blue-800">{user.email}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Né(e) le</div>
                  <div className="px-4 py-2">{new Date(user.dateOfBirth).toLocaleDateString()}</div>
                </div>
              </div>
            </div>
            <button className="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">
              Mettre à jour mon profile
            </button>
          </div>
          {/* End of about section */}
          <div className="my-4" />
          {/* Experience and education */}
          
          {/* End of profile tab */}
        </div>
      </div>
    </div>
  )
}

export default Profile
