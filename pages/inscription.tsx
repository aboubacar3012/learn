import Link from "next/link"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import type { RootState } from "../redux/store"
import { useSelector, useDispatch } from "react-redux"
import { login } from "../redux/slices/auth.slice"
// import PhoneInput from 'react-phone-input-2'
// import 'react-phone-input-2/lib/material.css'

const SignUp = () => {
  const [firstName, setFirstName] = useState<string>("")
  const [lastName, setLastName] = useState<string>("")
  const [dateOfBirth, setDateOfBirth] = useState<string>("")
  const [phone, setPhone] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [repeatPassword, setRepeatPassword] = useState<string>("")
  const [country, setCountry] = useState<string>("GIN")
  const [submitMessage, setSubmitMessage] = useState<string>("")

  const [errorMessage, setErrorMessage] = useState<string>(null)
  const [successMessage, setSuccessMessage] = useState<string>(null)

  const auth = useSelector((state: RootState) => state.auth)
  // const dispatch = useDispatch()

  const router = useRouter()

  useEffect(() => {
    if (auth.isConnected) router.push("/")
  }, [auth])

  const handleSubmit = async (event) => {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/auth/signup`
    event.preventDefault()
    if (password !== repeatPassword) {
      setErrorMessage("Les deux mot de passe ne correspondent pas")
      return
    }
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email.toLowerCase(),
        password: password.toLowerCase(),
        firstName,
        lastName,
        dateOfBirth,
        phone,
        country,
        submitMessage,
      }),
    })
    const data = await response.json()
    if (data.success) {
      setErrorMessage(null)
      setSuccessMessage(data.message)
      setTimeout(() => {
        router.push("/connexion")
      }, 2000)

      // show success toast
      // redirect to login page
    } else {
      setSuccessMessage(null)
      setErrorMessage(data.error)
      // show error toast
      // not redirect
    }
    // console.log({ email, password, firstName, lastName, dateOfBirth, phone, country })
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
              Inscription
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
                  className="w-full px-4  rounded-lg bg-gray-200  border focus:border-blue-500 focus:bg-white focus:outline-none"
                  autoComplete=""
                  required={true}
                />
              </div>
              <div>
                <label className="block text-gray-700 pt-3">Nom</label>
                <input
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
                  type="text"
                  name=""
                  id=""
                  placeholder="Entrez votre nom"
                  className="w-full px-4  rounded-lg bg-gray-200  border focus:border-blue-500 focus:bg-white focus:outline-none"
                  autoComplete=""
                  required={true}
                />
              </div>
              <div>
                <label className="block text-gray-700 pt-3">Date de naissance</label>
                <input
                  value={dateOfBirth}
                  onChange={(event) => setDateOfBirth(event.target.value)}
                  type="date"
                  name=""
                  id=""
                  placeholder="Entrez votre date de naissance"
                  className="w-full px-4  rounded-lg bg-gray-200  border focus:border-blue-500 focus:bg-white focus:outline-none"
                  autoComplete=""
                  required={true}
                  max="2010-01-01"
                />
              </div>
              <div>
                <label className="block text-gray-700 pt-3">Téléphone</label>
                <input
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  type="text"
                  name=""
                  id=""
                  placeholder="Entrez votre numéro téléphone whatsapp"
                  className="w-full px-4  rounded-lg bg-gray-200  border focus:border-blue-500 focus:bg-white focus:outline-none"
                  autoComplete=""
                  required={true}
                  pattern="^\+[1-9]{1}[0-9]{3,14}$"
                  title="Votre numero doit respecter le format suivant: ex: +224631000000"
                />
                {/* <PhoneInput
                  // pattern="^\+[1-9]{1}[0-9]{3,14}$"
                  country='gn'
                  regions={['africa']}
                  inputClass="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  placeholder="Entrez votre numéro téléphone"
                  value={phone}
                  onChange={setPhone}/> */}
              </div>
              <div>
                <label htmlFor="countries" className="block text-gray-700 pt-3">
                  Pays
                </label>
                <select
                  value={country}
                  onChange={(event) => setCountry(event.target.value)}
                  id="countries"
                  // className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  className="w-full px-4  rounded-lg bg-gray-200  border focus:border-blue-500 focus:bg-white focus:outline-none"
                >
                  {/* <option defaultValue="GIN">Choisir votre pays</option> */}
                  <option defaultValue="GIN" value="GIN">
                    Guinée
                  </option>
                  <option value="SEN">Sénégal</option>
                  <option value="CIV">Côte d'ivoire</option>
                  <option value="MLI">Mali</option>
                  <option value="TGO">Togo</option>
                  <option value="GAB">Gambie</option>
                  <option value="BFA">Burkina Faso</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 pt-3">Email</label>
                <input
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  type="email"
                  name=""
                  id=""
                  placeholder="Entrez votre adresse email"
                  className="w-full px-4  rounded-lg bg-gray-200  border focus:border-blue-500 focus:bg-white focus:outline-none"
                  autoComplete=""
                  required={true}
                />
              </div>
              <div>
                <label className="block text-gray-700 pt-3">Mot de passe</label>
                <input
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  type="password"
                  name=""
                  id=""
                  placeholder="Entrez votre mot de passe"
                  minLength={6}
                  className="w-full px-4  rounded-lg bg-gray-200  border focus:border-blue-500 focus:bg-white focus:outline-none"
                  required={true}
                />
              </div>
              <div>
                <label className="block text-gray-700 pt-3">Confirmer votre Mot de passe</label>
                <input
                  value={repeatPassword}
                  onChange={(event) => setRepeatPassword(event.target.value)}
                  type="password"
                  name=""
                  id=""
                  placeholder="Repetez votre mot de passe"
                  minLength={6}
                  className="w-full px-4 rounded-lg bg-gray-200  border focus:border-blue-500 focus:bg-white focus:outline-none"
                  required={true}
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white pt-3"
                >
                  Parlez nous un peut de vous et de votre parcours ?
                </label>
                <textarea
                  value={submitMessage}
                  onChange={(event) => setSubmitMessage(event.target.value)}
                  id="message"
                  rows={5}
                  className="w-full px-4 rounded-lg bg-gray-200  border focus:border-blue-500 focus:bg-white focus:outline-none"
                  placeholder="Nous avons tous un parcours, parlez nous du votre ..."
                  required={true}
                ></textarea>
              </div>
              {errorMessage && (
                <div className="p-2">
                  <div className="inline-flex items-center bg-white leading-none text-red-600 rounded-full p-2 shadow text-teal text-md w-full">
                    <span className="inline-flex bg-red-600 text-white rounded-full h-6 px-3 justify-center items-center">
                      Erreur
                    </span>
                    <span className="inline-flex px-2">
                      {errorMessage && <span>{errorMessage}</span>}
                    </span>
                  </div>
                </div>
              )}
              {successMessage && (
                <div className="p-2">
                  <div className="inline-flex items-center bg-white leading-none text-green-600 rounded-full p-2 shadow text-teal text-md w-full">
                    <span className="inline-flex bg-green-600 text-white rounded-full h-6 px-3 justify-center items-center">
                      Success
                    </span>
                    <span className="inline-flex px-2">
                      {successMessage && <span>{successMessage}</span>}
                    </span>
                  </div>
                </div>
              )}
              <button
                type="submit"
                className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
        px-4 py-3 mt-6"
              >
                Je m'inscris
              </button>
            </form>
            <hr className=" border-gray-300 w-full" />
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
            <p className="my-4 text-center">
              J'ai déjà un compte?{" "}
              <Link href="/connexion" className="text-blue-500 hover:text-blue-700 font-semibold">
                Se connecter
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default SignUp
