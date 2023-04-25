export default function HomeApplyForm() {
  return (
    <section className="bg-gray-200">
      <div className="container px-6 py-12 mx-auto">
        <div>
          <h1 className="text-3xl md:text-5xl  text-center font-semibold text-gray-700 mb-10">
            Postuler ici gratuitement
          </h1>
        </div>
        <section className="max-w-4xl p-6 mx-auto bg-white  rounded-md shadow-md">
          <form>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label className="text-gray-700 dark:text-gray-200" htmlFor="firstName">
                  Prenom
                </label>
                <input
                  id="firstName"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label className="text-gray-700 dark:text-gray-200" htmlFor="lastName">
                  Nom
                </label>
                <input
                  id="lastName"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label className="text-gray-700 dark:text-gray-200" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label className="text-gray-700 dark:text-gray-200" htmlFor="phone">
                  Telephone
                </label>
                <input
                  id="phone"
                  type="number"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label className="text-gray-700 dark:text-gray-200" htmlFor="country">
                  Pays
                </label>
                <input
                  id="country"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label className="text-gray-700 dark:text-gray-200" htmlFor="dateOfBirth">
                  Date de naissance
                </label>
                <input
                  id="dateOfBirth"
                  type="date"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
            </div>
            <div className="mt-5">
              <label className="text-gray-700 dark:text-gray-200" htmlFor="message">
                Parlez nous de vous et de votre parcours
              </label>
              <textarea
                id="message"
                rows={5}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              ></textarea>
            </div>
            <div className="flex  justify-center mt-6">
              <button className="w-full px-8 py-5 leading-5 text-white transition-colors duration-300 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                Je postule
              </button>
            </div>
          </form>
        </section>
      </div>
    </section>
  )
}
