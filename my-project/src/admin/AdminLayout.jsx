import { Link, Outlet, useLocation } from "react-router";

export default function AdminLayout() {
  const location = useLocation();

  const menuItems = [
    {
      name: "Dashboard",
      path: "/admin",
      icon: "▦",
    },
    {
      name: "Games",
      path: "/admin/games",
      icon: "🎮",
    },
    {
      name: "Categories",
      path: "/admin/categories",
      icon: "◈",
    },
    {
      name: "Users",
      path: "/admin/users",
      icon: "👥",
    },
  ];

  return (
    <div className="min-h-screen bg-[#020914] text-white">

      {/* =====================================================
          SIDEBAR
      ===================================================== */}

      <aside className="fixed left-0 top-0 z-50 hidden h-screen w-58.75 border-r border-cyan-500/10 bg-[#061522] lg:block">

        {/* LOGO */}

        <div className="flex h-25 items-center gap-3 border-b border-cyan-500/10 px-6">

          <h1 className="text-lg font-black text-white">
            Admin
          </h1>

        </div>


        {/* NAVIGATION */}

        <nav className="px-4 py-6">

          <p className="mb-4 px-3 text-[9px] font-bold uppercase tracking-[0.2em] text-slate-600">
            Management
          </p>

          <div className="space-y-1.5">

            {menuItems.map((item) => {

              const active =
                item.path === "/admin"
                  ? location.pathname === "/admin"
                  : location.pathname.startsWith(item.path);

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`group flex items-center gap-3 rounded-xl px-3 py-3 transition-all duration-200 ${
                    active
                      ? "bg-cyan-400 text-[#020914] shadow-[0_8px_25px_rgba(0,200,230,0.12)]"
                      : "text-slate-400 hover:bg-cyan-400/5 hover:text-cyan-400"
                  }`}
                >

                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm ${
                      active
                        ? "bg-black/10"
                        : "bg-white/3 group-hover:bg-cyan-400/10"
                    }`}
                  >
                    {item.icon}
                  </span>

                  <span className="text-sm font-medium">
                    {item.name}
                  </span>

                  {active && (
                    <span className="ml-auto text-xs">
                      →
                    </span>
                  )}

                </Link>
              );
            })}

          </div>

        </nav>


        {/* ACCOUNT */}

        <div className="absolute bottom-0 left-0 right-0 border-t border-cyan-500/10 p-4">

          <div className="rounded-2xl border border-white/5 bg-white/2 p-4">

            <div className="flex items-center gap-3">

              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/10">
                🛡️
              </div>

              <div className="min-w-0">

                <p className="truncate text-xs font-semibold text-white">
                  Administrator
                </p>

                <p className="truncate text-[10px] text-slate-500">
                  Admin account
                </p>

              </div>

            </div>


            <Link
              to="/"
              className="mt-3 block text-center text-[10px] font-medium text-slate-500 transition hover:text-cyan-400"
            >
              ← Back to website
            </Link>

          </div>

        </div>

      </aside>


      {/* =====================================================
          MAIN AREA
      ===================================================== */}

      <div className="min-h-screen lg:ml-58.75">

        {/* TOP HEADER */}

        <header className="sticky top-0 z-40 border-b border-cyan-500/10 bg-[#020914]/90 px-5 py-4 backdrop-blur-xl sm:px-7 lg:px-10">

          <div className="flex items-center justify-between gap-4">

            {/* TITLE */}

            <div className="min-w-0">

              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-cyan-400">
                BluePhoenix
              </p>

              <h2 className="truncate text-lg font-bold text-white sm:text-xl">
                Administration
              </h2>

            </div>


            {/* RIGHT */}

            <div className="flex items-center gap-2 sm:gap-3">

              {/* SEARCH */}

              <div className="hidden h-10 w-55 items-center gap-3 rounded-full border border-cyan-500/10 bg-[#061522] px-4 md:flex">

                <svg
                  className="h-4 w-4 text-slate-500"
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

                <span className="text-xs text-slate-500">
                  Search anything...
                </span>

              </div>


              {/* NOTIFICATION */}

              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-500/10 bg-[#061522] text-sm text-slate-400 transition hover:border-cyan-400/30 hover:text-cyan-400"
              >
                ♧
              </button>


              {/* PROFILE */}

              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-500/10 bg-[#061522] text-sm">
                🛡️
              </div>

            </div>

          </div>

        </header>


        {/* PAGE CONTENT */}

        <main className="min-h-[calc(100vh-73px)] p-5 sm:p-7 lg:p-10">

          <Outlet />

        </main>

      </div>

    </div>
  );
}