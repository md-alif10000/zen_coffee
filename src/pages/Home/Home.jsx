import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Blogs from "./Blogs";
import "./Home.css";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="banner">
        <img
          src="https://thumbs.dreamstime.com/b/coffee-banner-collage-espresso-beans-51189295.jpg"
          alt=""
        />
      </div>

      <div className="specialities container">
        <h1 className="title">
          WE'RE ON A MISSION TO BRING YOU BETTER MORNINGS
        </h1>
        <div className="items">
          <div className="item">
          <div className="imageContainer">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9IGIFGSn6NnfPF0IYt5POglMcN9fe6QQSWA&usqp=CAU" alt="" />
            </div>

            <h3>Section Title</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
              fugiat odio, at alias quia optio!
            </p>
          </div>
          <div className="item">
          <div className="imageContainer">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9IGIFGSn6NnfPF0IYt5POglMcN9fe6QQSWA&usqp=CAU" alt="" />
            </div>


            <h3>Section Title</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
              fugiat odio, at alias quia optio!
            </p>
          </div>
          <div className="item">
            <div className="imageContainer">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9IGIFGSn6NnfPF0IYt5POglMcN9fe6QQSWA&usqp=CAU" alt="" />
            </div>

            <h3>Section Title</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
              fugiat odio, at alias quia optio!
            </p>
          </div>
        </div>
      </div>

      <div className="secondary_banner">
        <div>
          <h2>Your trusted coffee shop</h2>
        </div>
      </div>

      <div className="section-4 container">
        <div className="item">
          <div className="left">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsxXktRuvtCi2KxCWBwACPV3MlqrTDxDhWGA&usqp=CAU"
              alt=""
            />
          </div>
          <div className="right">
          <h2 className="title">Get your coffee now</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae illo vero itaque doloribus numquam accusamus expedita repellat cumque quibusdam dignissimos!</p>
            <Link to="/"  className="button primary">
              GET NOW
            </Link>
          </div>
        </div>
        <div className="item">
          <div className="left">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsxXktRuvtCi2KxCWBwACPV3MlqrTDxDhWGA&usqp=CAU"
              alt=""
            />
          </div>
          <div className="right">
            <h2 className="title">Get your coffee now</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae illo vero itaque doloribus numquam accusamus expedita repellat cumque quibusdam dignissimos!</p>
            <Link to="/"  className="button primary">
              GET NOW
            </Link>

          </div>
        </div>
      </div>

      <Testimonials/>

      <Blogs/>

      <div className="newsletter">
        <div className="container">
        <h3>Subscribe to our newsletter</h3>

          <div className="inputBox">
            <input type="text" />
            <button className="button primary" >JOIN</button>
          </div>

        </div>

      </div>


    </div>
  );
};

export default Home;
