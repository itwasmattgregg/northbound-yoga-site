import { useState } from "react";
import useUser from "../utils/useUser";
import Layout from "@components/Layout";

const Login = () => {
  // here we just check if user is already logged in and redirect to profile
  const { mutateUser } = useUser({
    redirectTo: "/manager",
    redirectIfFound: true,
  });

  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const body = {
      password: e.currentTarget.password.value,
    };

    const userData = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const user = await userData.json();

    try {
      await mutateUser(user);
    } catch (error) {
      console.error("An unexpected error happened:", error);
      setErrorMsg(error.data.message);
    }
  }

  return (
    <Layout>
      <div className="container max-w-3xl px-6 mx-auto mt-40">
        <div className="login">
          <form onSubmit={handleSubmit}>
            <label>
              <span>Enter password</span>
              <input type="password" name="password" required />
            </label>

            <button type="submit">Login</button>

            {errorMsg && <p className="error">{errorMsg}</p>}
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
