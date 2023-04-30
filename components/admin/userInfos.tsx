const UserInfos = () => {
  return (
    <div>
      <>
        {/* component */}

        <section className=" flex h-screen w-screen p-10 justify-center items-start">
          <button id="btn" className="py-3 px-10 bg-gray-800 text-white rounded text shadow-xl">
            Open
          </button>
        </section>
        <div id="myModal" className="h-auto w-11/12 md:w-1/2 p-5  bg-white rounded-md ">
          <div className="flex flex-col w-full h-auto ">
            {/* Header */}
            <div className="flex w-full h-auto justify-center items-center">
              <div className="flex w-10/12 h-auto py-3 justify-center items-center text-2xl font-bold">
                Modal Header
              </div>
              <div className="flex w-1/12 h-auto justify-center cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-x"
                >
                  <line x1={18} y1={6} x2={6} y2={18} />
                  <line x1={6} y1={6} x2={18} y2={18} />
                </svg>
              </div>
              {/*Header End*/}
            </div>
            {/* Modal Content*/}
            <div className="flex w-full h-auto py-10 px-2 justify-center items-center bg-gray-200 rounded text-center text-gray-500">
              This is a text inside the modal. You can add your content here.
            </div>
            {/* End of Modal Content*/}
          </div>
        </div>
      </>
    </div>
  )
}

export default UserInfos
