const HomeLessons = () => {
  return (
    <div className="container mx-auto bg-white dark:bg-gray-800 overflow-hidden relative lg:flex lg:items-center">
      <div className="w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
          <span className="block">Un programme fullstack</span>
        </h2>
        <p className="text-md mt-4 text-gray-600">
          Notre programme de formation en développement web et mobile vous donnera une compréhension
          approfondie des concepts techniques tels que les architectures <strong>front-end</strong>{" "}
          et <strong>back-end</strong>, les
          <strong>bases de données</strong>, la sécurité et les performances. Vous apprendrez
          également à travailler sur des projets réels en utilisant des technologies modernes et à
          résoudre des problèmes du monde réel. Avec une forte demande sur le marché pour les
          développeurs, nous vous préparons à une carrière réussie dans ce domaine en vous offrant
          des opportunités de placement professionnel et en vous donnant la confiance nécessaire
          pour relever les défis de développement les plus complexes.
        </p>
        <div className="lg:mt-0 lg:flex-shrink-0">
          <div className="mt-12 inline-flex rounded-md shadow">
            <button
              type="button"
              className="flex justify-center items-center bg-indigo-600 rounded-xl py-5 px-4 text-center text-white text-xl"
            >
              VOIR LE PROGRAMME
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-8 p-8 lg:p-24">
        <img
          src="https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          className="w-1/2 rounded-lg"
          alt="Tree"
        />
        <div>
          <img
            src="https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1189&q=80"
            className="mb-8 rounded-lg"
            alt="Tree"
          />
          <img
            src="https://images.unsplash.com/photo-1526925539332-aa3b66e35444?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80g"
            className="rounded-lg"
            alt="Tree"
          />
        </div>
      </div>
    </div>
  )
}

export default HomeLessons
