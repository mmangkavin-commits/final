import { useMemo, useState } from "react";
import { Link } from "react-router";

import game from "../component/base/layouts/game.png";
import games from "../Data/Game";

import {
  getCollection,
  toggleCollection,
} from "../component/collection";

export default function Collection() {
  const [search, setSearch] = useState("");

  const [collection, setCollection] = useState(
    getCollection()
  );

  // Get saved games
  const savedGames = useMemo(() => {
    return games.filter((game) =>
      collection.includes(game.id)
    );
  }, [collection]);

  // Search saved games
  const filteredGames = savedGames.filter((game) =>
    game.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  // Remove game
  const handleRemove = (gameId) => {
    const updated = toggleCollection(gameId);
    setCollection(updated);
  };

  return (
    <div className="min-h-screen bg-[#020914] text-white">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="
          relative
          h-87.5
          overflow-hidden
        "
        style={{
          borderBottom: "1px solid rgba(11, 45, 65, 0.8)",
        }}
      >

        {/* Phoenix Background */}
        <div
          className="
            absolute
            inset-0
            bg-size-[100%_auto]
            bg-top
            bg-no-repeat
            opacity-90
          "
          style={{
            backgroundImage: `url(${game})`,
          }}
        />

        {/* Dark Gradient */}
        <div
          className="
            absolute
            inset-0
            bg-linear-to-r
            from-[#020914]/95
            via-[#020914]/60
            to-[#020914]/15
          "
        />

        {/* Cyan Atmosphere */}
        <div className="absolute inset-0 bg-cyan-500/5" />

        {/* Bottom Fade */}
        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-20
            bg-linear-to-t
            from-[#020914]
            to-transparent
          "
        />

        {/* Content */}
        <div className="relative mx-auto max-w-7xl px-6 py-20">

          {/* Label */}
          <div
            className="
              mb-5
              inline-flex
              items-center
              gap-2
              rounded-xl
              bg-[#061522]/80
              px-4
              py-2
              text-sm
              font-medium
              text-cyan-400
              backdrop-blur-sm
            "
            style={{
              border: "1px solid rgba(11, 45, 65, 0.9)",
            }}
          >
            <span className="h-2 w-2 rounded-full bg-cyan-400" />

            MY COLLECTION
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            My{" "}
            <span className="text-cyan-400">
              Collection
            </span>
          </h1>

          {/* Description */}
          <p className="mt-4 max-w-2xl text-base leading-7 text-gray-400">
            Keep track of the games you love and want to play.
          </p>

        </div>
      </section>


      {/* =====================================================
          COLLECTION
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-6 py-12">

        {/* Header */}
        <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

          <div>
            <h2 className="text-2xl font-bold">
              Saved Games
            </h2>

            <p className="mt-1 text-sm text-[#71899a]">
              {savedGames.length}{" "}
              {savedGames.length === 1
                ? "game"
                : "games"}{" "}
              in your collection
            </p>
          </div>


          {/* Search */}
          <div className="relative w-full md:w-80">

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="
                absolute
                left-4
                top-1/2
                -translate-y-1/2
                text-[#5c7485]
              "
            >
              <path d="M11 6a5 5 0 1 1-10 0 5 5 0 0 1 10 0m-1.293 4.707a1 1 0 0 1 1.414 0l3.5 3.5a1 1 0 0 1-1.414 1.414l-3.5-3.5a1 1 0 0 1 0-1.414" />
            </svg>

            <input
              type="text"
              placeholder="Search your collection..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="
                w-full
                rounded-xl
                bg-[#061522]
                py-3
                pl-11
                pr-4
                text-sm
                text-white
                outline-none
                placeholder:text-[#5c7485]
                transition
                focus:ring-1
                focus:ring-cyan-500/30
              "
              style={{
                border: "1px solid rgba(11, 45, 65, 0.9)",
              }}
            />

          </div>

        </div>


        {/* =====================================================
            EMPTY STATE
        ===================================================== */}

        {filteredGames.length === 0 ? (

          <div
            className="
              flex
              min-h-105
              flex-col
              items-center
              justify-center
              rounded-2xl
              bg-[#061522]/60
              px-6
              text-center
            "
            style={{
              border: "1px solid rgba(11, 45, 65, 0.8)",
            }}
          >

            {/* Icon */}
            <div
              className="
                mb-6
                flex
                h-20
                w-20
                items-center
                justify-center
                rounded-2xl
                bg-cyan-400/10
                text-cyan-400
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="38"
                height="38"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12.5a.5.5 0 0 1-.777.416L8 11.101l-5.223 3.815A.5.5 0 0 1 2 14.5z" />
              </svg>
            </div>

            <h3 className="text-2xl font-bold">
              {search
                ? "No Games Found"
                : "Your Collection is Empty"}
            </h3>

            <p className="mt-3 max-w-md text-[#71899a]">
              {search
                ? "Try searching for another game in your collection."
                : "You haven't saved any games yet. Explore our games and save your favorites to see them here."}
            </p>

            {/* Explore Button */}
            {!search && (
              <Link
                to="/games"
                style={{
                  textDecoration: "none",
                }}
                className="
                  mt-7
                  inline-flex
                  items-center
                  justify-center
                  rounded-xl
                  bg-linear-to-r
                  from-cyan-500
                  to-blue-500
                  px-6
                  py-3
                  font-semibold
                  text-white
                  shadow-lg
                  shadow-cyan-500/15
                  transition
                  hover:-translate-y-1
                  hover:shadow-cyan-500/25
                "
              >
                Explore Games
              </Link>
            )}

          </div>

        ) : (

          /* =====================================================
             GAME GRID
          ===================================================== */

          <div
            className="
              grid
              gap-6
              sm:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-4
            "
          >

            {filteredGames.map((game) => (

              <div
                key={game.id}
                className="
                  group
                  overflow-hidden
                  rounded-2xl
                  bg-[#061522]
                  shadow-[0_8px_25px_rgba(0,0,0,0.3)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                "
                style={{
                  border:
                    "1px solid rgba(11, 45, 65, 0.8)",
                }}
              >

                {/* =================================================
                    IMAGE
                ================================================= */}

                <div className="relative h-52 overflow-hidden">

                  <img
                    src={game.image}
                    alt={game.name}
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-105
                    "
                  />

                  {/* Image Overlay */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-linear-to-t
                      from-[#061522]
                      via-transparent
                      to-transparent
                    "
                  />


                  {/* =================================================
                      REMOVE BUTTON
                  ================================================= */}

                  <button
                    type="button"
                    onClick={() =>
                      handleRemove(game.id)
                    }
                    title="Remove from collection"
                    className="
                      absolute
                      right-3
                      top-3
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-xl
                      bg-[#061522]/90
                      text-[#9fb3c1]
                      backdrop-blur-md
                      transition-all
                      duration-200
                      hover:bg-red-500/10
                      hover:text-red-400
                    "
                    style={{
                      border:
                        "1px solid rgba(25, 174, 210, 0.35)",
                    }}
                  >

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.5 2.5a.5.5 0 0 1 .707 0L8 7.293 12.793 2.5a.5.5 0 0 1 .707.707L8.707 8l4.793 4.793a.5.5 0 0 1-.707.707L8 8.707 3.207 13.5a.5.5 0 0 1-.707-.707L7.293 8 2.5 3.207a.5.5 0 0 1 0-.707" />
                    </svg>

                  </button>

                </div>


                {/* =================================================
                    GAME INFO
                ================================================= */}

                <div className="p-4">

                  {/* Name */}
                  <h3 className="truncate text-base font-bold text-white">
                    {game.name}
                  </h3>

                  {/* Genre */}
                  <p className="mt-1 text-[11px] text-[#71899a]">
                    {game.genre}

                    {game.type && (
                      <>
                        <span className="mx-1.5 text-[#294354]">
                          •
                        </span>

                        {game.type}
                      </>
                    )}
                  </p>


                  {/* Bottom */}
                  <div className="mt-5 flex items-center justify-between">

                    {/* Rating */}
                    <span
                      className="
                        flex
                        items-center
                        gap-1
                        text-xs
                        font-semibold
                        text-yellow-400
                      "
                    >
                      ★ {game.rating}
                    </span>


                    {/* View Details */}
                    <Link
                      to={`/games/${game.id}`}
                      style={{
                        textDecoration: "none",
                      }}
                      className="
                        inline-flex
                        items-center
                        justify-center
                        rounded-xl
                        bg-linear-to-r
                        from-[#08b9d8]
                        to-[#3478ee]
                        px-4
                        py-2
                        text-[11px]
                        font-bold
                        tracking-wide
                        text-white
                        shadow-[0_5px_15px_rgba(8,185,216,0.15)]
                        transition-all
                        duration-200
                        hover:from-[#19c9e8]
                        hover:to-[#4388f5]
                        hover:text-white
                        active:scale-95
                      "
                    >
                      View Game
                      <span className="ml-1.5">
                        →
                      </span>
                    </Link>

                  </div>

                </div>

              </div>

            ))}

          </div>

        )}

      </section>

    </div>
  );
}