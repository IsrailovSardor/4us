import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";

const Home = () => {

  return (
    <div className="home_wrapper">
      <div class="stage">
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
      </div>
      <div className="news_block">
        <span>
          <Link to="/news" className="elegantshadow">
            NEWS

          </Link>
        </span>
      </div>
      <div className="chat_block">
        <span>
          <Link to="/chat" className=" insetshadow">
            CHAT
          </Link>
        </span>
      </div>
      <div className="user_block">
        <span>
          <Link to="/" className="deepshadow">
            USERS
          </Link>
        </span>
      </div>
      <div className="soon_block">
        <span>
          <Link to="/" className="retroshadow">
            SOON...
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Home;
