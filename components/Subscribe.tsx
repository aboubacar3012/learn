import React from "react"
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
  number: string
}

export default function Subscribe() {
  const {
    register,
    handleSubmit,
    formState,
    formState: { errors },
  } = useForm<Inputs>()

  const [isSubmitted, setIsSubmitted] = React.useState("")

  const onSubmit: SubmitHandler<Inputs> = async (data, event) => {
    event.target.reset()

    const subscribe = await fetch("/api/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    const response = await subscribe.json()

    setIsSubmitted(response.message)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="sm:flex">
      <div className="min-w-0 flex-1">
        <label htmlFor="number" className="sr-only">
          Entrez votre numéro de téléphone pour être contacté
        </label>
        <input
          data-test="number-input"
          {...register("number", {
            required: "Numero telephone non valide, ex: +224 623 00 00 00",
          })}
          id="number"
          type="number"
          name="number"
          placeholder="Entrez votre numéro de téléphone pour être contacté"
          className="block w-full px-4 py-3 rounded-md border-2text-base text-gray-900 placeholder-gray-500"
        />
        {errors.number && (
          <span className="text-red-500" data-test="error-message">
            {errors.number.message}
          </span>
        )}
        {formState.isSubmitted && isSubmitted.includes("Success:") && (
          <div className="text-jade-500" data-test="success-message">
            {isSubmitted}
          </div>
        )}
        {formState.isSubmitted && isSubmitted.includes("Error:") && (
          <div className="text-red-500" data-test="server-error-message">
            {isSubmitted}
          </div>
        )}
      </div>
      <div className="mt-3 sm:mt-0 sm:ml-3">
        <input
          data-test="submit-button"
          type="submit"
          value="Envoyer"
          className="block w-full py-3 px-4 rounded-md shadow bg-blue-500 text-white font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 focus:ring-offset-gray-900"
        />
      </div>
    </form>
  )
}
