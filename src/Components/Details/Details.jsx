import React, { Component } from "react";
import { ProductConsumer } from "../../Context/Context";
import { Link } from "react-router-dom";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const {
            id,
            company,
            img,
            info,
            price,
            title,
            inCart,
          } = value.detailsPoduct;

          return (
            <div className="container py-5">
              <div className="row">
                <div className="col-10 mx-auto text-blue text-slanted my-5">
                  <h1>{title}</h1>
                </div>
                <div className="row">
                  <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                    <img src={img} alt="" className="img-fluid" />
                  </div>
                  <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                    <h2>model {title} </h2>
                    <h4>
                      made by : <span>{company} </span>
                    </h4>
                    <h4>
                      <strong>Price: {price} </strong>
                    </h4>
                    <p className="mt-3 mb-0">some info about product</p>
                    <p className="text-muted lead">{info}</p>
                    <div>
                      <Link to="/">
                        <button className="btn btn-outline-primary text-uppercase mr-5  ">
                          Product
                        </button>
                      </Link>

                      <button
                        className="btn btn-outline-danger text-uppercase"
                        disabled={inCart ? true : false}
                        onClick={() => value.addToCart(id)}
                      >
                        {inCart ? (
                          <p className="text-capitaize mb-0" disabled>
                            In card
                          </p>
                        ) : (
                          "add to cart"
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
