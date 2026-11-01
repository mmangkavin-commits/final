import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
} from "flowbite-react";
import { NavLink, useNavigate } from "react-router";
import Newlogo from "./Newlogo.png";
import { clearAccessToken, getAccessToken } from "../../../services/auth";

export default function NavbarComponent() {
  const navigate = useNavigate();
  const isAuthenticated = Boolean(getAccessToken());

  function handleLogout() {
    clearAccessToken();
    navigate("/login");
  }

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Games", path: "/products" },
    { name: "Categories", path: "/categories" },
    { name: "My Collection", path: "/collection" },
    { name: "About", path: "/about" },
  ];

  return (
    <Navbar
      fluid
      className="sticky top-0 z-50 border-b! border-cyan-500/20! bg-[#020914]/95! px-6! py-2! backdrop-blur-md!"
    >
      {/* ================= LOGO ================= */}
      <NavbarBrand
  href="/"
  className="flex! items-center! gap-3! no-underline!"
>
  {/* Phoenix Logo */}
  <img
    src={Newlogo}
    alt="BluePhoenix Logo"
    className="h-11! w-11! shrink-0! rounded-xl! object-cover!"
  />

  {/* Website Name */}
  <div className="flex! flex-col! justify-center! leading-none!">
    <h4 className="m-0! whitespace-nowrap! text-2xl! font-black! tracking-wide! text-white">
      𝘽𝙇𝙐𝙀
      <span className="text-cyan-400!">
        𝙋𝙃𝙊𝙀𝙉𝙄𝙓
      </span>
    </h4>

    <p className="mt-2! whitespace-nowrap! text-[10px]! font-medium! uppercase! tracking-[0.3em]! text-gray-500!">
      Register for your account
    </p>
  </div>
</NavbarBrand>
      {/* ================= RIGHT SIDE ================= */}
      <div className="flex! items-center! gap-2! md:order-2!">
       {/* ================= SEARCH ================= */}
<div className="hidden md:block">
  <div className="relative">
    <input
      type="text"
      placeholder="Search games..."
      className="w-52! rounded-xl! border! border-cyan-500/25! bg-[#071525]! py-2.5! pl-10! pr-4! text-sm! text-white! placeholder:text-gray-500! outline-none! transition-all! duration-200! focus:border-cyan-400! focus:ring-1! focus:ring-cyan-400/20!"
    />

    {/* Search Icon */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="pointer-events-none absolute left-3.5! top-1/2! -translate-y-1/2! text-gray-400!"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4" />
    </svg>
  </div>
</div>
        {/* ================= NOTIFICATION ================= */}
        <button
          type="button"
          className="hidden rounded-full! border-0! bg-transparent! p-2! text-gray-300! transition hover:bg-cyan-500/10! hover:text-cyan-400! md:block!"
          title="Notifications"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            fill="currentColor"
            className="bi bi-bell"
            viewBox="0 0 16 16"
          >
            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6" />
          </svg>
        </button>

        {/* ================= PROFILE ================= */}
        <button
          type="button"
          className="hidden h-8! w-8! items-center! justify-center! rounded-full! border! border-cyan-500/40! bg-slate-800! p-0! text-cyan-400! md:flex!"
          title="Profile"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
</svg>
        </button>

        {isAuthenticated ? (
          <Button
            type="button"
            onClick={handleLogout}
            color="dark"
            className="rounded-lg! border! border-cyan-500/70! bg-transparent! px-4! py-1.5! text-sm! font-medium! text-cyan-400! hover:bg-cyan-500/10!"
          >
            Logout
          </Button>
        ) : (
          <>
            <Button
              as={NavLink}
              to="/login"
              color="dark"
              className="rounded-lg! border! border-cyan-500/70! bg-transparent! px-4! py-1.5! text-sm! font-medium! text-cyan-400! hover:bg-cyan-500/10!"
            >
              Login
            </Button>
            <Button
              as={NavLink}
              to="/signup"
              className="rounded-lg bg-linear-to-r from-cyan-500 to-blue-600 px-4 py-1.5 text-sm font-medium text-white shadow-lg shadow-cyan-500/20 hover:from-cyan-400 hover:to-blue-500"
            >
              Register
            </Button>
          </>
        )}

        {/* ================= MOBILE TOGGLE ================= */}
        <NavbarToggle className="border-0! text-gray-300! hover:bg-cyan-500/10! hover:text-cyan-400!" />
      </div>

      {/* ================= NAVIGATION ================= */}
      <NavbarCollapse className="bg-transparent!">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `group relative px-3! py-1.5! text-sm! font-medium! no-underline! transition duration-300 ${
                isActive
                  ? "text-cyan-400!"
                  : "text-gray-300! hover:text-cyan-400!"
              }`
            }
          >
            {({ isActive }) => (
              <>
                {item.name}

                {/* Cyan underline */}
                <span
                className={`absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee] transition-all duration-300 ${
  isActive ? "w-8" : "w-0 group-hover:w-8"
}`}
                />
              </>
            )}
          </NavLink>
        ))}
      </NavbarCollapse>
    </Navbar>
  );
}