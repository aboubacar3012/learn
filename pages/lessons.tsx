import Head from "next/head"
import Layout from "../components/Layout"
import { fetchCourses } from "../lib/fetch-courses"
import { progressService } from "../machines/progressService"
import HomeCourses from "../components/Home/HomeCourses"
import CallToAction from "../components/call-to-action"
import HomeFeatures from "../components/Home/HomeFeatures"

export default function Lessons({ content, courses }) {
  return (
    <Layout content={content} courses={courses} progressService={progressService}>
      <Head>
        <title>Innotech Academy</title>
        <meta
          name="description"
          content="Apprenez à créer des applications web et mobiles de qualité professionnelle."
        />
      </Head>
      <section className="bg-gray-200 ">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-xl xl:max-w-xl lg:text-left">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl">PROGRAMME FULLSTACK</h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
            Notre programme de formation est conçu pour répondre aux exigences du marché actuel et aux demandes des entreprises en matière de compétences en développement web et mobile. Nous avons créé un programme complet et facile à apprendre qui vous permettra de vous adapter facilement à l'environnement de travail professionnel.
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src="https://mambaui.com/assets/svg/Business_SVG.svg"
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
        </div>
      </section>
      <HomeCourses courses={courses} content={content} progressService={progressService} />
      <CallToAction />
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const coursesJson = await fetchCourses()
  const courses = Object.keys(coursesJson)
  return {
    props: {
      content: coursesJson,
      courses,
    },
  }
}
