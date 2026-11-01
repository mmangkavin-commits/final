import { useState } from "react";

import game from "../component/base/layouts/game.png";
import games from "../Data/Game";
import {
  getCollection,
  toggleCollection,
} from "../component/collection";

import SecondGameCard from "../ui/SecondGameCard";

export default function Games() {
  const [collection, setCollection] = useState(getCollection());

  const handleCollection = (gameId) => {
    const updatedCollection = toggleCollection(gameId);
    setCollection(updatedCollection);
  };

  return (
    <div className="min-h-screen bg-[#020914] text-white">

      {/* Header */}
      <section className="relative h-87.5 overflow-hidden border-b border-cyan-500/20">

        {/* Background */}
        <div
          className="absolute inset-0 bg-size-[100%_auto] bg-top bg-no-repeat opacity-90"
          style={{
            backgroundImage: `url(${game})`,
          }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-[#020914]/95 via-[#020914]/55 to-[#020914]/15" />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-[#020914] to-transparent" />

        {/* Header content */}
        <div className="relative mx-auto max-w-7xl px-6 py-20">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            All <span className="text-cyan-400">Games</span>
          </h1>

          <p className="mt-3 text-sm leading-6 text-gray-300">
            Browse your favorite games.
          </p>
        </div>
      </section>

      {/* Games */}
      <section className="mx-auto max-w-7xl px-6 py-8">

        {/* Top */}
        <div className="mb-6">
          <p className="text-xs text-gray-500">
            Showing{" "}
            <span className="font-semibold text-white">
              {games.length}
            </span>{" "}
            games
          </p>
        </div>

        {/* Game Grid */}
        {games.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {games.map((game) => (
              <SecondGameCard
                key={game.id}
                game={game}
                isSaved={collection.includes(game.id)}
                onCollection={handleCollection}
              />
            ))}
          </div>
        ) : (
          <div
            className="
              flex min-h-87.5
              flex-col items-center justify-center
              rounded-2xl
              border border-dashed border-cyan-500/20
              bg-[#061522]/40
            "
          >
            <div className="mb-4 text-4xl">🎮</div>

            <h3 className="text-lg font-bold">
              No games found
            </h3>

            <p className="mt-2 text-xs text-gray-500">
              There are no games available.
            </p>
          </div>
        )}

      </section>
    </div>
  );
}