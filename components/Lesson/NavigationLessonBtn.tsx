import Link from "next/link"

export default function NavigationLessonBtn({ lessons, path }) {
  const paths = lessons.map((lesson) => lesson.slug)
  const currentPathSplit = path.split("/")
  const currentPath = currentPathSplit[1]
  const currentPathIndex = paths.indexOf(currentPath)
  const next = paths[currentPathIndex + 1] ?? null
  const prev = paths[currentPathIndex - 1] ?? null

  return (
    <div className="flex justify-center space-x-28 my-5">
      {prev && (
        <Link
          href={`/${currentPathSplit[0]}/${prev}`}
          className=" px-10 py-3 text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 "
        >
          Precedant
        </Link>
      )}
      {next && (
        <Link
          href={`/${currentPathSplit[0]}/${next}`}
          className=" px-10 py-3 text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 "
        >
          Suivant
        </Link>
      )}
    </div>
  )
}
