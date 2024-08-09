import { useState } from "react";
import "../styles/Carousel.css";

// eslint-disable-next-line react/prop-types
const Carousel = ({ countries = [{}] }) => {
  const [current, setCurrent] = useState(0);

  const leftClick = () => {
    setCurrent(current === 0 ? countries.length - 1 : current - 1);   
  };

  const rightClick = () => {
    setCurrent(current === countries.length - 1 ? 0 : current + 1);
  };

  console.log(current);

  return (
    <div className="carousel">
      <div className="carousel_wrapper">
        {countries.map((country, index) => (
          <div
            key={index}
            className={
              index === current
                ? "carousel_card carousel_card_active"
                : "carousel_card"
            }
          >
            <img
              className="card_image"
              src={country.image}
              alt={country.title}
            />
            <div className="card_overlay">
              <h2 className="card_title">{country.title}</h2>
            </div>
          </div>
        ))}
        <div className="carousel_arrow_left" onClick={leftClick}>
          &lsaquo;
        </div>
        <div className="carousel_arrow_right" onClick={rightClick}>
          &rsaquo;
        </div>
      </div>
    </div>
  );
};

export default Carousel;
