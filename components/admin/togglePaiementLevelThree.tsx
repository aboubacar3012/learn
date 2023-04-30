import { useState } from "react"

const TogglePaiementLevelThree = (props) => {
  const { user } = props
  const [isChecked, setIsChecked] = useState(user.isLevelThreePayed)

  const checkHandler = async () => {
    setIsChecked(!isChecked)

    const url = `${process.env.NEXT_PUBLIC_API_URL}/users/${user.id}`
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isLevelThreePayed: !isChecked }),
    })

    const data = await response.json()

    // afficher un toast
  }
  return (
    <div className="text-base text-left font-medium leading-none text-gray-700 mr-2">
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          checked={isChecked}
          onChange={checkHandler}
          type="checkbox"
          className="sr-only peer"
        />
                          <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-orange-300 dark:peer-focus:ring-orange-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-orange-500"></div>
      </label>
    </div>
  )
}

export default TogglePaiementLevelThree
