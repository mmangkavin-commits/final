import { Link } from "react-router";

export default function SecondGameCard({
  game,
  isSaved,
  onCollection,
}) {
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
      {/* IMAGE */}
      <div className="relative h-48 overflow-hidden">

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

        {/* Image overlay */}
        <div
          className="
            absolute
            inset-0
            bg-linear-to-t
            from-[#061522]
            via-transparent
            to-transparent
            opacity-90
          "
        />

        {/* BADGE */}
        {game.badge && (
          <span
            className="
              absolute
              left-3
              top-3
              rounded-lg
              bg-red-500
              px-2.5
              py-1
              text-[9px]
              font-bold
              uppercase
              tracking-wider
              text-white
              shadow-lg
            "
          >
            {game.badge}
          </span>
        )}

        {/* SAVE BUTTON */}
        <button
          type="button"
          onClick={() => onCollection(game.id)}
          title={
            isSaved
              ? "Remove from collection"
              : "Save to collection"
          }
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
            backdrop-blur-md
            transition-all
            duration-200
          "
          style={{
            border: isSaved
              ? "1px solid rgba(34, 211, 238, 0.75)"
              : "1px solid rgba(25, 174, 210, 0.35)",

            backgroundColor: isSaved
              ? "rgba(8, 105, 125, 0.65)"
              : "rgba(3, 20, 32, 0.88)",

            color: isSaved
              ? "#67e8f9"
              : "#9fb3c1",

            borderRadius: "12px",

            boxShadow: isSaved
              ? "0 0 14px rgba(34, 211, 238, 0.18)"
              : "none",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2a1 1 0 0 1 1-1z" />
          </svg>
        </button>
      </div>

      {/* GAME INFO */}
      <div className="p-4">

        {/* Name */}
        <h3 className="truncate text-base font-bold text-white">
          {game.name}
        </h3>

        {/* Genre */}
        <p className="mt-1 text-[11px] text-[#71899a]">
          {game.genre}

          <span className="mx-1.5 text-[#294354]">
            •
          </span>

          {game.type}
        </p>

        {/* BOTTOM */}
        <div className="mt-5 flex items-center justify-between">

          {/* Rating */}
          <span className="flex items-center gap-1 text-xs font-semibold text-yellow-400">
            ★ {game.rating}
          </span>

          {/* VIEW GAME */}
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
  );
}