const HomePlans = () => {
  return (
    <section className="bg-gray-200 py-10 mx-auto">
      <div className="container px-6 py-10 mx-auto">
        <div className="mx-auto mb-14 text-center">
          <h1 className="text-4xl font-semibold mb-6 lg:text-5xl">
            <span className="text-indigo-600">NOS</span> TARIFS
          </h1>
          <p className="text-xl text-gray-500 font-medium">
            Nous offrons une formation intensive et complète avec une expérience pratique et des
            formateurs expérimentés pour vous préparer à une carrière réussie dans le développement
            web et mobile, répondant aux besoins actuels du marché.
          </p>
        </div>
        <div className="flex flex-col justify-between items-center lg:flex-row lg:items-start">
          <div className="w-full flex-1 mt-8 p-8 order-2 bg-white shadow-xl rounded-3xl sm:w-96 lg:w-full lg:order-1 lg:rounded-r-none">
            <div className="mb-7 pb-7 flex items-center border-b border-gray-300">
              <img
                src="https://res.cloudinary.com/williamsondesign/abstract-1.jpg"
                alt=""
                className="rounded-3xl w-20 h-20"
              />
              <div className="ml-5">
                <span className="block text-2xl font-semibold">DEBUTANT</span>
                <span>
                  <span className="text-3xl font-bold">Gratuit</span>
                </span>
                <span className="text-gray-500 font-medium">/ 4 semaines</span>
              </div>
            </div>
            <ul className="mb-7 font-medium text-gray-500">
              <li className="flex text-lg mb-2">
                <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                <span className="ml-3">
                  Introduction au <span className="text-black">terminal bash</span>{" "}
                </span>
              </li>
              <li className="flex text-lg mb-2">
                <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                <span className="ml-3">
                  Structure de base d'une page web en <span className="text-black">HTML</span>
                </span>
              </li>
              <li className="flex text-lg">
                <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                <span className="ml-3">
                  Utilisation de <span className="text-black">balises et d'attributs HTML</span>
                </span>
              </li>
              <li className="flex text-lg">
                <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                <span className="ml-3">
                  Création de mises en page en <span className="text-black">CSS</span>
                </span>
              </li>
              <li className="flex text-lg">
                <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                <span className="ml-3">
                  Apprendre a manipuler <span className="text-black">les Evenements</span>
                </span>
              </li>
              <li className="flex text-lg">
                <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                <span className="ml-3">
                  <span className="text-black">Sélecteurs CSS</span> pour cibler des éléments
                  spécifiques
                </span>
              </li>
              <li className="flex text-lg">
                <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                <span className="ml-3">
                  Utilisation de <span className="text-black">JavaScript</span> pour interagir avec
                  une page web
                </span>
              </li>
              <li className="flex text-lg">
                <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                <span className="ml-3">
                  <span className="text-black">Événements</span> en JavaScript pour déclencher des
                  actions
                </span>
              </li>
              <li className="flex text-lg">
                <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                <span className="ml-3">
                  <span className="text-black">Manipulation du DOM</span> en JavaScript pour
                  modifier la structure de la page
                </span>
              </li>
              <li className="flex text-lg">
                <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                <span className="ml-3">
                  <span className="text-black">Responsive design</span> pour adapter une page web à
                  différents appareils.
                </span>
              </li>
              <li className="flex text-lg">
                <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                <span className="ml-3">
                  Contrôle de version avec <span className="text-black">Git & Github</span>
                </span>
              </li>
            </ul>
            <a
              href="#/"
              className="flex justify-center items-center bg-indigo-600 rounded-xl py-5 px-4 text-center text-white text-xl"
            >
              Je postule
              <img
                src="https://res.cloudinary.com/williamsondesign/arrow-right.svg"
                className="ml-2"
              />
            </a>
          </div>
          <div className="w-full flex-1 p-8 order-1 shadow-xl rounded-3xl bg-gray-900 text-gray-400 sm:w-96 lg:w-full lg:order-2 lg:mt-0">
            <div className="mb-8 pb-8 flex items-center border-b border-gray-600">
              <img
                src="https://res.cloudinary.com/williamsondesign/abstract-2.jpg"
                alt=""
                className="rounded-3xl w-20 h-20"
              />
              <div className="ml-5">
                <span className="block text-3xl font-semibold text-white">PRO</span>
                <span>
                  <span className="text-3xl font-bold text-white">500 000 GNF</span>
                </span>
                <span className="font-medium">/ 4 semaines</span>
              </div>
            </div>
            <ul className="mb-10 font-medium text-xl">
              <li className="flex mb-4">
                <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" />
                <span className="ml-3">
                  <span className="text-white">React:</span> bibliothèque JavaScript populaire pour
                  créer des interfaces utilisateur interactives
                </span>
              </li>
              <li className="flex mb-4">
                <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" />
                <span className="ml-3">
                  <span className="text-white">Jest:</span> un framework de test pour les
                  applications JavaScript
                </span>
              </li>
              <li className="flex mb-4">
                <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" />
                <span className="ml-3">
                  <span className="text-white">Node.js: </span>environnement d'exécution JavaScript
                  côté serveur
                </span>
              </li>
              <li className="flex mb-4">
                <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" />
                <span className="ml-3">
                  <span className="text-white">Express: </span> Pour construire des API RESTful
                </span>
              </li>
              <li className="flex mb-4">
                <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" />
                <span className="ml-3">
                  <span className="text-white">React Native: </span> bibliothèque pour développer
                  des applications mobiles multiplateformes avec React
                </span>
              </li>
              <li className="flex mb-4">
                <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" />
                <span className="ml-3">
                  <span className="text-white">15 TB</span> cloud storage
                </span>
              </li>
              <li className="flex mb-4">
                <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" />
                <span className="ml-3">
                  <span className="text-white">Redux: </span> bibliothèque pour gérer l'état d'une
                  application JavaScript
                </span>
              </li>
              <li className="flex mb-4">
                <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" />
                <span className="ml-3">
                  <span className="text-white">MongoDB: </span> est une base de données NoSQL
                  orientée documents qui permet de stocker, de gérer et de rechercher efficacement
                  des données structurées et semi-structurées.
                </span>
              </li>
              <li className="flex mb-4">
                <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" />
                <span className="ml-3">
                  Déploiement d'applications web et mobiles sur des plateformes cloud :{" "}
                  <span className="text-white">Heroku & Vercel</span>
                </span>
              </li>
            </ul>
            <a
              href="#/"
              className="flex justify-center items-center bg-indigo-600 rounded-xl py-6 px-4 text-center text-white text-2xl"
            >
              Je postule
              <img
                src="https://res.cloudinary.com/williamsondesign/arrow-right.svg"
                className="ml-2"
              />
            </a>
          </div>
          <div className="w-full flex-1 mt-8 p-8 order-3 bg-white shadow-xl rounded-3xl sm:w-96 lg:w-full lg:order-3 lg:rounded-l-none">
            <div className="mb-7 pb-7 flex items-center border-b border-gray-300">
              <img
                src="https://res.cloudinary.com/williamsondesign/abstract-3.jpg"
                alt=""
                className="rounded-3xl w-20 h-20"
              />
              <div className="ml-5">
                <span className="block text-2xl font-semibold">EXPERT</span>
                <span>
                  <span className="text-3xl font-bold">Pas encore disponible </span>
                </span>
                <span className="text-gray-500 font-medium">/ 24 semaines</span>
              </div>
            </div>
            <ul className="mb-7 font-medium text-gray-500">
              <li className="flex text-lg mb-2">
                <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                <span className="ml-3">Gestion de projet avancée</span>
              </li>
              <li className="flex text-lg mb-2">
                <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                <span className="ml-3">Modélisation de bases de données complexes</span>
              </li>
              <li className="flex text-lg mb-2">
                <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                <span className="ml-3">Gestion de la sécurité des données et des accès.</span>
              </li>
              <li className="flex text-lg mb-2">
                <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                <span className="ml-3">Travail sur un projet personnel et/ou en équipe</span>
              </li>
              <li className="flex text-lg">
                <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                <span className="ml-3">
                  Utilisation de Figma pour la conception d'interfaces utilisateur.
                </span>
              </li>
              <li className="flex text-lg">
                <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                <span className="ml-3">Développement en environnement professionnel</span>
              </li>

              <li className="flex text-lg">
                <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                <span className="ml-3">Utilisation d'outils de gestion de versions (Git)</span>
              </li>

              <li className="flex text-lg">
                <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                <span className="ml-3">
                  Conception et développement d'une application de grande envergure
                </span>
              </li>
              <li className="flex text-lg">
                <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                <span className="ml-3">Déploiement continu et intégration continue (CI/CD)</span>
              </li>
            </ul>
            <a
              href="#/"
              className="flex justify-center items-center bg-indigo-600 rounded-xl py-5 px-4 text-center text-white text-xl"
            >
              Je postule
              <img
                src="https://res.cloudinary.com/williamsondesign/arrow-right.svg"
                className="ml-2"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomePlans
