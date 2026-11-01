import GameCard from "../ui/GameCard";
import { useNavigate } from "react-router";

const games = [
  {
    name: "Wuthering Waves",
    genre: "RPG",
    type: "Open World",
    rating: "4.8",
    image:
      "https://i.pinimg.com/1200x/7f/be/27/7fbe27ac00cade5118f838587d375aa7.jpg",
    badge: "HOT",
  },
  {
    name: "Genshin Impact",
    genre: "RPG",
    type: "Adventure",
    rating: "4.7",
    image:
      "https://i.pinimg.com/1200x/50/15/7f/50157f44af0460427174fe5c5ffa23e9.jpg",
    badge: "NEW",
  },
  {
    name: "Mobile legends",
    genre: "FPS",
    type: "MOBA",
    rating: "5.0",
    image:
      "https://i.pinimg.com/736x/8e/06/ba/8e06badd1eb2dddf88969ee83ced5c6b.jpg",
    badge: "HOT",
  },
  {
    name: "Minecraft",
    genre: "Sandbox",
    type: "Survival",
    rating: "4.9",
    image:
      "https://i.pinimg.com/1200x/bd/b9/34/bdb9348aff8528434791c541589a8e0c.jpg",
    badge: "",
  },
  {
    name: "FreeFire",
    genre: "RPG",
    type: "Turn-based",
    rating: "4.8",
    image:
      "https://i.pinimg.com/1200x/2c/2a/0e/2c2a0ee607b09c77cf9a03e627dcfe6b.jpg",
    badge: "",
  },
  {
    name: "Black Myth Wukong",
    genre: "FPS",
    type: "Action",
    rating: "4.6",
    image:
      "https://i.pinimg.com/1200x/94/a0/05/94a005143cb5c8cd9bd7beac50bab928.jpg",
    badge: "",
  },
];

export default function FeaturedGamesSection() {
  const navigate = useNavigate();
  return (
    <section className="bg-[#020914] px-6 py-8">

      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="mb-6 flex items-end justify-between">

          <div>

            <div className="flex items-center gap-3">

              <span className="h-7 w-1 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]"></span>

              <h2 className="text-2xl font-bold text-white md:text-3xl">
                Featured Games
              </h2>

            </div>

            <p className="mt-2 text-gray-400">
              Discover the most popular and highly rated games right now.
            </p>

          </div>

          <button type="button"
              onClick={() => navigate("/products")} className="hidden text-sm font-semibold text-cyan-400 transition hover:text-cyan-300 md:block">
            View All →
          </button>

        </div>

        {/* Game Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">

          {games.map((game) => (
            <GameCard
              key={game.name}
              game={game}
            />
          ))}

        </div>

      </div>

    </section>
  );
}