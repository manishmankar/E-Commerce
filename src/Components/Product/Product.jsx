import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.pro;
    console.log(inCart);
    return (
      <div className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <div className="img-container p-5">
            <Link to="/details">
              <img
                style={{
                  width: "100%",
                }}
                src={img}
                alt=""
                onClick={() => console.log("you click me")}
              />
            </Link>

            <button
              className="cart-btn"
              disabled={inCart ? true : false}
              onClick={() => console.log("add to cart")}
            >
              {inCart ? (
                <p className="text-capitaize mb-0" disabled>
                  In card
                </p>
              ) : (
                <i className="fas fa-cart-plus">add</i>
              )}
            </button>
          </div>
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0">{title}</p>
            <div> ${price} </div>
          </div>
        </div>
      </div>
    );
  }
}

product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
  }).isRequired,
};
