import {useState, useEffect} from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import type { RootState } from "../redux/store"
import { useSelector, useDispatch } from "react-redux"

const ResetPassword = () => {
  const [dateOfBirth, setDateOfBirth] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [repeatPassword, setRepeatPassword] = useState<string>("")

  const [errorMessage, setErrorMessage] = useState<string>(null);
  const [successMessage, setSuccessMessage] = useState<string>(null);

  const auth = useSelector((state: RootState) => state.auth)
  const dispatch = useDispatch()

  const router = useRouter()

//   useEffect(() => {
//     if (auth.isConnected) router.push("/")
//   }, [auth])

  const handleSubmit = async (event) => {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/auth/resetpwd`
    event.preventDefault()
    if(password !== repeatPassword){
      setErrorMessage("Les deux mot de passe ne correspondent pas");
      return;
    }
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, dateOfBirth }),
    })
    const data = await response.json()
    if (data.success) {
      setErrorMessage(null)
      setSuccessMessage(data.message)
      setTimeout(() => {
        router.push("/connexion")
      },2000)
      
      // show success toast
      // redirect to login page
    } else {
      setSuccessMessage(null)
      setErrorMessage(data.error)
      // show error toast
      // not redirect
    }
    console.log({ email, password, dateOfBirth })
  }

    return (
        <div className="max-w-screen mx-auto m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center items-center flex">
  <div className="lg:w-2/3 xl:w-2/3 p-6 sm:p-12">

    <div className="mt-12 flex flex-col items-center">
      <h1 className="text-2xl xl:text-3xl font-extrabold">
        Modification de mot de passe
      </h1>
      <div className="w-full flex-1 mt-8">
        
        <div className="mx-auto max-w-md">
        <form className="mt-6" onSubmit={handleSubmit}>
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
              {
                errorMessage && (
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
                )
              }
              {
                successMessage && (
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
                )
              }
              <button
                type="submit"
                className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
        px-4 py-3 mt-6"
              >
                Changer mon mot de passe
              </button>
            </form>
            <p className="mt-8 text-center">
              Annuler la modification{" "}
              <Link href="/connexion" className="text-blue-500 hover:text-blue-700 font-semibold">
                  Je me connecte
              </Link>
            </p>
          
        </div>
      </div>
    </div>
  </div>
 
</div>
      
    );
}

export default ResetPassword;