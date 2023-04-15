import Link from "next/link"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import type { RootState } from "../redux/store"
import { useSelector, useDispatch } from "react-redux"
import { login } from "../redux/slices/auth.slice"

const SignUp = () => {
  const [firstName, setFirstName] = useState<string>("")
  const [lastName, setLastName] = useState<string>("")
  const [dateOfBirth, setDateOfBirth] = useState<string>("")
  const [phone, setPhone] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [repeatPassword, setRepeatPassword] = useState<string>("")

  const auth = useSelector((state: RootState) => state.auth)
  // const dispatch = useDispatch()

  const router = useRouter()

  useEffect(() => {
    if (auth.isConnected) router.push("/")
  }, [auth])

  const handleSubmit = async (event) => {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/auth/signup`
    event.preventDefault()
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, firstName, lastName, dateOfBirth, phone }),
    })
    const data = await response.json()
    if (data.success) {
      // show success toast
      // redirect to login page
    } else {
      // show error toast
      // not redirect
    }
  }
  return (
    <>
      {/* component */}
      <section className="flex flex-col md:flex-row items-center">
        <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
          <img
            src="https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt="logo"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-white w-full md:max-w-md lg:max-w-full  md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
          <div className="w-full h-100">
            <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12 text-center md:text-left">
              Créer votre compte
            </h1>
            <form className="mt-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-700">Prénom</label>
                <input
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                  type="text"
                  name=""
                  id=""
                  placeholder="Entrez votre prénom"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  autoComplete=""
                  required={true}
                />
              </div>
              <div>
                <label className="block text-gray-700">Nom</label>
                <input
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
                  type="text"
                  name=""
                  id=""
                  placeholder="Entrez votre nom"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  autoComplete=""
                  required={true}
                />
              </div>
              <div>
                <label className="block text-gray-700">Date de naissance</label>
                <input
                  value={dateOfBirth}
                  onChange={(event) => setDateOfBirth(event.target.value)}
                  type="date"
                  name=""
                  id=""
                  placeholder="Entrez votre date de naissance"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  autoComplete=""
                  required={true}
                  max="2010-01-01"
                />
              </div>
              <div>
                <label className="block text-gray-700">Téléphone</label>
                <input
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  type="text"
                  name=""
                  id=""
                  placeholder="Entrez votre numéro téléphone whatsapp"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  autoComplete=""
                  required={true}
                  // pattern="^\+[1-9]{1}[0-9]{3,14}$"
                />
              </div>
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  type="email"
                  name=""
                  id=""
                  placeholder="Entrez votre adresse email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  autoComplete=""
                  required={true}
                />
              </div>
              <div className="mt-4">
                <label className="block text-gray-700">Mot de passe</label>
                <input
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  type="password"
                  name=""
                  id=""
                  placeholder="Entrez votre mot de passe"
                  minLength={6}
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  required={true}
                />
              </div>
              <div className="mt-4">
                <label className="block text-gray-700">Confirmer votre Mot de passe</label>
                <input
                  value={repeatPassword}
                  onChange={(event) => setRepeatPassword(event.target.value)}
                  type="password"
                  name=""
                  id=""
                  placeholder="Repetez votre mot de passe"
                  minLength={6}
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  required={true}
                />
              </div>

              <button
                type="submit"
                className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
        px-4 py-3 mt-6"
              >
                Je m'inscris
              </button>
            </form>
            <hr className="my-6 border-gray-300 w-full" />
            {/* <button
              type="button"
              className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
            >
              <div className="flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  className="w-6 h-6"
                  viewBox="0 0 48 48"
                >
                  <defs>
                    <path
                      id="a"
                      d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                    />
                  </defs>
                  <clipPath id="b">
                    <use xlinkHref="#a" overflow="visible" />
                  </clipPath>
                  <path clipPath="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" />
                  <path clipPath="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z" />
                  <path clipPath="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z" />
                  <path clipPath="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z" />
                </svg>
                <span className="ml-4">Se connecter avec Google</span>
              </div>
            </button> */}
            <p className="m-8 text-center">
              J'ai déjà un compte?{" "}
              <Link href="/sign-in">
                <a href="#" className="text-blue-500 hover:text-blue-700 font-semibold">
                  Se connecter
                </a>
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default SignUp
