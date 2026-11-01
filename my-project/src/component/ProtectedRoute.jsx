import { Navigate, Outlet } from "react-router";
import { getAccessToken } from "../services/auth";

export default function ProtectedRoute() {
  const token = getAccessToken();

  // User is not logged in
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // User is logged in
  return <Outlet />;
}