export default function GameCard({ game }) {
  if (!game) {
    return null;
  }

  return (
    <div
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
        border: "1px solid rgba(11, 45, 65, 0.8)",
      }}
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">

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

        {/* Dark Overlay */}
        <div
          className="
            absolute
            inset-0
            bg-linear-to-t
            from-[#020914]
            via-transparent
            to-transparent
          "
        />

        {/* Badge */}
        {game.badge && (
          <span
            className="
              absolute
              left-3
              top-3
              rounded-lg
              bg-red-500
              px-3
              py-1
              text-xs
              font-bold
              text-white
              shadow-lg
            "
          >
            {game.badge}
          </span>
        )}

        {/* Rating */}
        {game.rating && (
          <div
            className="
              absolute
              right-3
              top-3
              rounded-lg
              bg-[#061522]/90
              px-3
              py-1
              text-xs
              font-semibold
              text-yellow-400
              backdrop-blur-sm
            "
          >
            ⭐ {game.rating}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">

        {/* Game Name */}
        <h3
          className="
            text-lg
            font-bold
            text-white
            transition-colors
            duration-200
            group-hover:text-cyan-400
          "
        >
          {game.name}
        </h3>

        {/* Genre / Type */}
        <div
          className="
            mt-2
            flex
            items-center
            gap-2
            text-sm
            text-[#71899a]
          "
        >
          <span>{game.genre}</span>

          <span className="text-[#294354]">
            •
          </span>

          <span>{game.type}</span>
        </div>

      </div>
    </div>
  );
}