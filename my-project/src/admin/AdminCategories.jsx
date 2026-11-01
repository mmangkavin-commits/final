import { useState } from "react";

export default function AdminCategories() {
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: "RPG",
      count: 32,
    },
    {
      id: 2,
      name: "Adventure",
      count: 76,
    },
    {
      id: 3,
      name: "Action",
      count: 45,
    },
    {
      id: 4,
      name: "MOBA",
      count: 18,
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");

  function addCategory(e) {
    e.preventDefault();

    if (!name.trim()) {
      alert("Please enter a category name.");
      return;
    }

    const newCategory = {
      id: Date.now(),
      name,
      count: 0,
    };

    setCategories([...categories, newCategory]);

    setName("");
    setShowForm(false);
  }

  function deleteCategory(id) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this category?"
    );

    if (!confirmDelete) {
      return;
    }

    setCategories(
      categories.filter((category) => category.id !== id)
    );
  }

  return (
    <div>

      {/* HEADER */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        <div>
          <p className="text-sm uppercase tracking-wider text-cyan-400">
            Management
          </p>

          <h1 className="mt-2 text-3xl font-black text-white">
            Categories
          </h1>

          <p className="mt-2 text-gray-500">
            Manage game categories.
          </p>
        </div>

        <button
          onClick={() => setShowForm(!showForm)}
          className="rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-black transition hover:bg-cyan-400"
        >
          + Add Category
        </button>

      </div>

      {/* ADD CATEGORY */}
      {showForm && (
        <form
          onSubmit={addCategory}
          className="mb-6 rounded-2xl border border-cyan-500/20 bg-[#061522] p-6"
        >

          <h2 className="mb-5 text-xl font-bold text-white">
            Add Category
          </h2>

          <input
            type="text"
            placeholder="Category name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-gray-600 focus:border-cyan-500"
          />

          <div className="mt-5 flex gap-3">

            <button
              type="submit"
              className="rounded-lg bg-cyan-500 px-5 py-2 font-semibold text-black hover:bg-cyan-400"
            >
              Save Category
            </button>

            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="rounded-lg border border-white/10 px-5 py-2 text-gray-400 hover:text-white"
            >
              Cancel
            </button>

          </div>

        </form>
      )}

      {/* CATEGORY CARDS */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

        {categories.map((category) => (
          <div
            key={category.id}
            className="rounded-2xl border border-cyan-500/15 bg-[#061522]/80 p-6 transition hover:border-cyan-500/40"
          >

            <div className="flex items-start justify-between">

              <div>

                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-xl">
                  🗂️
                </div>

                <h2 className="text-xl font-bold text-white">
                  {category.name}
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                  {category.count} games
                </p>

              </div>

            </div>

            <button
              onClick={() => deleteCategory(category.id)}
              className="mt-6 w-full rounded-lg border border-red-500/20 px-4 py-2 text-sm text-red-400 transition hover:bg-red-500/10"
            >
              Delete
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}