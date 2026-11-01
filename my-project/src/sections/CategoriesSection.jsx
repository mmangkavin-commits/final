import { useNavigate } from "react-router";
import CategoryCard from "../ui/CategoryCard";

const categories = [
  {
    name: "Action",
    games: "120 games",
    icon: "",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "RPG",
    games: "98 games",
    icon: "",
    image:
      "https://i.pinimg.com/1200x/3a/29/b8/3a29b8827895c775a3d79f9a585f784d.jpg",
  },
  {
    name: "Adventure",
    games: "76 games",
    icon: "",
    image:
      "https://i.pinimg.com/736x/7c/46/e9/7c46e92be386cd9ccd0467559dbba79b.jpg",
  },
  {
    name: "Strategy",
    games: "54 games",
    icon: "",
    image:
      "https://i.pinimg.com/1200x/23/c6/e5/23c6e50e8b1b90cbc0c7a406dd03afa5.jpg",
  },
  {
    name: "Sports",
    games: "43 games",
    icon: "",
    image:
      "https://i.pinimg.com/736x/16/eb/41/16eb419c0b398c3e42d452af399c8839.jpg",
  },
  {
    name: "Puzzle",
    games: "32 games",
    icon: "",
    image:
      "https://i.pinimg.com/1200x/ac/87/c6/ac87c6f9f24ad30258b262946afa1a72.jpg",
  },
];

export default function CategoriesSection() {
  const navigate = useNavigate();

  return (
    <section className="bg-[#020914] px-6 pb-12 pt-6">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-6 flex items-end justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-7 w-1 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />

              <h2 className="text-2xl font-bold text-white md:text-3xl">
                Browse by Category
              </h2>
            </div>

            <p className="mt-2 text-gray-400">
              Find games by your favorite genres.
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate("/categories")}
            className="hidden text-sm font-semibold text-cyan-400 transition hover:text-cyan-300 md:block"
          >
            View All →
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6">
          {categories.map((category) => (
            <CategoryCard
              key={category.name}
              category={category}
            />
          ))}
        </div>

      </div>
    </section>
  );
}