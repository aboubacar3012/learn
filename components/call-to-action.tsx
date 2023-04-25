import Link from "next/link"

const CallToAction = () => {
  return (
    <div className="relative z-20 flex items-center overflow-hidden bg-white dark:bg-gray-800">
      <div className="container relative flex px-6 py-16 mx-auto">
        <div className="relative z-20 flex flex-col sm:w-2/3 lg:w-2/5">
          <span className="w-20 h-2 mb-12 bg-gray-800 dark:bg-white"></span>
          <h1 className="flex flex-col text-3xl md:text-4xl font-black leading-none text-gray-800 uppercase font-bebas-neue  dark:text-white">
            Commencez à apprendre dès
            <span className="text-4xl md:text-5xl mt-1">aujourd'hui !</span>
          </h1>
          <p className="text-sm text-gray-700 sm:text-base dark:text-white">
            Rejoignez notre communauté dynamique et commencez à construire votre carrière de
            développeur aujourd'hui !.
          </p>
          <div className="flex mt-8">
            <Link
              href="/"
              className="px-4 py-2 mr-4 text-white uppercase bg-blue-500 border-2 border-transparent rounded-lg text-md hover:bg-blue-400"
            >
              Commencer
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2 text-blue-500 uppercase bg-transparent border-2 border-blue-500 rounded-lg dark:text-white hover:bg-blue-500 hover:text-white text-md"
            >
              Nous contactez
            </Link>
          </div>
        </div>
        <div className="relative hidden sm:block sm:w-1/3 lg:w-3/5">
          <img
            src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            className="m-auto max-w-2xl rounded-md"
          />
        </div>
      </div>
    </div>
  )
}

export default CallToAction
