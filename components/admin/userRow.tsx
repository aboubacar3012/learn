import { useEffect, useState } from "react"
import ToggleStatus from "./toggleStatus"
import ToggleIsAlreadyCalled from "./toggleIsAlreadyCalled"

const UserRow = (props) => {
  const { user, index, setShowStudent, showStudent, setStudentToShow } = props
  const [isChecked, setIsChecked] = useState(user.isActive)

  const checkHandler = async () => {
    setIsChecked(!isChecked)

    const url = `${process.env.NEXT_PUBLIC_API_URL}/users/${user.id}`
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

  return (
    <tr
      tabIndex={0}
      className={`focus:outline-none h-16 border border-gray-100 rounded z-0${
        index % 2 === 0 ? "bg-gray-50" : ""
      }`}
    >
      <td>
        <p className="text-base text-center font-medium leading-none text-gray-700 mr-2">
          {index + 1}
        </p>
      </td>
      <td>
        <p className="text-base text-center font-medium leading-none text-gray-700 mr-2">
          {user.id}
        </p>
      </td>
      <td className="">
        <p className="text-base text-center font-medium leading-none text-gray-700 mr-2">
          {user.lastName}
        </p>
      </td>
      <td className="">
        <p className="text-base text-center font-medium leading-none text-gray-700 mr-2">
          {user.firstName}
        </p>
      </td>
      <td className="">
        <p className="text-base text-center font-medium leading-none text-gray-700 mr-2">
          {user.dateOfBirth}
        </p>
      </td>
      <td className="">
        <p className="text-base text-center font-medium leading-none text-gray-700 mr-2">
          {user.email}
        </p>
      </td>
      <td className="">
        <p className="text-base text-center font-medium leading-none text-gray-700 mr-2">
          {user.phone}
        </p>
      </td>
      <td className="text-center">
        {/* <div className="text-base text-center font-medium leading-none text-gray-700 mr-2">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              checked={isChecked}
              onChange={checkHandler}
              type="checkbox"
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div> */}
        <ToggleIsAlreadyCalled user={user} />
      </td>
      <td className="text-center">
        {/* <div className="text-base text-center font-medium leading-none text-gray-700 mr-2">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              checked={isChecked}
              onChange={checkHandler}
              type="checkbox"
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div> */}
        <ToggleStatus user={user} />
      </td>
      <td className="">
        <p
          onClick={() => {
            setShowStudent(true)
            setStudentToShow(user)
          }}
          className="cursor-pointer py-3 px-3 rounded-full bg-indigo-100 hover:bg-indigo-300 text-base text-center  font-medium leading-none text-gray-900 mr-2"
        >
          Afficher
        </p>
      </td>
    </tr>
  )
}

export default UserRow
