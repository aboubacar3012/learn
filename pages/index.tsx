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

export default function Home({ content, courses }) {
  const [courseSlugToShow, setCourseSlugToShow] = useState(courses[0])
  const courseDetailToShow = content[courseSlugToShow]
  // console.log(courses);
  // console.log(content)

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
          <HomeFeatures />
          <HomeCourses courses={courses} content={content} progressService={progressService} />
          <CallToAction />
        </>
      ) : (
        <div id="courses" className="features mx-auto w-full px-3 lg:block xl:py-15 xl:px-44">
          <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-full lg:px-8 lg:py-12 xl:mb-10">
            <h3 className="mt-2 py-8 text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl  ">
              Développeur full stack web & movile
            </h3>
            <p className="text-center my-2">
              ⚠ Ce cours est en cours d'éléboration, il ya une mise à jour tout les lundi
            </p>
            <hr />
          </div>
          <div className="mx-auto max-w-3xl sm:px-6 lg:grid lg:max-w-full lg:grid-cols-12 lg:gap-8 lg:px-8 lg:mb-10">
            <div className="course-selector lg:col-span-6 lg:block">
              <div className="sticky top-2">
                <div id="headlessui-radiogroup-25" role="radiogroup">
                  <div className="space-y-4" role="none">
                    {courses.map(
                      (course, index) =>
                        index <= 1 && (
                          <div
                            key={index}
                            className="border-2 border-gray-200 hover:border-blue-500  bg-white opacity-50 flex cursor-pointer items-center justify-between rounded-lg px-6 py-4"
                            id="headlessui-radiogroup-option-26"
                            role="radio"
                            aria-checked="false"
                            tabIndex={-1}
                            aria-labelledby="headlessui-label-27"
                            aria-describedby="headlessui-description-28 headlessui-description-29"
                          >
                            <div className="flex items-center">
                              <div className="text-sm" onClick={() => setCourseSlugToShow(course)}>
                                <p
                                  className="flex items-center justify-between text-lg font-normal text-gray-900 hover:text-black "
                                  id="headlessui-label-27"
                                >
                                  <span
                                    style={{
                                      boxSizing: "border-box",
                                      display: "block",
                                      width: "initial",
                                      height: "initial",
                                      background: "none",
                                      opacity: 1,
                                      border: 0,
                                      margin: 0,
                                      padding: 0,
                                      maxWidth: "100%",
                                    }}
                                  >
                                    <img
                                      alt=""
                                      // aria-hidden="true"
                                      src={content[course].image}
                                      style={{
                                        display: "block",
                                        maxWidth: "100%",
                                        width: 80,
                                        height: 80,
                                        background: "none",
                                        opacity: 1,
                                        border: 0,
                                        margin: 2,
                                        padding: 0,
                                      }}
                                    />
                                  </span>
                                  {content[course].title}
                                </p>
                                {/* <div className="text-gray-500" id="headlessui-description-28" /> */}
                              </div>
                            </div>
                            <div
                              className="mt-2 flex text-sm sm:mt-0 sm:ml-4 sm:block sm:text-right"
                              id="headlessui-description-29"
                            >
                              <Link href={`/${course}`}>
                                <a className="inline-flex px-4 py-2 text-base font-medium text-white">
                                  <img
                                    src="/images/chevron-right.svg"
                                    alt=""
                                    className="hidden lg:block"
                                  />
                                </a>
                              </Link>
                            </div>
                            <div
                              className="border-2 border-transparent pointer-events-none absolute -inset-px rounded-lg"
                              aria-hidden="true"
                            />
                          </div>
                        )
                    )}
                  </div>
                </div>
              </div>
            </div>
            <main className="course-progress md:col-span-6">
              <div className="relative overflow-hidden bg-white">
                <div className="relative lg:px-8">
                  <nav aria-label="Progress" className="" data-test="course-progress">
                    <div className="what-you-will-learn my-8 rounded bg-jade-50 p-8 lg:mb-8 lg:mt-0">
                      {/* Ceci est remettre plus tard */}
                      <img src="/images/book-icon.svg" alt="book icon" />
                      {courseDetailToShow.description}
                      {/* <p className="py-6 font-bold text-gray-800">VOUS APPRENDREZ</p> */}
                      <div className="font-normal text-gray-600">
                        {/* <dl className="">
                         {courseDetailToShow.learnFeatures.map((feature,index) => (
                        <div className="relative mb-6" key={index}>
                           <dt>
                           <svg
                             xmlns="http://www.w3.org/2000/svg"
                             fill="none"
                             viewBox="0 0 24 24"
                             strokeWidth={2}
                             stroke="currentColor"
                             aria-hidden="true"
                             className="absolute h-6 w-6 text-gray-500"
                           >
                             <path
                               strokeLinecap="round"
                               strokeLinejoin="round"
                               d="M5 13l4 4L19 7"
                             />
                           </svg>
                           <p className="ml-9 text-lg font-medium leading-6 text-gray-600">
                             {feature}
                           </p>
                         </dt>
                        </div>
                         ))}
                      
                      </dl> */}
                      </div>
                    </div>
                    <div className="overflow-hidden">
                      {courseDetailToShow.lessons.map((lesson, index) => (
                        <a
                          key={index}
                          data-test="lesson-progress-link-0"
                          href={`${courseSlugToShow}/${lesson.slug}`}
                        >
                          <div
                            data-test="lesson-0"
                            className="relative mb-6 rounded border py-4 pl-4 lg:py-6"
                          >
                            <div className="relative flex items-center">
                              <span className="flex h-9 items-center" aria-hidden="true">
                                <span
                                  data-test="lesson-upcoming-0"
                                  className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full border-2 border-gray-300 bg-white group-hover:border-gray-400"
                                >
                                  <span className="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300" />
                                </span>
                              </span>
                              <span className="ml-2 flex w-full flex-row lg:ml-4">
                                <span className="grow font-normal">{lesson.title}</span>
                                <img
                                  className="mr-4"
                                  src="/images/home/course-icons/course-play-icon.svg"
                                  alt=""
                                />
                              </span>
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </nav>
                </div>
              </div>
            </main>
          </div>
        </div>
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
