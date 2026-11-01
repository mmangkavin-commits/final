import { useState } from "react";
import gamesData from "../Data/Game";

export default function AdminGames() {
  // =====================================================
  // USE GAMES FROM Game.js
  // =====================================================

  const [games, setGames] = useState(() =>
    gamesData.map((game) => ({
      ...game,
      category: game.genre,
      status: "Published",
    }))
  );

  const [showForm, setShowForm] = useState(false);

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");

  // =====================================================
  // ADD GAME
  // =====================================================

  function addGame(e) {
    e.preventDefault();

    if (!name.trim() || !category.trim()) {
      alert("Please fill in all fields.");
      return;
    }

    const newGame = {
      id: Date.now(),
      name: name.trim(),
      genre: category.trim(),
      category: category.trim(),
      type: "Game",
      rating: "0.0",
      image: "",
      status: "Published",
    };

    setGames((prevGames) => [...prevGames, newGame]);

    setName("");
    setCategory("");
    setShowForm(false);
  }

  // =====================================================
  // DELETE GAME
  // =====================================================

  function deleteGame(id) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this game?"
    );

    if (!confirmDelete) {
      return;
    }

    setGames((prevGames) =>
      prevGames.filter((game) => game.id !== id)
    );
  }

  return (
    <div>
      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-wider text-cyan-400">
            Management
          </p>

          <h1 className="mt-2 text-3xl font-black text-white">
            Games
          </h1>

          <p className="mt-2 text-gray-500">
            Manage all games on BluePhoenix.
          </p>
        </div>

        <button
          onClick={() => setShowForm(!showForm)}
          className="rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-black transition hover:bg-cyan-400"
        >
          + Add Game
        </button>
      </div>

      {/* =====================================================
          ADD GAME FORM
      ===================================================== */}

      {showForm && (
        <form
          onSubmit={addGame}
          className="mb-6 rounded-2xl border border-[#102536]! bg-[#061522] p-6"
        >
          <h2 className="mb-5 text-xl font-bold text-white">
            Add New Game
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {/* GAME NAME */}

            <input
              type="text"
              placeholder="Game name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="rounded-xl border border-[#102536]! bg-black/20 px-4 py-3 text-white outline-none placeholder:text-gray-600 focus:border-[#17364d]!"
            />

            {/* CATEGORY */}

            <input
              type="text"
              placeholder="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="rounded-xl border border-[#102536]! bg-black/20 px-4 py-3 text-white outline-none placeholder:text-gray-600 focus:border-[#17364d]!"
            />
          </div>

          <div className="mt-5 flex gap-3">
            {/* SAVE */}

            <button
              type="submit"
              className="rounded-lg bg-cyan-500 px-5 py-2 font-semibold text-black transition hover:bg-cyan-400"
            >
              Save Game
            </button>

            {/* CANCEL */}

            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="rounded-lg border border-[#102536]! px-5 py-2 text-gray-400 transition hover:bg-[#081c2b] hover:text-white"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      {/* =====================================================
          GAME TABLE
      ===================================================== */}

      <div className="overflow-hidden rounded-2xl border border-[#102536]! bg-[#061522]/80">
        <div className="overflow-x-auto">
          <table className="w-full">
            {/* =================================================
                TABLE HEADER
            ================================================= */}

            <thead className="border-b border-[#102536]! bg-black/20">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                  Game
                </th>

                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                  Category
                </th>

                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                  Rating
                </th>

                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                  Status
                </th>

                <th className="px-6 py-4 text-right text-sm font-medium text-gray-500">
                  Action
                </th>
              </tr>
            </thead>

            {/* =================================================
                TABLE BODY
            ================================================= */}

            <tbody>
              {games.map((game) => (
                <tr
                  key={game.id}
                  className="border-b border-[#102536]! transition hover:bg-white/2"
                >
                  {/* GAME */}

                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      {/* GAME IMAGE */}

                      {game.image ? (
                        <img
                          src={game.image}
                          alt={game.name}
                          className="h-11 w-11 rounded-xl border border-[#102536]! object-cover"
                        />
                      ) : (
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#102536]! bg-[#081c2b] text-lg">
                          🎮
                        </div>
                      )}

                      {/* GAME NAME */}

                      <div>
                        <p className="font-semibold text-white">
                          {game.name}
                        </p>

                        <p className="mt-1 text-xs text-gray-600">
                          ID: {game.id}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* CATEGORY */}

                  <td className="px-6 py-5 text-gray-400">
                    {game.genre || game.category || "Unknown"}
                  </td>

                  {/* RATING */}

                  <td className="px-6 py-5">
                    <span className="text-sm text-yellow-400">
                      ⭐ {game.rating || "0.0"}
                    </span>
                  </td>

                  {/* STATUS */}

                  <td className="px-6 py-5">
                    <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs text-green-400">
                      {game.status}
                    </span>
                  </td>

                  {/* DELETE */}

                  <td className="px-6 py-5 text-right">
                    <button
                      onClick={() => deleteGame(game.id)}
                      className="border rounded-full! border-red-500/500! px-3 py-2 text-sm text-red-400 transition hover:bg-red-500/10"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* =====================================================
          EMPTY STATE
      ===================================================== */}

      {games.length === 0 && (
        <div className="mt-4 rounded-2xl border border-[#102536]! bg-[#061522] p-10 text-center">
          <div className="text-4xl">
            🎮
          </div>

          <h2 className="mt-3 text-lg font-bold text-white">
            No games found
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Add a new game to your collection.
          </p>
        </div>
      )}
    </div>
  );
}