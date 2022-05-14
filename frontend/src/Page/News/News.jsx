import React from "react";
import "./style.scss";
import "./style.css";

import { Link } from "react-router-dom";

function News() {
  return (
    <div className="container">
      <div className="navbar__link">
        <div className="button__back">
          <Link to="/" className="link">
            Back
          </Link>
        </div>
        <div className="">
          <Link to="" className="link">
            Bakyt birthday is Today
          </Link>
        </div>
        <div className="header__links">
          <Link to="/chat" className="link">
            Chart
          </Link>
          <Link to="/users" className="link">
            Users
          </Link>
        </div>
      </div>
      <div className="content">
        <div className="left__posts">
          <div className="carts">
            <div className="cart_item">
              <h3 className="cart__date"> 20.32.4243 july 10</h3>
              <h1 className="cart__title">Mars is the first Planet</h1>
              <p className="cart__description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptates minus corrupti est enim placeat fugit.
              </p>
              <ul>
                <li>likes 10</li>
                <li>views 10</li>
                <li>favorite</li>
              </ul>
            </div>
            <div className="cart_item">
              <h3 className="cart__date"> 20.32.4243 july 10</h3>
              <h1 className="cart__title">Mars is the first Planet</h1>
              <p className="cart__description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptates minus corrupti est enim placeat fugit.
              </p>
              <ul>
                <li>likes 10</li>
                <li>views 10</li>
                <li>favorite</li>
              </ul>
            </div>
            <div className="cart_item">
              <h3 className="cart__date"> 20.32.4243 july 10</h3>
              <h1 className="cart__title">Mars is the first Planet</h1>
              <p className="cart__description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptates minus corrupti est enim placeat fugit.
              </p>
              <ul>
                <li>likes 10</li>
                <li>views 10</li>
                <li>favorite</li>
              </ul>
            </div>
            <div className="cart_item">
              <h3 className="cart__date"> 20.32.4243 july 10</h3>
              <h1 className="cart__title">Mars is the first Planet</h1>
              <p className="cart__description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptates minus corrupti est enim placeat fugit.
              </p>
              <ul>
                <li>likes 10</li>
                <li>views 10</li>
                <li>favorite</li>
              </ul>
            </div>
            <div className="cart_item">
              <h3 className="cart__date"> 20.32.4243 july 10</h3>
              <h1 className="cart__title">Mars is the first Planet</h1>
              <p className="cart__description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptates minus corrupti est enim placeat fugit.
              </p>
              <ul>
                <li>likes 10</li>
                <li>views 10</li>
                <li>favorite</li>
              </ul>
            </div>
            <div className="cart_item">
              <h3 className="cart__date"> 20.32.4243 july 10</h3>
              <h1 className="cart__title">Mars is the first Planet</h1>
              <p className="cart__description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptates minus corrupti est enim placeat fugit.
              </p>
              <ul>
                <li>likes 10</li>
                <li>views 10</li>
                <li>favorite</li>
              </ul>
            </div>
            <div className="cart_item">
              <h3 className="cart__date"> 20.32.4243 july 10</h3>
              <h1 className="cart__title">Mars is the first Planet</h1>
              <p className="cart__description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptates minus corrupti est enim placeat fugit.
              </p>
              <ul>
                <li>likes 10</li>
                <li>views 10</li>
                <li>favorite</li>
              </ul>
            </div>
            <div className="cart_item">
              <h3 className="cart__date"> 20.32.4243 july 10</h3>
              <h1 className="cart__title">Mars is the first Planet</h1>
              <p className="cart__description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptates minus corrupti est enim placeat fugit.
              </p>
              <ul>
                <li>likes 10</li>
                <li>views 10</li>
                <li>favorite</li>
              </ul>
            </div>
            <div className="cart_item">
              <h3 className="cart__date"> 20.32.4243 july 10</h3>
              <h1 className="cart__title">Mars is the first Planet</h1>
              <p className="cart__description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptates minus corrupti est enim placeat fugit.
              </p>
              <ul>
                <li>likes 10</li>
                <li>views 10</li>
                <li>favorite</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="right__posts">
          <div className="category__list">
            <div className="category__item">
              <h3 className="category__date"> 20.32.4243 july 10</h3>
              <h1 className="category__title">Mars is the first Planet</h1>
              <p className="category__description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptates minus corrupti est enim placeat fugit.
              </p>
              <ul>
                <li>likes 10</li>
                <li>views 10</li>
                <li>favorite</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default News;
