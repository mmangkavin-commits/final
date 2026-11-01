export default function StatsCard({ stat }) {
  return (
    <div
      className="
        group
        flex items-center gap-4
        rounded-2xl
        border! border-cyan-500/20!
        bg-[#061522]/80
        p-6
        backdrop-blur-sm
        transition-all duration-300

        hover:-translate-y-1
        hover:border-cyan-400/50
        hover:bg-[#071b2b]
        hover:shadow-[0_0_25px_rgba(34,211,238,0.12)]
      "
    >
      {/* Icon */}
      <div
        className="
          flex h-12 w-12 shrink-0
          items-center justify-center
          rounded-xl
          bg-cyan-500/10
          text-2xl
          transition-all duration-300

          group-hover:bg-cyan-400/20
          group-hover:shadow-[0_0_15px_rgba(34,211,238,0.15)]
        "
      >
        {stat.icon}
      </div>

      {/* Information */}
      <div>
        <h3 className="m-0 text-2xl font-bold text-white">
          {stat.number}
        </h3>

        <p className="m-0 mt-1 text-sm text-gray-400">
          {stat.label}
        </p>
      </div>
    </div>
  );
}