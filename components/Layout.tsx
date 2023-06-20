import dynamic from "next/dynamic"
import Head from "next/head"
import Header from "./Header"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../redux/store"
import { updateVersion } from "../redux/slices/version.slice"
import { useEffect } from "react"
import { clearAuth } from "../redux/slices/auth.slice"

const Footer = dynamic(() => import("./Footer"), {
  ssr: false,
})

export default function Layout({ children, content, courses, progressService }) {
  const dispatch = useDispatch()
  const PACKAGE_VERSION = require("../package.json").version
  const { version } = useSelector((state: RootState) => state.version)

  // console.log(localStorage.removeItem("persist:innotech"))
  console.log(version)
  console.log(PACKAGE_VERSION)

  if (PACKAGE_VERSION && PACKAGE_VERSION !== version) {
    dispatch(clearAuth())
    // localStorage.removeItem("persist:innotech")
    // localStorage.setItem("persist:innotech", JSON.stringify({ version: PACKAGE_VERSION }))
    dispatch(updateVersion({ version: PACKAGE_VERSION }))
  } else {
    dispatch(updateVersion({ version: PACKAGE_VERSION }))
  }

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
