import Head from "next/head"
import Layout from "../components/Layout"
import HomeHero from "../components/Home/HomeHero"
import HomeFeatures from "../components/Home/HomeFeatures"
import HomeCourses from "../components/Home/HomeCourses"
import { progressService } from "../machines/progressService"
import { fetchCourses } from "../lib/fetch-courses"
import { useEffect, useState } from "react"
import CallToAction from "../components/call-to-action"
import Footer from "../components/Footer"
import type { RootState } from "../redux/store"
import { useSelector, useDispatch } from "react-redux"
import Link from "next/link"
import HomePlans from "../components/Home/HomePlans"
import WhyUs from "../components/Home/whyUs"
import HomeApplyForm from "../components/Home/HomeApplyForm"
import HomeStatistics from "../components/Home/HomeStatistics"
import HomeLessons from "../components/Home/HomeLessons"

export default function Home({ content, courses }) {
  const [courseSlugToShow, setCourseSlugToShow] = useState(courses[0])
  const courseDetailToShow = content[courseSlugToShow]
  const [level, setLevel] = useState(1);
  // console.log(courses);
  // console.log(content)

  const courseToShow = courses.filter(course => content[course].level === level);
  console.log(courseToShow)

  const auth = useSelector((state: RootState) => state.auth)
  const dispatch = useDispatch()

  return (
    <Layout content={content} courses={courses} progressService={progressService}>
      <Head>
        <title>Innotech Academy</title>
        <meta
          name="description"
          content="Apprenez à créer des applications web et mobiles de qualité professionnelle."
        />
      </Head>
      {!auth.isConnected ? (
        <>
          <HomeHero />
          <HomeStatistics />
          {/* <HomeApplyForm /> */}
          <HomeFeatures />
          <WhyUs />
          <HomeLessons />
          <HomePlans />
          {/* <HomeCourses courses={courses} content={content} progressService={progressService} /> */}
          <CallToAction />
          {/* <Footer /> */}
        </>
      ) : (
        <>
        <section className="bg-white dark:bg-gray-900">
  <div className="container px-6 py-10 mx-auto">
    <h1 className="text-2xl py-5 font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
    Développeur full stack web & mobile
    </h1>
  
    <div className="flex items-center justify-center  py-5">
      <div className="flex items-center p-1 border border-blue-600 dark:border-blue-400 rounded-xl">
        <button onClick={() => setLevel(1)} className={`px-4 py-2 text-sm font-medium capitalize ${level === 1 ? 'bg-blue-600 text-white' : 'transition-colors duration-300 text-blue-600 focus:outline-none hover:bg-blue-600 hover:text-white'} md:py-3 rounded-xl md:px-12`}>
          DEBUTANT
        </button>
        <button onClick={() => setLevel(2)} className={`px-4 py-2 text-sm font-medium capitalize  md:py-3 rounded-xl mx-4 md:mx-8 md:px-12  ${level === 2 ? 'bg-blue-600 text-white' : 'transition-colors duration-300 text-blue-600 focus:outline-none hover:bg-blue-600 hover:text-white'}`}>
          PRO
        </button>
        <button onClick={() => setLevel(3)} className={`px-4 py-2 text-sm font-medium text-blue-600 capitalize md:py-3  rounded-xl md:px-12 ${level === 3 ? 'bg-blue-600 text-white' : 'transition-colors duration-300 text-blue-600 focus:outline-none hover:bg-blue-600 hover:text-white'}`}>
          EXPERT
        </button>
      </div>
    </div>
    <hr/>
    <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
    {courseToShow.map((course, index) => (
    <Link key={index} href={`/${course}`}>
      <div className="flex flex-col items-center hover:bg-blue-100 p-5">
        <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full  rounded-lg shadow-lg lg:max-w-md p-10">
            <img
              className="object-cover w-full h-44 rounded-xl aspect-square"
              src={content[course].image}
              alt=""
            />
            </div>
        </div>
        <h1 className="mt-4 text-2xl font-semibold text-gray-700 dark:text-white text-center">
          {content[course].title}
        </h1>
      </div>
    </Link>
    ))}
    </div>
  </div>
</section>
        </>
      )}

      {/* <Footer /> */}
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
