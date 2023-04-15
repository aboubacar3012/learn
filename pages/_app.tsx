import "tailwindcss/tailwind.css"
import "../styles/globals.css"
import Header from "../components/Header"

// redux
import { store } from '../redux/store'
import { Provider } from 'react-redux'
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Header />
      <hr />
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
