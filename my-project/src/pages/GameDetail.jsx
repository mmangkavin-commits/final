import { useParams, Link } from "react-router";
import games from "../Data/Game";

export default function GameDetail() {
  const { id } = useParams();

  const game = games.find((g) => String(g.id) === String(id));

  /* =====================================================
     GAME NOT FOUND
  ===================================================== */

  if (!game) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#020914] px-6 text-white">
        <div className="text-center">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border-[rgba(34,211,238,0.12)]! bg-[#061522] text-2xl text-cyan-400">
            ?
          </div>

          <h1 className="text-3xl font-bold">
            Game Not Found
          </h1>

          <p className="mt-2 text-gray-500">
            The game you are looking for doesn't exist.
          </p>

          <Link
            to="/products"
            className="
              mt-6 inline-flex items-center gap-2
              rounded-xl
              border-[rgba(34,211,238,0.20)]!
              bg-cyan-400/5
              px-5 py-2.5
              text-sm font-semibold
              text-cyan-400
              no-underline
              transition-all duration-300
              hover:border-[rgba(34,211,238,0.40)]!
              hover:bg-cyan-400/10
              hover:text-cyan-300
              hover:shadow-[0_0_20px_rgba(34,211,238,0.10)]
            "
          >
            ← Back to Games
          </Link>
        </div>
      </div>
    );
  }

  /* =====================================================
     SIMILAR GAMES
  ===================================================== */

  const similarGames = games.filter(
    (g) => g.id !== game.id && g.genre === game.genre
  );

  return (
    <div className="min-h-screen bg-[#020914] text-white">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-6 py-8">

        {/* Back Button */}
        <Link
          to="/products"
          className="
            mb-6 inline-flex items-center gap-2
            text-sm font-medium
            text-gray-500
            no-underline
            transition
            hover:text-cyan-400
          "
        >
          ← Back to Games
        </Link>

        <div className="grid gap-8 lg:grid-cols-2">

          {/* =================================================
              GAME IMAGE
          ================================================= */}

          <div
            className="
              group relative overflow-hidden
              rounded-2xl
              border-[rgba(34,211,238,0.12)]!
              bg-[#061522]
              shadow-lg shadow-black/20
              transition-all duration-300
              hover:border-[rgba(34,211,238,0.35)]!
              hover:shadow-[0_0_30px_rgba(34,211,238,0.08)]
            "
          >
            <div className="relative h-100 overflow-hidden">

              <img
                src={game.image}
                alt={game.name}
                className="
                  h-full w-full object-cover
                  transition duration-700
                  group-hover:scale-105
                "
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-[#020914] via-[#020914]/10 to-transparent" />

              {/* Cyan Atmosphere */}
              <div className="absolute inset-0 bg-cyan-500/5" />

              {/* Badge */}
              {game.badge && (
                <span
                  className="
                    absolute left-4 top-4
                    rounded-full
                    border-red-400/20!
                    bg-red-500/90
                    px-3 py-1
                    text-xs font-bold
                    text-white
                    shadow-lg shadow-red-500/10
                  "
                >
                  {game.badge}
                </span>
              )}

            </div>
          </div>

          {/* =================================================
              GAME DETAILS
          ================================================= */}

          <div className="flex flex-col justify-center">

            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Game Details
            </p>

            <h1 className="text-4xl font-black tracking-tight text-white md:text-5xl">
              {game.name}
            </h1>

            {/* Rating */}
            <div className="mt-5 flex items-center gap-3">

              <span className="text-sm tracking-wide text-yellow-400">
                ★★★★★
              </span>

              <span className="text-sm font-bold text-white">
                {game.rating}
              </span>

              <span className="text-sm text-gray-600">
                •
              </span>

              <span className="text-sm text-gray-500">
                {game.reviews
                  ? `${game.reviews} reviews`
                  : "No reviews"}
              </span>

            </div>

            {/* Tags */}
            <div className="mt-5 flex flex-wrap gap-2">

              <span
                className="
                  rounded-full
                  border-[rgba(34,211,238,0.18)]!
                  bg-cyan-400/5
                  px-3 py-1.5
                  text-xs font-medium
                  text-cyan-400
                "
              >
                {game.genre}
              </span>

              <span
                className="
                  rounded-full
                  border-[rgba(34,211,238,0.18)]!
                  bg-cyan-400/5
                  px-3 py-1.5
                  text-xs font-medium
                  text-cyan-400
                "
              >
                {game.type}
              </span>

            </div>

            {/* Description */}
            <p className="mt-6 max-w-xl text-sm leading-7 text-gray-400">
              {game.description || "No description available."}
            </p>

            {/* Add To Collection */}
            <button
              type="button"
              className="
                mt-7 inline-flex w-fit items-center gap-2
                rounded-3xl!
                border-[rgba(34,211,238,0.25)]!
                bg-linear-to-r from-cyan-500 to-blue-600
                px-6 py-3
                text-sm font-bold
                text-white
                shadow-lg shadow-cyan-500/10
                transition-all duration-300
                hover:-translate-y-0.5
                hover:border-[rgba(34,211,238,0.40)]!
                hover:from-cyan-400
                hover:to-blue-500
                hover:shadow-[0_0_25px_rgba(34,211,238,0.20)]
                active:translate-y-0
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2z" />
              </svg>

              Add to Collection
            </button>

          </div>
        </div>
      </section>

      {/* =====================================================
          GAME INFORMATION
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-6">

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">

          <Info
            title="Developer"
            value={game.developer}
          />

          <Info
            title="Publisher"
            value={game.publisher}
          />

          <Info
            title="Release Date"
            value={game.releaseDate}
          />

          <Info
            title="Platform"
            value={game.platform}
          />

          <Info
            title="Mode"
            value={game.mode}
          />

        </div>

      </section>

      {/* =====================================================
          ABOUT + SIMILAR GAMES
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-6 py-8">

        <div className="grid gap-5 lg:grid-cols-2">

          {/* =================================================
              ABOUT THIS GAME
          ================================================= */}

          <div
            className="
              rounded-2xl
              border-[rgba(34,211,238,0.10)]!
              bg-[#061522]/70
              p-7
              transition-all duration-300
              hover:border-[rgba(34,211,238,0.22)]!
              hover:bg-[#061522]/90
            "
          >

            <div className="mb-6 flex items-center gap-3">

              <div className="h-9 w-1 rounded-full bg-cyan-400" />

              <h2 className="text-3xl font-bold text-white">
                About This Game
              </h2>

            </div>

            <p className="text-base leading-8 text-slate-400">
              {game.description || "No description available."}
            </p>

            {/* Features */}
            {(game.features || []).length > 0 && (
              <div className="mt-6 space-y-3">

                {game.features.map((feature) => (

                  <div
                    key={feature}
                    className="
                      flex items-center gap-3
                      rounded-lg
                      border-[rgba(34,211,238,0.06)]!
                      bg-[#020914]/40
                      px-3 py-2.5
                      text-sm text-gray-300
                    "
                  >

                    <span
                      className="
                        flex h-5 w-5
                        items-center justify-center
                        rounded-full
                        bg-cyan-400/10
                        text-xs
                        text-cyan-400
                      "
                    >
                      ✓
                    </span>

                    {feature}

                  </div>

                ))}

              </div>
            )}

          </div>

          {/* =================================================
              SIMILAR GAMES
          ================================================= */}

          <div
            className="
              rounded-2xl
              border-[rgba(34,211,238,0.10)]!
              bg-[#061522]/70
              p-6
              transition-all duration-300
              hover:border-[rgba(34,211,238,0.22)]!
            "
          >

            <div className="mb-5 flex items-center justify-between">

              <h2 className="text-3xl font-bold text-white">
                Similar Games
              </h2>

              <span className="text-xs text-gray-600">
                {similarGames.length}
              </span>

            </div>

            <div className="space-y-3">

              {similarGames.slice(0, 3).map((similar) => (

                <Link
                  key={similar.id}
                  to={`/games/${similar.id}`}
                  className="
                    group flex gap-3
                    rounded-xl
                    border-transparent!
                    p-2
                    no-underline
                    transition-all duration-300
                    hover:border-[rgba(34,211,238,0.10)]!
                    hover:bg-cyan-500/5
                  "
                >

                  <img
                    src={similar.image}
                    alt={similar.name}
                    className="
                      h-16 w-20
                      rounded-lg
                      object-cover
                      transition
                      group-hover:scale-[1.02]
                    "
                  />

                  <div className="min-w-0">

                    <h3 className="truncate text-base font-semibold text-white transition group-hover:text-cyan-400">
                      {similar.name}
                    </h3>

                    <p className="mt-1 text-xs text-gray-500">
                      {similar.genre}
                    </p>

                    <p className="mt-1 text-xs font-semibold text-yellow-400">
                      ★ {similar.rating}
                    </p>

                  </div>

                </Link>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          SCREENSHOTS
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-6 pb-12">

        <div className="mb-5 flex items-center gap-3">

          <div className="h-8 w-1 rounded-full bg-cyan-400" />

          <h2 className="text-2xl font-bold text-white">
            Screenshots
          </h2>

        </div>

        <div className="grid gap-4 md:grid-cols-3">

          {(game.screenshots || [game.image]).map(
            (image, index) => (

              <div
                key={index}
                className="
                  group overflow-hidden
                  rounded-2xl
                  border-[rgba(34,211,238,0.10)]!
                  bg-[#061522]
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-[rgba(34,211,238,0.30)]!
                  hover:shadow-[0_0_25px_rgba(34,211,238,0.08)]
                "
              >

                <img
                  src={image}
                  alt={`${game.name} screenshot`}
                  className="
                    h-56 w-full
                    object-cover
                    transition duration-500
                    group-hover:scale-105
                  "
                />

              </div>

            )
          )}

        </div>

      </section>

    </div>
  );
}

/* =========================================================
   INFO CARD
========================================================= */

function Info({ title, value }) {
  return (
    <div
      className="
        rounded-xl
        border-[rgba(34,211,238,0.10)]!
        bg-[#061522]/70
        p-4
        transition-all duration-300
        hover:border-[rgba(34,211,238,0.25)]!
        hover:bg-[#061522]
      "
    >

      <p className="text-[11px] font-medium uppercase tracking-wider text-gray-600">
        {title}
      </p>

      <p className="mt-2 truncate text-sm font-semibold text-gray-200">
        {value || "N/A"}
      </p>

    </div>
  );
}