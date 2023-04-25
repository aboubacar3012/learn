const features = [
  {
    name: "HTML & CSS",
    icon: "https://www.pngkey.com/png/full/366-3669912_html-websites-can-never-go-out-of-fashion.png",
    description:
      "Avec HTML et CSS, vous apprendrez à créer et à personnaliser des pages Web selon vos préférences et vos besoins.",
  },
  {
    name: "JavaScript",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
    description:
      "JavaScript permet des fonctionnalités interactives sur les pages Web telles que des animations, des formulaires dynamiques et des effets visuels.",
  },
  {
    name: "React",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
    description:
      "React est une bibliothèque JavaScript populaire utilisée pour créer des interfaces utilisateur dynamiques et réactives pour le Web, en utilisant des composants modulaires et réutilisables.",
  },
  {
    name: "Nodejs",
    icon: "https://humancoders-formations.s3.amazonaws.com/uploads/course/logo/14/thumb_formation-node-js.png",
    description:
      "Node.js est un environnement d'exécution JavaScript côté serveur qui permet d'écrire des applications Web hautement évolutives, y compris des API REST.",
  },
  {
    name: "Git",
    icon: "https://humancoders-formations.s3.amazonaws.com/uploads/course/logo/10/formation-git.png",
    description:
      "Git est un système de contrôle de version qui facilite la collaboration entre les développeurs et assure l'intégrité des fichiers.",
  },
  {
    name: "TypeScript",
    icon: "https://w7.pngwing.com/pngs/915/519/png-transparent-typescript-hd-logo-thumbnail.png",
    description:
      "TypeScript est un langage open-source basé sur JavaScript avec vérification de types statiques et autres fonctionnalités pour améliorer la maintenance et la qualité du code.",
  },
  {
    name: "MongoDB",
    icon: "https://www.mongodb.com/community/forums/uploads/default/original/3X/0/1/01d4259c8928db8d3f2370429391688f8622654d.png",
    description:
      "MongoDB est une base de données NoSQL évolutif, flexible et haute disponibilité, idéale pour stocker et gérer des données semi-structurées et non structurées.",
  },
  {
    name: "Jest",
    icon: "https://viget.imgix.net/jest.png?auto=format%2Ccompress&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&h=1280&ixlib=php-2.1.1&q=90&w=1280&s=c9052631a6c3117379c82ea853eca050",
    description:
      "Jest est un framework de test de JavaScript avec syntaxe facile, rapide et complète, pour les tests unitaires et d'intégration.",
  },
  {
    name: "GraphQL",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/800px-GraphQL_Logo.svg.png",
    description:
      "GraphQL est un langage de requête pour les API qui permet aux clients de demander des données spécifiques et d'éviter les surcharges de réseaux.",
  },
]

export default function HomeFeatures() {
  return (
    <div className="features relative bg-white py-16 sm:py-24 lg:py-16">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <h2 className="m-2 text-4xl font-extrabold text-gray-900 tracking-tight ">
          Devenez un expert sur les technologies qui comptent
        </h2>
        <p className="mx-auto px-5">
          Apprenez les langages, les frameworks et les concepts les plus avancés pour construire un
          profil attractif sur le marché de la tech.
        </p>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6 cursor-pointer hover:text-white">
                <div className="flow-root bg-gray-50 hover:bg-blue-500 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-5 bg-gray-800 rounded-md shadow-lg">
                        <img
                          className="h-20 w-20 text-white"
                          aria-hidden="true"
                          alt={feature.name}
                          src={feature.icon}
                        />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium  tracking-tight">{feature.name}</h3>
                    <p className="mt-5 text-base ">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    // <section className="bg-white dark:bg-gray-900">
    //   <div className="container px-6 py-10 mx-auto">
    //     <h1 className="text-2xl font-semibold text-center text-gray-800  lg:text-5xl dark:text-white">
    //       Devenez un expert sur les technologies qui comptent
    //     </h1>
    //     <p>
    //       Restez à jour sur vos compétences. Apprenez les langages, les frameworks et les concepts les plus avancés pour construire un profil attractif sur le marché de la tech.
    //     </p>
    //     <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
    //       <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
    //         <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="w-6 h-6"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke="currentColor"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               strokeWidth={2}
    //               d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
    //             />
    //           </svg>
    //         </span>
    //         <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
    //           Copy &amp; paste components
    //         </h1>
    //         <p className="text-gray-500 dark:text-gray-300">
    //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab
    //           nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
    //         </p>
    //         <a
    //           href="#"
    //           className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500"
    //         >
    //           <span className="mx-1">read more</span>
    //           <svg
    //             className="w-4 h-4 mx-1 rtl:-scale-x-100"
    //             fill="currentColor"
    //             viewBox="0 0 20 20"
    //             xmlns="http://www.w3.org/2000/svg"
    //           >
    //             <path
    //               fillRule="evenodd"
    //               d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
    //               clipRule="evenodd"
    //             />
    //           </svg>
    //         </a>
    //       </div>
    //       <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
    //         <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="w-6 h-6"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke="currentColor"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               strokeWidth={2}
    //               d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
    //             />
    //           </svg>
    //         </span>
    //         <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
    //           Zero Configuration
    //         </h1>
    //         <p className="text-gray-500 dark:text-gray-300">
    //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab
    //           nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
    //         </p>
    //         <a
    //           href="#"
    //           className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500"
    //         >
    //           <span className="mx-1">read more</span>
    //           <svg
    //             className="w-4 h-4 mx-1 rtl:-scale-x-100"
    //             fill="currentColor"
    //             viewBox="0 0 20 20"
    //             xmlns="http://www.w3.org/2000/svg"
    //           >
    //             <path
    //               fillRule="evenodd"
    //               d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
    //               clipRule="evenodd"
    //             />
    //           </svg>
    //         </a>
    //       </div>
    //       <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
    //         <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="w-6 h-6"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke="currentColor"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               strokeWidth={2}
    //               d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
    //             />
    //           </svg>
    //         </span>
    //         <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
    //           Simple &amp; clean designs
    //         </h1>
    //         <p className="text-gray-500 dark:text-gray-300">
    //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab
    //           nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
    //         </p>
    //         <a
    //           href="#"
    //           className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500"
    //         >
    //           <span className="mx-1">read more</span>
    //           <svg
    //             className="w-4 h-4 mx-1 rtl:-scale-x-100"
    //             fill="currentColor"
    //             viewBox="0 0 20 20"
    //             xmlns="http://www.w3.org/2000/svg"
    //           >
    //             <path
    //               fillRule="evenodd"
    //               d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
    //               clipRule="evenodd"
    //             />
    //           </svg>
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  )
}
