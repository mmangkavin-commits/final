import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import Newlogo from "../component/base/layouts/Newlogo.png";
import loginBg from "../component/base/layouts/loginBg.png";
import { authRequest, saveAccessToken } from "../services/auth";

const fieldClass =
  "h-12 w-full rounded-xl border border-cyan-500/25 bg-[#020914]/80 px-4 text-white outline-none placeholder:text-gray-600 focus:border-cyan-400";

export default function Login() {
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState(location.state?.email || "");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const response = await authRequest("/login", {
        body: { email, password },
      });

      if (!response.data?.token) {
        throw new Error("The API did not return an access token.");
      }

      saveAccessToken(response.data.token);
      navigate("/");
    } catch (requestError) {
      setError(requestError.message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#020914] px-4 py-12">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${loginBg})` }}
      />
      <div className="absolute inset-0 bg-[#020914]/65" />

      <main className="relative z-10 w-full max-w-md rounded-3xl border border-cyan-500/30 bg-[#061522]/95 p-8 shadow-2xl shadow-cyan-500/10 sm:p-10">
        <div className="mb-8 text-center">
          <img
            src={Newlogo}
            alt="BluePhoenix"
            className="mx-auto mb-4 h-16 w-16 rounded-xl object-contain"
          />
          <h1 className="text-3xl font-black tracking-wide text-white">
            BLUE<span className="text-cyan-400">PHOENIX</span>
          </h1>
          <p className="mt-2 text-xs uppercase tracking-[0.3em] text-gray-400">
            Login to your account
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {error && (
            <p role="alert" className="rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-300">
              {error}
            </p>
          )}
          <label className="block space-y-2 text-sm font-semibold text-gray-300">
            Email
            <input
              className={fieldClass}
              type="email"
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </label>
          <label className="block space-y-2 text-sm font-semibold text-gray-300">
            Password
            <input
              className={fieldClass}
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              minLength={8}
              required
            />
          </label>
          <button
            type="submit"
            disabled={isSubmitting}
            className="h-12 w-full rounded-full bg-linear-to-r from-cyan-400 to-blue-500 font-bold text-[#020914] transition hover:brightness-110 disabled:cursor-wait disabled:opacity-60"
          >
            {isSubmitting ? "Signing in..." : "Login"}
          </button>
        </form>

        <p className="mt-7 text-center text-sm text-gray-400">
          Don&apos;t have an account?{" "}
          <Link to="/signup" className="font-semibold text-cyan-400 hover:text-cyan-300">
            Sign up
          </Link>
        </p>
      </main>
    </div>
  );
}
