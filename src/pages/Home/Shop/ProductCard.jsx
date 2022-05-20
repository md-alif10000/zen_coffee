import React from "react";
import "./Shop.css";

const ProductCard = () => {
  return (
    <div className="item">
      <div className="left">
        <h3 className="itemTitle">Coffee Name</h3>
        <p>Lorem ipsum dolor sit amet.</p>
        <input type="number" name="" id="" value={1} />
        <button className="button primary">Add to cart</button>
      </div>
      <div className="right">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio possimus
          sit quisquam iusto repudiandae architecto nulla. Impedit molestiae
          repellendus perferendis sint voluptas autem. Sapiente, eveniet!
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
