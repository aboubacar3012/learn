import React from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { CheckIcon } from "@heroicons/react/outline"
import Subscribe from "../Subscribe"

const features = [
  {
    name: "12 Modules",
    description: "",
  },
  {
    name: "+25 Chapitres",
    description: "",
  },
  {
    name: "+80 Heures de formation",
    description: "",
  },
  {
    name: "+1000 Utilisateurs deja inscrit",
    description: "",
  },
  {
    name: "Accessible 24/24",
    description: "",
  },
  // {
  //   name: "Seulement 10€ (100.000 GNF) par mois",
  //   description: "",
  // },
  {
    name: "100% Gratuit", // ceci est temporaire jusqu'a la finalisation de la premiere partie du projet
    description: "",
  },
  // {
  //   name: "Diplôme reconnue par l'État",
  //   description: "",
  // },
]

type Inputs = {
  email: string
}

export default function HomeHero() {
  const {
    register,
    handleSubmit,
    formState,
    formState: { errors },
  } = useForm<Inputs>()

  const [isSubmitted, setIsSubmitted] = React.useState("")

  const onSubmit: SubmitHandler<Inputs> = async (data, event) => {
    event.target.reset()

    const subscribe = await fetch("/api/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    const response = await subscribe.json()

    setIsSubmitted(response.message)
  }

  return (
    // <div className="relative overflow-hidden">
    //   <main>
    //     <div className=" bg-white lg:pb-14 lg:overflow-hidden">
    //       <div className="mx-auto max-w-8xl lg:px-8">
    //         <div className="lg:grid lg:grid-cols-2 lg:gap-8">
    //           <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
    //             <div className="lg:py-24">
    // <h1
    //   data-test="hero-heading"
    //   className="mt-4 text-3xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl text-center md:text-left"
    // >
    //   <span className="block text-gray-900">
    //     Devenez un développeur fullstack web & mobile
    //   </span>
    // </h1>
    // <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl text-center md:text-left">
    //   Apprenez à créer des applications web et mobiles de qualité professionnelle
    // </p>

    //               {/* Features */}
    //               <div className="mt-12">
    //                 <dl className="">
    //                   {features.map((feature) => (
    //                     <div key={feature.name} className="relative mb-6">
    //                       <dt>
    //                         <CheckIcon
    //                           className="absolute h-6 w-6 text-blue-500"
    //                           aria-hidden="true"
    //                         />
    //                         <p className="ml-9 text-lg leading-6 font-medium text-gray-500">
    //                           {feature.name}
    //                         </p>
    //                       </dt>
    //                       <dd className="mt-2 ml-9 text-base text-gray-500">
    //                         {feature.description}
    //                       </dd>
    //                     </div>
    //                   ))}
    //                 </dl>
    //               </div>

    //               {/* <div className="mt-10 sm:mt-12">
    //                 <Subscribe />
    //               </div> */}
    //             </div>
    //           </div>
    //           <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
    //             <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
    //               <img
    //                 className="w-full rounded lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
    //                 src="/images/home-hero.jpg"
    //               />
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </main>
    // </div>
    <div className="lg:flex">
      <div className="flex items-center justify-center w-full px-6 py-8 lg:h-[38rem] lg:w-1/2">
        <div className="max-w-xl">
          <h1
            data-test="hero-heading"
            className="mt-4 text-3xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-5xl text-center md:text-left"
          >
            <span className="block text-gray-900 ">
              Devenez un développeur fullstack web & mobile
            </span>
          </h1>
          <p className="mt-3 text-base text-gray-900  font-semibold sm:mt-5 sm:text-xl lg:text-lg xl:text-xl text-center md:text-left">
            Apprenez à créer des applications web et mobiles de qualité professionnelle
          </p>
          <p className="mt-4 text-sm text-gray-800 dark:text-gray-400 lg:text-base">
            Notre programme de formation vous permet de devenir un développeur fullstack web et
            mobile compétent. Vous apprendrez à concevoir et développer des applications de qualité
            professionnelle en utilisant les dernières technologies et méthodes de développement.
            <br />
            Grâce à notre programme, vous serez prêt à répondre aux besoins du marché et à réussir
            dans votre carrière.
          </p>
          <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
            <a
              href="/inscription"
              className="block l px-12 py-4 text-md font-medium tracking-wider text-center text-white transition-colors duration-300 transform bg-blue-900 rounded-md hover:bg-blue-700"
            >
              POSTULER GRATUITEMENT
            </a>
          </div>
        </div>
      </div>
      <div className="w-full h-64 lg:w-1/2 lg:h-auto">
        <div
          className="w-full h-full bg-cover"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80)",
          }}
        >
          <div className="w-full h-full bg-black opacity-25" />
        </div>
      </div>
    </div>
  )
}
