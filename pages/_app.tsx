import "tailwindcss/tailwind.css"
import "../styles/globals.css"
import Header from "../components/Header"
import type { AppProps } from "next/app"
import {Analytics} from "@vercel/analytics/react";
// redux
import { store } from "../redux/store"
import { Provider } from "react-redux"
import { persistStore } from "redux-persist"
import { PersistGate } from "redux-persist/integration/react"

function MyApp({ Component, pageProps }) {
  const persistor = persistStore(store)
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Header />
        <hr />
        <Component {...pageProps} />
        <Analytics />
      </PersistGate>
    </Provider>
  )
}

export default MyApp
