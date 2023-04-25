const Contact = () => {
  return (
    <>
      {/* component */}
      <div className="flex justify-center items-center  bg-white">
        {/* COMPONENT CODE */}
        <div className="container mx-auto my-4 px-4 lg:px-20">
          <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
            <div className="flex">
              <h1 className="font-bold uppercase text-5xl">
                Laissez nous un <br /> message
              </h1>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Votre prénom*"
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Votre nom*"
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Votre adresse email*"
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="Votre téléphone*"
              />
            </div>
            <div className="my-4">
              <textarea
                placeholder="Message*"
                className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                defaultValue={""}
              />
            </div>
            <div className="my-2 w-1/2 lg:w-1/4">
              <button
                className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline"
              >
                Envoyer le message
              </button>
            </div>
          </div>
          <div className="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-blue-800 rounded-2xl">
            <div className="flex flex-col text-white">
              <h1 className="font-bold uppercase text-4xl my-4">Innotech Academy</h1>
              <p className="text-gray-100">
              <strong>Innotech Academy</strong> est un centre de formation spécialisé dans les technologies de l'information. Nous proposons des formations de haute qualité pour les débutants et les professionnels, en mettant l'accent sur la pratique et l'apprentissage continu.
              </p>
              <div className="flex my-4 ">
                <div className="flex flex-col">
                  <i className="fas fa-map-marker-alt pt-2 pr-2"></i>
                </div>
                <i className="fas fa-map-marker-alt pt-2 pr-2">
                  <div className="flex flex-col">
                    <h2 className="text-2xl">Adresse</h2>
                    <p className="text-gray-400">Conakry/Guinee</p>
                  </div>
                </i>
              </div>
              <i className="fas fa-map-marker-alt pt-2 pr-2">
                <div className="flex my-4">
                  <div className="flex flex-col">
                    <i className="fas fa-phone-alt pt-2 pr-2"></i>
                  </div>
                  <i className="fas fa-phone-alt pt-2 pr-2">
                    <div className="flex flex-col">
                      <h2 className="text-2xl">Contacts</h2>
                      <p className="text-gray-100">Tel: +33 07 58 44 17 73</p>
                      <p className="text-gray-100">E-mail: contact@innotech-academy.com</p>
                    </div>
                  </i>
                </div>
              </i>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
