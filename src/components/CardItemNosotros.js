import React from "react";
import { Link } from "react-router-dom";

const CardItemNosotros = (props) => {
    return (
      <>
        <div className="mycard_item">
          <div className="img_nosotros">
            <img src={props.src} alt={props.alt}/>
          </div>
          <div className="content">
            <h2 className="name">{props.name}</h2>
            <h3 className="profession">{props.profession}</h3>
            <p className="description">{props.description}</p>
            <ul className="social_media-icons">
              <li className="icons-cards"><Link to="/error404"><i className="fa fa-facebook" aria-hidden="true"></i></Link></li>
              <li className="icons-cards"><Link to="/error404"><i className="fa fa-twitter" aria-hidden="true"></i></Link></li>
              <li className="icons-cards"><Link to="/error404"><i className="fa fa-linkedin" aria-hidden="true"></i></Link></li>
            </ul>
          </div>
        </div>
      </>
    );
  };
  
  export default CardItemNosotros;