import React from "react";
import "./tesacard.css";

const TesaCard = ({ image, name, description, price }) => {
  const src = image ? `/images/${image}` : "/images/placeholder.png";

  return (
    <div className="tesa-card">
      <div className="card-media">
        <img
          className="card-img"
          src={src}
          alt={name}
          onError={(e) => (e.currentTarget.src = "/images/placeholder.png")}
        />
      </div>

      <div className="card-content">
        <h3 className="card-title">{name}</h3>
        <p className="card-desc">{description}</p>

        <div className="card-footer">
          <span className="card-price">{price}</span>
          <button className="card-button">สั่งซื้อ</button>
        </div>
      </div>
    </div>
  );
};

export default TesaCard;