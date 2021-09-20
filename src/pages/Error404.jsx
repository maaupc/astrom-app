import React from "react";
import "../styles/error404.css";

const Error404 = () => {
  return (
    <>
      <div className="container-fluid container-error">
        <div className="row">
          <div className="col col-md-8 offset-md-2 text">
            <div className="title-center">
              <h1 className="h1-error">Wooops !</h1>
              <span>
                <i
                  class="fa fa-exclamation-triangle i-warning"
                  aria-hidden="true"
                ></i>{" "}
                404 : Page Not Found{" "}
                <i
                  class="fa fa-exclamation-triangle i-warning"
                  aria-hidden="true"
                ></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error404;
