import { useState } from "react";

import game from "../component/base/layouts/game.png";
import games from "../Data/Game";

import {
  getCollection,
  toggleCollection,
} from "../component/collection";

import SecondGameCard from "../ui/SecondGameCard";

const categories = [
  {
    id: 1,
    name: "Action",
    icon: "⚔",
    description: "Fast-paced games full of combat and adventure.",
    count: 120,
  },
  {
    id: 2,
    name: "RPG",
    icon: "🎮",
    description: "Explore worlds, build characters, and complete quests.",
    count: 98,
  },
  {
    id: 3,
    name: "Adventure",
    displayName: "Adv",
    icon: "🗺",
    description: "Discover new worlds and experience amazing stories.",
    count: 76,
  },
  {
    id: 4,
    name: "Strategy",
    icon: "♟",
    description: "Plan your moves and outsmart your opponents.",
    count: 54,
  },
  {
    id: 5,
    name: "Sports",
    icon: "🏆",
    description: "Compete in your favorite sports and tournaments.",
    count: 43,
  },
  {
    id: 6,
    name: "Racing",
    icon: "🏎️",
    description: "Race fast cars and compete for the fastest time.",
    count: 25,
  },
  {
    id: 7,
    name: "Puzzle",
    icon: "🧩",
    description: "Challenge your brain with creative puzzles.",
    count: 32,
  },
];

export default function Categories() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  // Collection
  const [collection, setCollection] = useState(getCollection());

  // Filter games
  const filteredGames = games.filter((game) => {
    const matchesCategory =
      selectedCategory === "All" ||
      game.genre === selectedCategory;

    const matchesSearch = game.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  // Save / remove game
  const handleCollection = (gameId) => {
    const updatedCollection = toggleCollection(gameId);
    setCollection(updatedCollection);
  };

  return (
    <div className="min-h-screen bg-[#020914] text-white">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <section className="relative h-87.5 overflow-hidden border-b border-cyan-500/20">

        {/* Background image */}
        <div
          className="absolute inset-0 bg-size-[100%_auto] bg-top bg-no-repeat opacity-90"
          style={{
            backgroundImage: `url(${game})`,
          }}
        />

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-[#020914]/95 via-[#020914]/60 to-[#020914]/15" />

        {/* Blue atmosphere */}
        <div className="absolute inset-0 bg-cyan-500/5" />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-[#020914] to-transparent" />

        {/* Content */}
        <div className="relative mx-auto max-w-7xl px-6 py-20">

          <div className="max-w-2xl">

            {/* Label */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium tracking-wide text-cyan-400">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              GAME CATEGORIES
            </div>

            {/* Title */}
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Browse{" "}
              <span className="text-cyan-400">
                Categories
              </span>
            </h1>

            {/* Description */}
            <p className="mt-4 max-w-xl text-base leading-7 text-gray-300">
              Explore games by genre and find your next favorite adventure.
            </p>

          </div>

        </div>
      </section>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <main className="mx-auto max-w-7xl px-6 py-10">

        {/* =====================================================
            TOP BAR
        ===================================================== */}

        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <h2 className="text-2xl font-bold">
              Game Categories
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Choose a category to explore games.
            </p>
          </div>

          {/* Search */}
          <div className="relative w-full sm:w-72">

            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
              ⌕
            </span>

            <input
              type="text"
              placeholder="Search games..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="
                w-full
                rounded-xl
                border
                border-cyan-500/20
                bg-[#061522]
                py-3
                pl-9
                pr-4
                text-xs
                text-white
                placeholder-gray-600
                outline-none
                transition
                focus:border-cyan-400/60
              "
            />

          </div>

        </div>

        {/* =====================================================
            CATEGORY CARDS
        ===================================================== */}

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6">

          {/* ALL */}
          <button
            onClick={() => setSelectedCategory("All")}
            className={`category-card group rounded-2xl p-5 text-center transition duration-300 ${
              selectedCategory === "All"
                ? "bg-cyan-400/10 shadow-lg shadow-cyan-500/10"
                : "bg-[#061522] hover:-translate-y-1"
            }`}
          >
            <div
              className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl text-2xl transition ${
                selectedCategory === "All"
                  ? "bg-cyan-400 text-[#020914]"
                  : "bg-cyan-400/10 text-cyan-400 group-hover:bg-cyan-400/20"
              }`}
            >
              ✦
            </div>

            <h3 className="font-semibold">
              All Games
            </h3>

            <p className="mt-1 text-xs text-gray-500">
              {games.length} games
            </p>
          </button>

          {/* CATEGORIES */}
          {categories.map((category) => {
            const active =
              selectedCategory === category.name;

            return (
              <button
                key={category.id}
                onClick={() =>
                  setSelectedCategory(category.name)
                }
                className={`category-card group rounded-2xl p-5 text-center transition duration-300 ${
                  active
                    ? "bg-cyan-400/10 shadow-lg shadow-cyan-500/10"
                    : "bg-[#061522] hover:-translate-y-1"
                }`}
              >
                <div
                  className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl text-2xl transition ${
                    active
                      ? "bg-cyan-400 text-[#020914]"
                      : "bg-cyan-400/10 text-cyan-400 group-hover:bg-cyan-400/20"
                  }`}
                >
                  {category.icon}
                </div>

                <h3 className="font-semibold">
                  {category.displayName || category.name}
                </h3>

                <p className="mt-1 text-xs text-gray-500">
                  {category.count} games
                </p>
              </button>
            );
          })}
        </div>

        {/* =====================================================
            SELECTED CATEGORY INFO
        ===================================================== */}

        <div className="mt-12 flex items-end justify-between border-b border-cyan-500/20 pb-4">

          <div>

            <p className="mb-1 text-xs uppercase tracking-widest text-cyan-400">
              Selected Category
            </p>

            <h2 className="text-2xl font-bold">
              {selectedCategory === "All"
                ? "All Games"
                : selectedCategory === "Adventure"
                  ? "Adv"
                  : selectedCategory}
            </h2>

          </div>

          <p className="text-xs text-gray-500">
            {filteredGames.length} games found
          </p>

        </div>

        {/* =====================================================
            GAME CARDS
        ===================================================== */}

        {filteredGames.length > 0 ? (

          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            {filteredGames.map((game) => (

              <SecondGameCard
                key={game.id}
                game={game}
                isSaved={collection.includes(game.id)}
                onCollection={handleCollection}
              />

            ))}

          </div>

        ) : (

          /* NO RESULTS */
          <div className="mt-6 rounded-2xl border border-cyan-500/10 bg-[#061522]/50 py-20 text-center">

            <div className="text-5xl opacity-40">
              🎮
            </div>

            <h3 className="mt-4 text-lg font-semibold">
              No games found
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Try another category or search.
            </p>

          </div>

        )}

      </main>
    </div>
  );
}