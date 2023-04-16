import "tailwindcss/tailwind.css"
import "../styles/globals.css"
import Header from "../components/Header"

// redux
import { store } from '../redux/store'
import { Provider } from 'react-redux'
import { persistStore } from "redux-persist"
import { PersistGate } from "redux-persist/integration/react"

function MyApp({ Component, pageProps }) {
  const persistor = persistStore(store)
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Header />
        <hr />
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  )
}

export default MyApp
