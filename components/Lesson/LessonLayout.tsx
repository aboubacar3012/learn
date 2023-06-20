import LessonToc from "../../components/Lesson/LessonToc"
import LessonBreadcrumbs from "./LessonBreadcrumbs"
import { MDXRemote } from "next-mdx-remote"
import dynamic from "next/dynamic"
import Script from "next/script"
import LessonProgress from "./LessonProgress"
import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"

export default function LessonLayout({
  toc,
  source,
  components,
  sectionLessons,
  sectionTitle,
  progressService,
  lessonPath,
  lessonData,
  course,
}) {
  const { isConnected, user } = useSelector((state: RootState) => state.auth)
  return (
    <>
      <LessonBreadcrumbs
        lessonPath={lessonPath}
        sectionTitle={sectionTitle}
        lessonData={lessonData}
      />

      <div className="min-h-screen mt-20">
        <div className="py-6">
          <div className="max-w-3xl mx-auto sm:px-6 lg:max-w-full lg:px-8 lg:grid lg:grid-cols-12 lg:gap-8">
            {/* Table of Content */}
            <div className="hidden lg:block col-span-2">
              <div className="sticky top-6">
                <p className="font-semibold mb-4">DANS CE CHAPITRE</p>
                <nav aria-label="Sidebar" className="">
                  <LessonToc navigation={toc} />
                </nav>
              </div>
            </div>

            {/* Content */}
            <main className="lesson-content col-span-8 ">
              <div className="relative bg-white overflow-hidden">
                <div className="relative px-4 sm:px-6 lg:px-8">
                  <div className="prose prose-blue prose-lg text-gray-500 mx-auto">
                    {user && user.isActive ? (
                      <MDXRemote {...source} components={components} />
                    ) : (
                      <div className="border-t border-gray-200 text-center pt-8 bg-white rounded-lg shadow-md max-w-4xl">
                        <h1 className="text-9xl font-bold text-purple-400">OOOOPS !!!</h1>
                        <h1 className="text-6xl font-medium py-8">
                          Votre compte n'est pas encore activé
                        </h1>
                        <p className="text-2xl pb-8 px-12 font-medium">
                          Cher étudiant, veuillez noter que votre compte n'est pas encore activé, ce
                          qui vous empêche d'accéder aux cours. Veuillez contacter notre équipe pour
                          activer votre compte. Nous serons ravis de vous aider à résoudre ce
                          problème et de vous permettre de profiter de notre contenu de formation.
                          Merci pour votre compréhension et votre collaboration.
                        </p>
                        <div className=" justify-center    ">
                          <a
                            href="https://wa.me/message/WPENVTYKOINKH1"
                            className="inline-flex items-center px-5 py-3 rounded-lg dark:bg-violet-400 dark:text-gray-900"
                          >
                            <img src="/images/whatsapp-color-svgrepo-com.svg" width={50} />
                            <span className="flex flex-col items-start ml-4 leading-none">
                              {/* <span className="mb-1 text-xs">GET IT ON</span> */}
                              <span className="font-semibold title-font">Whatsapp</span>
                            </span>
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </main>

            {/* Progress Steps */}
            <aside className="hidden lg:block col-span-2">
              <div className="sticky top-6 space-y-4">
                <p className="font-semibold mb-6">{sectionTitle}</p>
                <LessonProgress
                  course={course}
                  lessons={sectionLessons}
                  progressService={progressService}
                />
              </div>
            </aside>
          </div>
        </div>
      </div>

      <div id="modal" data-test="lesson-modal">
        <div className="modal-content">
          <span className="close">&times;</span>
          <img src="" alt="" />
        </div>
      </div>

      <Script id="show-banner" strategy="afterInteractive">
        {`
          const images = document.querySelectorAll(".lesson-content img")
          const modal = document.getElementById("modal")
          const modalImg = document.querySelector("#modal .modal-content img")
          const modalClose = document.querySelector("#modal .modal-content .close")

          images.forEach((img) => {
            img.addEventListener("click", (event) => {
              let src = event.target.getAttribute("src")
              modalImg.src = src
              modal.style.display = "block"
            })
          })

          modalClose.addEventListener("click", () => {
            modal.style.display = "none"
          })

          // When the user clicks anywhere outside of the modal, close it
          window.addEventListener("click", (event) => {
            if (event.target == modal) {
              modal.style.display = "none"
            }
          })
        `}
      </Script>
    </>
  )
}
