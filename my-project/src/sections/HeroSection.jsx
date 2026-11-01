import phoenixBg from "../component/base/layouts/phoenixBg.png";
import { useNavigate } from "react-router";

function App() {
  const navigate = useNavigate();

  return (
    <main
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${phoenixBg})`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#020914]/45"></div>

      {/* Hero content */}
      <section className="relative z-10 mx-auto flex min-h-180 max-w-7xl items-center px-6">
        <div className="max-w-xl">

          <p className="mb-3 text-sm font-semibold tracking-[0.5em] text-cyan-400">
            DISCOVER
          </p>

          <h1 className="m-0 text-5xl font-extrabold leading-tight text-white md:text-7xl">
            YOUR NEXT
            <br />

            <span className="text-cyan-400">
              FAVORITE GAME
            </span>
          </h1>

          <p className="mb-0 mt-6 max-w-lg text-lg leading-relaxed text-gray-300">
            Explore, organize, and manage your game collection
            in one place. Join thousands of gamers today.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            {/* Explore Games */}
            <button
              type="button"
              onClick={() => navigate("/products")}
              className="m-0! rounded-lg! border-0! bg-linear-to-r! from-cyan-500! to-blue-600! px-7! py-3! font-semibold! text-white! shadow-lg! shadow-cyan-500/30! transition hover:scale-105! hover:from-cyan-400! hover:to-blue-500!"
            >
              🎮 Explore Games →
            </button>

            {/* Create Account */}
            <button
              type="button"
              className="m-0! rounded-lg! border! border-cyan-400! bg-transparent! px-7! py-3! font-semibold! text-cyan-400! transition hover:bg-cyan-400/10!"
            >
              Create Account
            </button>
          </div>

        </div>
      </section>
    </main>
  );
}

export default App;