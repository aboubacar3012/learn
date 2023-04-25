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
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-lg xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl">PROGRAMME</h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              Dictum aliquam porta in condimentum ac integer
              <br className="hidden md:inline lg:hidden" />
              turpis pulvinar, est scelerisque ligula sem
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
              >
                Suspendisse
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100"
              >
                Malesuada
              </a>
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
