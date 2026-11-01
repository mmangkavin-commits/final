import { FaDiscord, FaYoutube, FaTwitter, FaFacebookF } from "react-icons/fa";
import Newlogo from "./Newlogo.png";

export default function Footer() {
  return (
    <footer className="border-t border-cyan-500/20 bg-[#020914] text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-10">

        {/* Main Footer */}
        <div className="grid gap-10 md:grid-cols-4">

          {/* Logo + Description */}
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center gap-3">
              <img
                src={Newlogo}
                alt="Game Collection"
                className="h-12 w-auto"
              />

              <div>
                <h2 className="text-lg font-bold text-white">
                  BLUE
                </h2>
                <h2 className="text-lg font-bold text-cyan-400">
                  PHOENIX
                </h2>
              </div>
            </div>

            <p className="max-w-sm text-sm leading-6 text-gray-400">
              A simple game library for discovering,
              organizing, and managing your favorite games.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="/"
                  className="transition hover:text-cyan-400"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="/products"
                  className="transition hover:text-cyan-400"
                >
                  Games
                </a>
              </li>

              <li>
                <a
                  href="/categories"
                  className="transition hover:text-cyan-400"
                >
                  Categories
                </a>
              </li>

              <li>
                <a
                  href="/my-collection"
                  className="transition hover:text-cyan-400"
                >
                  My Collection
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-4 font-semibold text-white">
              Support
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="/about"
                  className="transition hover:text-cyan-400"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="/contact"
                  className="transition hover:text-cyan-400"
                >
                  Contact
                </a>
              </li>

              <li>
                <a
                  href="/faq"
                  className="transition hover:text-cyan-400"
                >
                  FAQ
                </a>
              </li>

              <li>
                <a
                  href="/privacy"
                  className="transition hover:text-cyan-400"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 flex flex-col gap-5 border-t border-cyan-500/10 pt-6 sm:flex-row sm:items-center sm:justify-between">

          {/* Copyright */}
          <p className="text-xs text-gray-500">
            © 2026 Game Collection. All rights reserved.
          </p>

          {/* Social Media */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-lg
              border border-cyan-500/20 bg-[#061522]
              text-gray-400 transition
              hover:border-cyan-400/50
              hover:text-cyan-400"
            >
              <FaDiscord />
            </a>

            <a
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-lg
              border border-cyan-500/20 bg-[#061522]
              text-gray-400 transition
              hover:border-cyan-400/50
              hover:text-cyan-400"
            >
              <FaYoutube />
            </a>

            <a
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-lg
              border border-cyan-500/20 bg-[#061522]
              text-gray-400 transition
              hover:border-cyan-400/50
              hover:text-cyan-400"
            >
              <FaTwitter />
            </a>

            <a
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-lg
              border border-cyan-500/20 bg-[#061522]
              text-gray-400 transition
              hover:border-cyan-400/50
              hover:text-cyan-400"
            >
              <FaFacebookF />
            </a>
          </div>

          {/* Back To Top */}
          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="hidden h-9 w-9 items-center justify-center rounded-lg
            border border-cyan-500/20 bg-[#061522]
            text-cyan-400 transition
            hover:border-cyan-400/50
            hover:bg-cyan-500/10
            sm:flex"
          >
            ↑
          </button>
        </div>
      </div>
    </footer>
  );
}