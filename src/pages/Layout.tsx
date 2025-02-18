import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow w-full max-w-screen-md  mx-auto">
        <Outlet />
      </main>
      <div className="flex-none">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
