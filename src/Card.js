import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Card = (props) => {

  return (
    <>
      <div className="item1 col-12 col-md-6 col-lg-6 col-xl-4 my-5">
        <div className="row item-inside">
          <div className="col-12 col-md-12 col-lg-4 img-div">
            <img
              src={props.values.image}
              alt={props.values.name}
              className="img-fluid"
            />
          </div>

          <div className="col-12 col-md-12 col-lg-8">
            <div className="main-tittle pt-4 pb-3">
              <h2>{props.values.name}</h2>
              <p>{props.values.description}</p>
            </div>
            <div className="price-and-add">
              <div className="price-and-add-divide d-flex justify-content-between">
                <h4>Price: Rs {props.values.price}</h4>
                <a href="">
                  <button className="add-btn btn btn-outline-success">
                    Add
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
