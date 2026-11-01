import { useState } from "react";
import { Link, useNavigate } from "react-router";
import Newlogo from "../component/base/layouts/Newlogo.png";
import loginBg from "../component/base/layouts/loginBg.png";
import { authRequest } from "../services/auth";

const fieldClass =
  "h-12 w-full rounded-xl border border-cyan-500/25 bg-[#020914]/80 px-4 text-white outline-none placeholder:text-gray-600 focus:border-cyan-400";

export default function Signup() {
  const navigate = useNavigate();
  const [step, setStep] = useState("register");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otpCode, setOtpCode] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setMessage("");
    setIsSubmitting(true);

    try {
      if (step === "register") {
        await authRequest("/register", {
          body: { username, email, password, confirmPassword },
        });
        setStep("verify");
        setMessage("We sent a verification code to your email address.");
      } else {
        await authRequest("/verify-otp", {
          body: { email, otp_code: otpCode.trim().toUpperCase() },
        });
        navigate("/login", { state: { email } });
      }
    } catch (requestError) {
      setError(requestError.message);
    } finally {
      setIsSubmitting(false);
    }
  }

  async function handleResendOtp() {
    setError("");
    setMessage("");
    setIsSubmitting(true);

    try {
      const response = await authRequest("/resend-otp", { body: { email } });
      setMessage(response.message || "A new verification code was sent.");
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
            {step === "register" ? "Create your account" : "Verify your email"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {error && (
            <p role="alert" className="rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-300">
              {error}
            </p>
          )}
          {message && (
            <p role="status" className="rounded-xl border border-cyan-500/30 bg-cyan-500/10 p-3 text-sm text-cyan-200">
              {message}
            </p>
          )}

          {step === "register" ? (
            <>
              <label className="block space-y-2 text-sm font-semibold text-gray-300">
                Username
                <input
                  className={fieldClass}
                  autoComplete="username"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  minLength={2}
                  required
                />
              </label>
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
                  autoComplete="new-password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  minLength={8}
                  required
                />
              </label>
              <label className="block space-y-2 text-sm font-semibold text-gray-300">
                Confirm password
                <input
                  className={fieldClass}
                  type="password"
                  autoComplete="new-password"
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                  minLength={8}
                  required
                />
              </label>
            </>
          ) : (
            <>
              <p className="text-sm text-gray-300">
                Enter the six-character verification code sent to{" "}
                <span className="font-semibold text-white">{email}</span>.
              </p>
              <label className="block space-y-2 text-sm font-semibold text-gray-300">
                Verification code
                <input
                  className={fieldClass}
                  autoComplete="one-time-code"
                  value={otpCode}
                  onChange={(event) => setOtpCode(event.target.value)}
                  minLength={6}
                  maxLength={6}
                  required
                />
              </label>
              <button
                type="button"
                onClick={handleResendOtp}
                disabled={isSubmitting}
                className="text-sm font-semibold text-cyan-400 hover:text-cyan-300 disabled:opacity-50"
              >
                Resend code
              </button>
            </>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="h-12 w-full rounded-full bg-linear-to-r from-cyan-400 to-blue-500 font-bold text-[#020914] transition hover:brightness-110 disabled:cursor-wait disabled:opacity-60"
          >
            {isSubmitting
              ? "Please wait..."
              : step === "register"
                ? "Create account"
                : "Verify email"}
          </button>
        </form>

        <p className="mt-7 text-center text-sm text-gray-400">
          Already have an account?{" "}
          <Link to="/login" className="font-semibold text-cyan-400 hover:text-cyan-300">
            Login
          </Link>
        </p>
      </main>
    </div>
  );
}
