import { Navigate, Outlet } from "react-router";

function getUserFromToken() {
  const token = localStorage.getItem("accessToken");

  if (!token) {
    return null;
  }

  try {
    const payload = JSON.parse(atob(token.split(".")[1]));

    return payload;
  } catch (error) {
    console.error("Invalid access token:", error);
    return null;
  }
}

export default function AdminRoute() {
  const user = getUserFromToken();

  // Not logged in
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Logged in, but not an admin
  if (user.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  // Logged in + admin
  return <Outlet />;
}