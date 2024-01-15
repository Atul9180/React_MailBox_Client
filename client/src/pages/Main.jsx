import { useState } from "react";
import Header from "../components/Header.jsx";
import Sidebar from "../components/sidebar/Sidebar.jsx";

const Main = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen((prevState) => !prevState);
  };

  return (
    <div>
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar sidebarOpen={sidebarOpen} />
      Mails display area
    </div>
  );
};

export default Main;
