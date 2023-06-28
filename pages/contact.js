import { useForm } from "react-hook-form";
import React from "react";

export default function Form() {
  let [status200, setStatus200] = React.useState(false);
  let [status404, setStatus404] = React.useState(false);
  let [loading, setLoading] = React.useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    setLoading(true);
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/contact";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };
    try {
      const response = await fetch(endpoint, options);
      if (response.status === 200) {
        setStatus200(true);
        setLoading(false);
      } else {
        setStatus404(true);
      }
    } catch (err) {
      console.error(err);
    }
  };

  let reg = /^\d+$/;
  let mailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  return (
    <section className="flex flex-col mt-9">
      <h1 className="mx-auto justify-center text-3xl text-slate-900  ">
        Un projet , une question ?{" "}
      </h1>
      <form
        className="w-full max-w-sm mx-auto my-10 mt-16"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className=" md:items-center mb-6">
          <div className="md:w-full">
            <input
              {...register("Nom", { required: true })}
              placeholder="Nom"
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-900"
              id="Nom"
              type="text"
            />
          </div>
        </div>
        <div className=" md:items-center mb-6">
          <div className="md:w-full">
            <input
              {...register("Prenom", { required: true })}
              placeholder="Prénom"
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-900"
              id="Prénom"
              type="text"
            />
            {errors.Prenom && <span>Il y a une erreur dans votre prénom</span>}
          </div>
        </div>
        <div className=" md:items-center mb-6">
          <div className="md:w-full">
            <input
              {...register("Email", { required: true, pattern: mailReg })}
              placeholder="Email"
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-900"
              id="Email"
              type="text"
            />
            {errors.Email && (
              <span>Il y a une erreur dans votre adresse email</span>
            )}
          </div>
        </div>
        <div className=" md:items-center mb-6">
          <div className="md:w-full">
            <input
              {...register("Tel", {
                pattern: reg,
                maxLength: 10,
                minLength: 10,
              })}
              placeholder="Téléphone"
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-900"
              id="Téléphone"
              type="text"
            />
            {errors.Tel && <span>Il y a une erreur dans votre numéro</span>}
          </div>
        </div>
        <div className=" md:items-center mb-6">
          <div className="">
            <label
              className="block text-gray-500 font-bold md:text-center mb-1 md:mb-0 pr-4"
              htmlFor="Message"
            >
              Votre Message
            </label>
          </div>
          <div className="md:w-full">
            <textarea
              {...register("Message", { required: true })}
              className="bg-gray-200 appearance-none border-2 border-gray-200 h-72 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-900"
              id="Message"
              type="text"
            />
          </div>
        </div>

        {status200 && (
          <span className="font-bold text-center mx-auto flex flex-col mb-5">{`J'ai bien recu votre message, merci ! `}</span>
        )}
        {status404 && (
          <span className="font-bold text-center mx-auto flex flex-col mb-5 text-red-600">{`Erreur lors de l'envois du message `}</span>
        )}

        <div className="mx-auto md:w-1/3">
          {loading ? (
            <ThreeDots color="#000000" height={80} width={80} />
          ) : (
            <button
              className=" shadow bg-slate-900 opacity-60 hover:opacity-90 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
              action="submit"
            >
              Envoyer
            </button>
          )}
        </div>
      </form>
    </section>
  );
}
