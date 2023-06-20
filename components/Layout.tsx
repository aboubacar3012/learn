import dynamic from "next/dynamic"
import Head from "next/head"
import Header from "./Header"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../redux/store"
import { updateVersion } from "../redux/slices/version.slice"
import { useEffect } from "react"

const Footer = dynamic(() => import("./Footer"), {
  ssr: false,
})

export default function Layout({ children, content, courses, progressService }) {
  const dispatch = useDispatch()
  const PACKAGE_VERSION = require("../package.json").version
  const { version } = useSelector((state: RootState) => state.version)

  useEffect(() => {
    if (PACKAGE_VERSION && PACKAGE_VERSION !== version) {
      localStorage.removeItem("persist:innotech")
      dispatch(updateVersion({ version: PACKAGE_VERSION }))
    } else {
      dispatch(updateVersion({ version: PACKAGE_VERSION }))
    }
  }, [])

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Header
        content={content}
        courses={courses}
        progressService={progressService}
      /> */}
      {children}
    </>
  )
}
