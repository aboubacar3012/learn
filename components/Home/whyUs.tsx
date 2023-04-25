const WhyUs = () => {
  return (
    <section className="bg-gray-200">
      <div className="container px-6 py-10 mx-auto ">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
            Pourquoi <span className="text-blue-400"> Innotech Academy</span> ?
          </h1>
          <h1>Un apprentissage personnalisé</h1>
          <div className="mt-2">
            <span className="inline-block w-40 h-1 bg-blue-500 rounded-full" />
            <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full" />
            <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full" />
          </div>
        </div>
        <div className="mt-8 xl:mt-12 lg:flex lg:items-center">
          <div className="hidden lg:flex lg:w-1/2 lg:justify-center">
            <img
              className="w-[28rem] h-[28rem] flex-shrink-0 object-cover xl:w-[34rem] xl:h-[34rem] rounded-full"
              src="https://images.unsplash.com/photo-1577375729152-4c8b5fcda381?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              alt=""
            />
          </div>
          <div className="grid w-full grid-cols-1 gap-8 lg:w-1/2 xl:gap-16 md:grid-cols-2">
            <div className="space-y-3">
              <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl dark:text-white dark:bg-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776"
                  />
                </svg>
              </span>
              <h1 className="text-xl font-semibold text-black capitalize ">Expérience pratique</h1>
              <p className="text-black">
                Nous offrons une expérience pratique grâce à des projets pratiques, des ateliers en
                direct, des exercices pratiques et des évaluations en temps réel pour vous préparer
                à une carrière dans le développement web et mobile.
              </p>
            </div>
            <div className="space-y-3">
              <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl dark:text-white dark:bg-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  />
                </svg>
              </span>
              <h1 className="text-xl font-semibold text-black capitalize dark:text-white">
                Formateurs expérimentés
              </h1>
              <p className="text-black">
                Nos formateurs expérimentés possèdent une expérience pratique dans l'industrie et
                sont passionnés par l'enseignement, ils fournissent un accompagnement personnalisé
                et des conseils pour vous aider à atteindre vos objectifs.
              </p>
            </div>
            <div className="space-y-3">
              <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl dark:text-white dark:bg-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                  />
                </svg>
              </span>
              <h1 className="text-xl font-semibold text-black capitalize dark:text-white">
                Formation complète
              </h1>
              <p className="text-black">
                Nous offrons une formation complète en développement web et mobile, couvrant toutes
                les technologies modernes, des fondamentaux aux concepts avancés, ainsi que des
                compétences en gestion de projet et en communication pour vous aider à réussir.
              </p>
            </div>
            <div className="space-y-3">
              <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl dark:text-white dark:bg-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                  />
                </svg>
              </span>
              <h1 className="text-xl font-semibold text-black capitalize dark:text-white">
                Placement professionnel
              </h1>
              <p className="text-black">
                Nous aidons nos étudiants à trouver des opportunités professionnelles à travers
                notre réseau de partenaires et en leur offrant un soutien pour la préparation aux
                entretiens, la création de CV et la négociation de salaire, pour les aider à lancer
                leur carrière dans le développement web et mobile.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUs
