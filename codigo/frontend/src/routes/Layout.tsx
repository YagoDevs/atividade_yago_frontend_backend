import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Sidebar from "../components/sidebar/Sidebar";

export default function Layout() {
  const location = useLocation();
  const path = location.pathname;
//   const isLogin = path === "/login" || path === "/register";
//   const isHome = path === "/";

  return (
    <div className="relative flex flex-row w-full h-full">
      <Sidebar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
