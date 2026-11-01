import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

// ==========================================
// APP
// ==========================================

import App from "./App.jsx";

// ==========================================
// LAYOUTS
// ==========================================

import RootLayout from "./component/base/layouts/RootLayout.jsx";

// ==========================================
// ROUTE PROTECTION
// ==========================================

import ProtectedRoute from "./component/ProtectedRoute.jsx";

// ==========================================
// USER PAGES
// ==========================================

import Login from "./pages/Login.jsx";
import Signup from "./pages/SignUp.jsx";
import Games from "./pages/Games.jsx";
import Categories from "./pages/Categories.jsx";
import Collection from "./pages/Collection.jsx";
import About from "./pages/About.jsx";
import GameDetail from "./pages/GameDetail.jsx";

// ==========================================
// ADMIN PAGES
// ==========================================

import AdminLayout from "./admin/AdminLayout.jsx";
import AdminDashboard from "./admin/AdminDashboard.jsx";
import AdminGames from "./admin/AdminGames.jsx";
import AdminCategories from "./admin/AdminCategories.jsx";
import AdminUsers from "./admin/AdminUsers.jsx";

// ======================================================
// ROUTER
// ======================================================

const router = createBrowserRouter([
  // ====================================================
  // AUTHENTICATION
  // ====================================================

  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/signup",
    element: <Signup />,
  },

  // ====================================================
  // NORMAL WEBSITE
  // ====================================================

  {
    element: <RootLayout />,

    children: [
      // ================================================
      // HOME
      // ================================================

      {
        path: "/",
        element: <App />,
      },

      // ================================================
      // GAMES
      // ================================================

      {
        path: "/products",
        element: <Games />,
      },

      // ================================================
      // CATEGORIES
      // ================================================

      {
        path: "/categories",
        element: <Categories />,
      },

      // ================================================
      // ABOUT
      // ================================================

      {
        path: "/about",
        element: <About />,
      },

      // ================================================
      // GAME DETAIL
      // ================================================

      {
        path: "/games/:id",
        element: <GameDetail />,
      },

      // =================================================
      // PROTECTED USER ROUTES
      // =================================================

      {
        element: <ProtectedRoute />,

        children: [
          {
            path: "/collection",
            element: <Collection />,
          },
        ],
      },
    ],
  },

  // ====================================================
  // ADMIN ROUTES
  // ====================================================

  {
    path: "/admin",

    element: <AdminLayout />,

    children: [
      // ================================================
      // ADMIN DASHBOARD
      // /admin
      // ================================================

      {
        index: true,
        element: <AdminDashboard />,
      },

      // ================================================
      // ADMIN GAMES
      // /admin/games
      // ================================================

      {
        path: "games",
        element: <AdminGames />,
      },

      // ================================================
      // ADMIN CATEGORIES
      // /admin/categories
      // ================================================

      {
        path: "categories",
        element: <AdminCategories />,
      },

      // ================================================
      // ADMIN USERS
      // /admin/users
      // ================================================

      {
        path: "users",
        element: <AdminUsers />,
      },
    ],
  },
]);

// ======================================================
// RENDER APPLICATION
// ======================================================

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);