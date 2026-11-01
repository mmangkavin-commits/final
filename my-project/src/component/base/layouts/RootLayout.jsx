import { Outlet } from "react-router";
import FooterComponent from "./FooterComponent";
import NavbarComponent from "./NavbarComponent";

export default function RootLayout() {
  return (
    <>
      <NavbarComponent />
      <main>
        <Outlet />
      </main>
      <FooterComponent />
    </>
  )
}