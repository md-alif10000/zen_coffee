import React from "react";
import Carousel from "react-elastic-carousel";
import "./Testimonials.css";

const Testimonials = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1, itemsToScroll: 1, pagination: false },
    { width: 850, itemsToShow: 2 },
    { width: 1150, itemsToShow: 3, itemsToScroll: 1 },
    { width: 1450, itemsToShow: 3 },
    { width: 1750, itemsToShow: 3 },
  ];
  return (
    <div className="testimonials container">
      <h2>Testimonials</h2>
      <h4>People love this!</h4>
      <Carousel className="caurosel" breakPoints={breakPoints}>
        {[1, 2, 3, 4, 5].map((item) => (
          <div to={"/"} className="testimonial" key={item.id}>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
              illum blanditiis tenetur quam dicta dolorum quisquam, laboriosam
              aperiam quo recusandae.
            </p>

            <div className="bottom">
              <span className="starts">5-20-2022</span>
              <h3 className="username">Md Morsalin Alif</h3>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Testimonials;
