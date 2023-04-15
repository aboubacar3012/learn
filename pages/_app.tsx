import "tailwindcss/tailwind.css"
import "../styles/globals.css"
import Header from "../components/Header"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <hr />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
