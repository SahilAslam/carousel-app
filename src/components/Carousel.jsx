import { useEffect, useState } from "react";
import "../styles/Carousel.css";

// eslint-disable-next-line react/prop-types
const Carousel = ({ countries = [{}] }) => {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  let timeOut = null

  useEffect(() => {
      timeOut =
      // eslint-disable-next-line react-hooks/exhaustive-deps
      autoPlay &&
      setTimeout(() => {
        slideRight();
      }, 2500);
  });

  const slideLeft = () => {
    setCurrent(current === 0 ? countries.length - 1 : current - 1);
  };

  const slideRight = () => {
    setCurrent(current === countries.length - 1 ? 0 : current + 1);
  };

  console.log(current);

  return (
    <div
      className="carousel"
      onMouseEnter={() => {
        setAutoPlay(false);
        clearTimeout(timeOut)
      }}
      onMouseLeave={() => {
        setAutoPlay(true)
        clearTimeout(timeOut)
      }}
    >
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
        <div className="carousel_arrow_left" onClick={slideLeft}>
          &lsaquo;
        </div>
        <div className="carousel_arrow_right" onClick={slideRight}>
          &rsaquo;
        </div>
        <div className="carousel_pagination">
          {countries.map((_, index) => (
            <div
              key={index}
              className={
                index == current
                  ? "pagination_dot pagianation_dot_active"
                  : "pagination_dot"
              }
              onClick={() => setCurrent(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
