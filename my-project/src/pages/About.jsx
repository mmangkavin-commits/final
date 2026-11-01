import { Link } from "react-router";

export default function About() {
  const stats = [
    {
      icon: "🎮",
      number: "30+",
      title: "Games",
    },
    {
      icon: "📁",
      number: "6+",
      title: "Categories",
    },
    {
      icon: "⚡",
      number: "100%",
      title: "Free to Explore",
    },
    {
      icon: "🚀",
      number: "24/7",
      title: "Gaming Discovery",
    },
  ];

  return (
    <div className="min-h-screen bg-[#020914] text-white">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden border-b! border-cyan-500/20!">

        {/* Background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(0,200,255,0.10),transparent_40%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-20">

          <div className="max-w-3xl">

            <p className="mb-4 text-sm font-bold tracking-[0.3em] text-cyan-400">
              ABOUT BLUEPHOENIX
            </p>

            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Your{" "}
              <span className="text-cyan-400">
                Gaming World
              </span>{" "}
              Starts Here.
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-gray-400 md:text-lg">
              BluePhoenix is a modern game library designed to help
              gamers discover, explore, organize, and keep track of
              the games they love.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">

              <Link
                to="/products"
                className="inline-flex items-center rounded-xl border! border-cyan-400/40! bg-linear-to-r from-cyan-500 to-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300! hover:shadow-cyan-400/30"
              >
                Explore Games
                <span className="ml-2">→</span>
              </Link>

              <Link
                to="/categories"
                className="inline-flex items-center rounded-xl border! border-cyan-500/30! bg-[#061522]/80 px-6 py-3 font-semibold text-cyan-400 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400! hover:bg-cyan-500/10"
              >
                Browse Categories
              </Link>

            </div>

          </div>

        </div>
      </section>


      {/* ================= STATS ================= */}
      <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {stats.map((stat) => (
            <div
              key={stat.title}
              className="group rounded-2xl border! border-cyan-500/30! bg-[#061522]/90 p-6 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/70! hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]"
            >

              <div className="flex items-start justify-between">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl border! border-cyan-500/20! bg-cyan-500/10 text-xl">
                  {stat.icon}
                </div>

                <span className="text-3xl font-bold text-cyan-400">
                  {stat.number}
                </span>

              </div>

              <p className="mt-7 text-sm text-gray-400">
                {stat.title}
              </p>

            </div>
          ))}

        </div>
      </section>


      {/* ================= WHO WE ARE ================= */}
      <section className="mx-auto max-w-7xl px-6 py-10">

        <div className="grid gap-8 lg:grid-cols-2">

          {/* Left */}
          <div className="py-4">

            <p className="mb-3 text-sm font-bold tracking-[0.3em] text-cyan-400">
              WHO WE ARE
            </p>

            <h2 className="text-3xl font-bold md:text-4xl">
              Built for gamers,
              <span className="text-cyan-400"> by gamers.</span>
            </h2>

            <p className="mt-5 leading-8 text-gray-400">
              BluePhoenix gives you a simple and organized place
              to discover games and learn more about the games you
              enjoy.
            </p>

            <p className="mt-4 leading-8 text-gray-400">
              Browse different categories, explore game details,
              save your favorite games, and build your own personal
              collection.
            </p>

          </div>


          {/* Right Card */}
          <div className="rounded-2xl border! border-cyan-500/30! bg-[#061522]/90 p-7 shadow-lg shadow-black/20 transition-all duration-300 hover:border-cyan-400/60!">

            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl border! border-cyan-500/30! bg-cyan-500/10 text-2xl">
              🔥
            </div>

            <h3 className="text-2xl font-bold">
              Discover More
            </h3>

            <p className="mt-4 leading-7 text-gray-400">
              Find new games, explore different genres, and keep
              everything you love in one place.
            </p>

            <div className="mt-6 space-y-4">

              <Feature text="Explore a growing game library" />

              <Feature text="Browse games by category" />

              <Feature text="Save your favorite games" />

              <Feature text="View detailed game information" />

            </div>

          </div>

        </div>

      </section>


      {/* ================= WHY BLUEPHOENIX ================= */}
      <section className="mx-auto max-w-7xl px-6 py-12">

        <div className="rounded-2xl border! border-cyan-500/30! bg-[#061522]/70 p-8 md:p-10">

          <div className="text-center">

            <p className="text-sm font-bold tracking-[0.3em] text-cyan-400">
              WHY BLUEPHOENIX
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Everything You Need
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-400">
              A clean and modern gaming library that makes
              discovering and organizing games simple.
            </p>

          </div>


          <div className="mt-10 grid gap-5 md:grid-cols-3">

            <FeatureCard
              icon="🎮"
              title="Discover Games"
              text="Explore different games and find something new to play."
            />

            <FeatureCard
              icon="📚"
              title="Organize"
              text="Keep your favorite games organized in your collection."
            />

            <FeatureCard
              icon="⚡"
              title="Easy to Use"
              text="Enjoy a simple interface designed for quick exploration."
            />

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-6">

        <div className="relative overflow-hidden rounded-2xl border! border-cyan-500/30! bg-linear-to-r from-[#061522] to-[#071b2d] p-8 text-center md:p-12">

          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-cyan-500/10 blur-3xl" />

          <div className="relative">

            <h2 className="text-3xl font-bold md:text-4xl">
              Ready to Explore?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-gray-400">
              Start discovering games and build your personal
              collection today.
            </p>

            <Link
              to="/products"
              className="mt-7 inline-flex items-center rounded-xl border! border-cyan-400/40! bg-linear-to-r from-cyan-500 to-blue-600 px-7 py-3 font-bold text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300! hover:shadow-cyan-400/30"
            >
              Start Exploring
              <span className="ml-2">→</span>
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
}


/* ================= FEATURE ================= */

function Feature({ text }) {
  return (
    <div className="flex items-center gap-3">

      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500/10 text-sm text-cyan-400">
        ✓
      </div>

      <span className="text-sm text-gray-300">
        {text}
      </span>

    </div>
  );
}


/* ================= FEATURE CARD ================= */

function FeatureCard({ icon, title, text }) {
  return (
    <div className="rounded-xl border! border-cyan-500/20! bg-[#020914]/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/60! hover:bg-cyan-500/5">

      <div className="flex h-12 w-12 items-center justify-center rounded-xl border! border-cyan-500/20! bg-cyan-500/10 text-xl">
        {icon}
      </div>

      <h3 className="mt-5 text-lg font-bold">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-gray-400">
        {text}
      </p>

    </div>
  );
}