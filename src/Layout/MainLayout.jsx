import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import { Outlet } from "react-router-dom";

import './MainLayout.css'
const MainLayout = () => {
  return (
    <div className="main-layout">
      <Header />
      <div className="outlet">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
