export default function CategoryCard({ category }) {
  if (!category) {
    return null;
  }

  return (
    <div
      className="
        group
        relative
        h-32
        overflow-hidden
        rounded-2xl
        bg-[#061522]
        shadow-[0_8px_25px_rgba(0,0,0,0.25)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-[0_10px_30px_rgba(0,0,0,0.35)]
      "
      style={{
        border: "1px solid rgba(11, 45, 65, 0.8)",
      }}
    >
      {/* Background Image */}
      <img
        src={category.image}
        alt={category.name}
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          transition-transform
          duration-500
          group-hover:scale-110
        "
      />

      {/* Dark Overlay */}
      <div
        className="
          absolute
          inset-0
          bg-[#020914]/75
          transition-all
          duration-300
          group-hover:bg-[#020914]/60
        "
      />

      {/* Content */}
      <div
        className="
          relative
          z-10
          flex
          h-full
          flex-col
          justify-end
          p-4
        "
      >
        {/* Icon */}
        {category.icon && (
          <div className="text-2xl">
            {category.icon}
          </div>
        )}

        {/* Category Name */}
        <h3
          className="
            mt-1
            font-bold
            text-white
            transition-colors
            duration-200
            group-hover:text-cyan-400
          "
        >
          {category.name}
        </h3>

        {/* Games Count */}
        <p className="text-xs text-[#71899a]">
          {category.games}
        </p>
      </div>
    </div>
  );
}