import { Link } from "react-router";
import games from "../Data/Game";

export default function AdminDashboard() {
  // ==========================================
  // DASHBOARD STATS
  // ==========================================

  const stats = [
    {
      title: "Total Games",
      value: "120",
      change: "+12.5%",
      icon: "🎮",
    },
    {
      title: "Total Users",
      value: "1,542",
      change: "+8.4%",
      icon: "👥",
    },
  ];

  // ==========================================
  // RECENT ACTIVITY
  // ==========================================

  const activities = [
    {
      icon: "🎮",
      title: "New game added",
      description: "Wuthering Waves was added to the game library.",
      time: "10 min ago",
    },
    {
      icon: "👤",
      title: "New user registered",
      description: "A new user joined BluePhoenix.",
      time: "32 min ago",
    },
    {
      icon: "🗂️",
      title: "Category updated",
      description: "Adventure category was updated.",
      time: "1 hour ago",
    },
  ];

  return (
    <div className="admin-dashboard mx-auto w-full max-w-375">
      {/* =====================================================
          PAGE HEADER
      ===================================================== */}

      <div className="mb-7 flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
        {/* TITLE */}

        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-400">
            Overview
          </p>

          <h1 className="mt-1 text-3xl font-black tracking-tight text-white sm:text-4xl">
            Dashboard
          </h1>
        </div>

        {/* HEADER ACTIONS */}

        <div className="flex items-center gap-2 sm:gap-3">
          {/* SEARCH */}

          <div className="flex h-11 min-w-0 flex-1 items-center gap-3 rounded-full border border-[#102536]! border-{black} bg-[#061522] px-4 sm:w-65 sm:flex-none">
            <svg
              className="h-4 w-4 shrink-0 text-slate-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="7" />

              <path
                strokeLinecap="round"
                d="M20 20l-3.5-3.5"
              />
            </svg>

            <input
              type="text"
              placeholder="Search anything..."
              className="w-full bg-transparent text-xs text-white outline-none placeholder:text-slate-600"
            />
          </div>

          {/* CREATE */}

          <Link
            to="/admin/games"
            className="hidden h-11 items-center justify-center rounded-full border border-[#102536]! bg-cyan-400 px-6 text-xs font-bold text-[#020914] transition hover:bg-cyan-300 sm:flex"
          >
            + Create
          </Link>

          {/* NOTIFICATION */}

          <button
            type="button"
            className="hidden h-11 w-11 items-center justify-center rounded-full border border-[#102536]! bg-[#061522] text-slate-500 transition hover:border-cyan-400/30 hover:text-cyan-400 sm:flex"
          >
            ♧
          </button>

          {/* ADMIN */}

          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#102536]! bg-[#061522]">
            🛡️
          </div>
        </div>
      </div>

      {/* =====================================================
          MAIN GRID
      ===================================================== */}

      <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_330px]">
        {/* ===================================================
            LEFT COLUMN
        =================================================== */}

        <div className="space-y-5">
          {/* =================================================
              OVERVIEW
          ================================================= */}

          <section className="rounded-[26px] border border-[#102536]! bg-[#061522] shadow-[0_20px_60px_rgba(0,0,0,0.18)]">
            {/* HEADER */}

            <div className="flex items-center justify-between px-5 pt-6 sm:px-7">
              <div>
                <h2 className="text-lg font-bold text-white">
                  Overview
                </h2>

                <p className="mt-1 text-xs text-slate-500">
                  Your platform performance
                </p>
              </div>

              <button
                type="button"
                className="hidden rounded-full border border-[#102536]! bg-[#020914] px-4 py-2 text-xs text-slate-400 transition hover:border-[#17364d] hover:text-cyan-400 sm:block"
              >
                Last month
                <span className="ml-4">⌄</span>
              </button>
            </div>

            {/* STAT CARDS */}

            <div className="grid gap-4 p-5 sm:grid-cols-2 sm:p-7">
              {stats.map((stat) => (
                <div
                  key={stat.title}
                  className="rounded-[20px] border border-[#102536]! bg-[#081c2b] p-5 transition duration-200 hover:border-[#17364d]"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400/10 text-sm">
                      {stat.icon}
                    </div>

                    <span className="text-sm font-medium text-slate-300">
                      {stat.title}
                    </span>
                  </div>

                  <div className="mt-6 flex flex-wrap items-end gap-3">
                    <span className="text-4xl font-bold tracking-tight text-white">
                      {stat.value}
                    </span>

                    <span className="mb-1 rounded-full bg-emerald-400/10 px-2 py-1 text-[10px] font-semibold text-emerald-400">
                      ↑ {stat.change}
                    </span>
                  </div>

                  <p className="mt-1 text-[10px] text-slate-600">
                    vs last month
                  </p>
                </div>
              ))}
            </div>

            {/* WELCOME */}

            <div className="border-t border-[#102536]! px-5 py-6 sm:px-7">
              <h3 className="text-base font-semibold text-white">
                Welcome back, Administrator!
              </h3>

              <p className="mt-1 text-xs text-slate-500">
                Here's what's happening with your gaming platform today.
              </p>

              {/* ACTIVE USERS */}

              <div className="mt-6 flex items-center gap-4">
                <div className="flex -space-x-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#102536]! bg-cyan-400/20 text-sm">
                    👤
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#102536]! bg-purple-400/20 text-sm">
                    👤
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#102536]! bg-yellow-400/20 text-sm">
                    👤
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#102536]! bg-emerald-400/20 text-sm">
                    👤
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold text-slate-300">
                    1,542 active users
                  </p>

                  <p className="mt-1 text-[10px] text-slate-600">
                    Users currently on BluePhoenix
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* =================================================
              PLATFORM ACTIVITY
          ================================================= */}

          <section className="rounded-[26px] border border-[#102536]! bg-[#061522] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.15)] sm:p-7">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-white">
                  Platform Activity
                </h2>

                <p className="mt-1 text-xs text-slate-500">
                  User activity over the last 7 days
                </p>
              </div>

              <button
                type="button"
                className="hidden rounded-full border border-[#102536]! bg-[#020914] px-4 py-2 text-xs text-slate-400 transition hover:border-[#17364d] hover:text-cyan-400 sm:block"
              >
                Last 7 days
              </button>
            </div>

            {/* CHART */}

            <div className="mt-8 flex h-55 items-end gap-2 border-b border-[#102536]! px-2 sm:gap-4">
              {[35, 48, 42, 65, 52, 78, 60, 90, 68, 82, 72, 96].map(
                (height, index) => (
                  <div
                    key={index}
                    className="group flex h-full flex-1 items-end"
                  >
                    <div
                      className={`w-full rounded-t-lg transition-all duration-300 ${
                        index === 11
                          ? "bg-cyan-400 shadow-[0_0_25px_rgba(0,200,230,0.25)]"
                          : "bg-cyan-400/10 group-hover:bg-cyan-400/20"
                      }`}
                      style={{
                        height: `${height}%`,
                      }}
                    />
                  </div>
                )
              )}
            </div>

            <div className="mt-3 flex justify-between px-1 text-[9px] text-slate-600">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>
            </div>
          </section>
        </div>

        {/* ===================================================
            RIGHT COLUMN
        =================================================== */}

        <div className="space-y-5">
          {/* =================================================
              POPULAR GAMES
          ================================================= */}

          <section className="rounded-[26px] border border-[#102536]! bg-[#061522] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.15)] sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-white">
                  Popular Games
                </h2>

                <p className="mt-1 text-xs text-slate-500">
                  Most active games
                </p>
              </div>

              <span className="text-lg text-slate-600">
                ⋯
              </span>
            </div>

            {/* GAME LIST */}

            <div className="mt-5 space-y-2 ">
              {games.slice(0, 5).map((game) => (
                <Link
                  key={game.id}
                  to="/admin/games"
                  className="flex items-center gap-3 rounded-2xl border border-transparent p-3 transition hover:border-[#102536]! hover:bg-[#081c2b]"
                >
                  {/* GAME IMAGE */}

                  <div className="h-11 w-11 shrink-0 overflow-hidden rounded-xl border border-[#102536]! bg-[#081c2b]">
                    <img
                      src={game.image}
                      alt={game.name}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* GAME INFO */}

                  <div className="min-w-0 flex-1">
                    <p className="truncate text-xs font-semibold text-white">
                      {game.name}
                    </p>

                    <p className="mt-1 truncate text-[10px] text-slate-600">
                      {game.genre} • ⭐ {game.rating}
                    </p>
                  </div>

                  {/* STATUS */}

                  <span className="rounded-full bg-emerald-400/10 px-2 py-1 text-[9px] font-medium text-emerald-400">
                    Active
                  </span>
                </Link>
              ))}
            </div>

            {/* BUTTON */}

            <Link
              to="/admin/games"
              className="mt-4 block rounded-full border border-[#102536]! bg-[#020914] py-2.5 text-center text-xs font-medium text-slate-400 transition hover:border-[#17364d] hover:text-cyan-400"
            >
              View all games
            </Link>
          </section>

          {/* =================================================
              QUICK ACTIONS
          ================================================= */}

          <section className="rounded-[26px] border border-[#102536]! bg-[#061522] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.15)] sm:p-6">
            <h2 className="text-lg font-bold text-white">
              Quick Actions
            </h2>

            <p className="mt-1 text-xs text-slate-500">
              Manage your platform
            </p>

            <div className="mt-5 space-y-2">
              <Link
                to="/admin/games"
                className="flex items-center justify-between rounded-2xl border border-transparent bg-[#081c2b] px-4 py-3 transition hover:border-[#102536]! hover:bg-[#0a2132]"
              >
                <span className="flex items-center gap-3">
                  <span className="text-base">
                    🎮
                  </span>

                  <span className="text-xs font-medium text-slate-300">
                    Manage Games
                  </span>
                </span>

                <span className="text-slate-600">
                  →
                </span>
              </Link>

              <Link
                to="/admin/categories"
                className="flex items-center justify-between rounded-2xl border border-transparent  bg-[#081c2b] px-4 py-3 transition hover:border-[#102536]! hover:bg-[#0a2132]"
              >
                <span className="flex items-center gap-3">
                  <span className="text-base">
                    🗂️
                  </span>

                  <span className="text-xs font-medium text-slate-300">
                    Manage Categories
                  </span>
                </span>

                <span className="text-slate-600">
                  →
                </span>
              </Link>

              <Link
                to="/admin/users"
                className="flex items-center justify-between rounded-2xl border border-transparent bg-[#081c2b] px-4 py-3 transition hover:border-[#102536]! hover:bg-[#0a2132]"
              >
                <span className="flex items-center gap-3">
                  <span className="text-base">
                    👥
                  </span>

                  <span className="text-xs font-medium text-slate-300">
                    Manage Users
                  </span>
                </span>

                <span className="text-slate-600">
                  →
                </span>
              </Link>
            </div>
          </section>

          {/* =================================================
              RECENT ACTIVITY
          ================================================= */}

          <section className="rounded-[26px] border border-[#102536]! bg-[#061522] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.15)] sm:p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-white">
                Recent Activity
              </h2>

              <span className="flex items-center gap-1.5 text-xs text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Live
              </span>
            </div>

            <div className="mt-5 space-y-5">
              {activities.map((activity) => (
                <div
                  key={activity.title}
                  className="flex gap-3"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#102536]! bg-cyan-400/10 text-sm">
                    {activity.icon}
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs font-medium text-slate-300">
                      {activity.title}
                    </p>

                    <p className="mt-1 text-[10px] leading-4 text-slate-600">
                      {activity.description}
                    </p>

                    <p className="mt-1 text-[9px] text-slate-700">
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}