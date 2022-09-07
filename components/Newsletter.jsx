import { useState } from "react";

const SubmitStateEnum = {
  WAITING: "waiting",
  LOADING: "loading",
  SUCCESS: "success",
  ERROR: "error",
};

export default function Newsletter() {
  const [submitState, setSubmitState] = useState(SubmitStateEnum);

  const submitForm = async (e) => {
    e.preventDefault();
    setSubmitState(SubmitStateEnum.LOADING);

    const data = new FormData(e.target);
    const body = JSON.stringify({
      email: data.get("email"),
      name: data.get("name"),
    });
    try {
      const settings = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body,
      };
      const fetchResponse = await fetch(`/api/newsletterSignup`, settings);
      if (fetchResponse.ok) {
        setSubmitState(SubmitStateEnum.SUCCESS);
      } else {
        const error = await fetchResponse.text();
        throw new Error(error);
      }
    } catch (e) {
      setSubmitState(SubmitStateEnum.ERROR);
    }
  };
  const buttonDisabled = () => {
    switch (submitState) {
      case SubmitStateEnum.LOADING:
      case SubmitStateEnum.SUCCESS:
        return true;
      default:
        return false;
    }
  };

  const submitButtonText = () => {
    switch (submitState) {
      case SubmitStateEnum.LOADING:
        return "Submitting";
      case SubmitStateEnum.SUCCESS:
        return "Success!";
      case SubmitStateEnum.ERROR:
        return "There was an error!";
      default:
        return "Submit";
    }
  };
  return (
    <>
      {submitState !== SubmitStateEnum.SUCCESS && (
        <form
          onSubmit={submitForm}
          className="grid grid-cols-1 gap-6 p-10 sm:grid-cols-2 bg-light-green"
        >
          <label className="block text-sm font-medium">
            First Name:
            <input name="name" type="text" required className="block" />
          </label>

          <label className="block text-sm font-medium">
            Email:
            <input type="email" name="email" required className="block" />
          </label>

          <div className="text-center sm:col-span-2">
            <button
              disabled={buttonDisabled()}
              className="inline-flex justify-center px-4 py-2 text-sm disabled:opacity-50"
            >
              {submitButtonText()}
            </button>
          </div>
        </form>
      )}
    </>
  );
}
