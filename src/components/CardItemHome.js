import React from "react";
import { Link } from "react-router-dom";

const CardItemHome = (props) => {
  return (
    <>
      <li className="cards__item">
        <Link to="/" className="cards__item__link">
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img
              className="cards__item__img"
              alt="Office"
              src={props.src}
            />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
};

export default CardItemHome;
