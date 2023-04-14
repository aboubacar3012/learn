export default function NavigationLessonBtn({ lessons, path }) {
    const paths = lessons.map(lesson => lesson.slug)
    const CurrentPathSplit = path.split("/")
    const currentPath =CurrentPathSplit[1]
    const currentPathIndex = paths.indexOf(currentPath)
    const next = paths[currentPathIndex + 1] ?? null;
    const prev = paths[currentPathIndex - 1] ?? null;
    console.log(next)
    console.log(prev)
    return (
      <div
        className="flex justify-center space-x-28 my-5"
      >
       {prev && (
         <a
         href={prev}
         className=" px-10 py-3 text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 "
       >
         Precedant
       </a>
       )}
        {next && (
        <a
          href={next}
          className=" px-10 py-3 text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 "
        >
         Suivant
        </a>
            )
        }
      </div>
    )
  }
  