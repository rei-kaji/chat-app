import React from "react";
import Chat from "../components/Chat";
import Sidebar from "../components/Sidebar";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="home_container">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};

export default Home;
