import React from "react";
import Carousel from "react-elastic-carousel";
import { Link } from "react-router-dom";

import "./Blogs.css";

const Blogs = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 600, itemsToShow: 1, itemsToScroll: 1, pagination: false },
    { width: 850, itemsToShow: 2 },
    { width: 1150, itemsToShow: 2, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 2 },
    { width: 1750, itemsToShow: 2 },
  ];

  return (
    <div className="blogs container">
        <h2 className="title">BLOGS</h2>
      <Carousel className="caurosel" breakPoints={breakPoints}>
        {[1, 2, 3, 4, 5].map((item) => (
          <Link to={"/"} className="blog" key={item.id}>
            <div className="top">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS90WegmW0YiSBJDXgBngc36uEK3X5YLnxLzw&usqp=CAU"
                alt=""
              />
            </div>
            <div className="bottom">
              <span className="createdAt">5-20-2022</span>
              <h3 className="title">Blog title</h3>
            </div>
          </Link>
        ))}
      </Carousel>
    </div>
  );
};

export default Blogs;
