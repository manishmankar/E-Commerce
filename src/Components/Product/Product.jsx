import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../../Context/Context";
import "./Product.css";

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.pro;

    return (
      <div className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <ProductConsumer>
            {(value) => {
              return (
                <div className="productContiner img-container p-5">
                  <Link to="/details">
                    <img
                      style={{
                        width: "100%",
                        height: "200px",
                      }}
                      src={img}
                      alt=""
                      onClick={() => value.handleDetail(id)}
                    />
                  </Link>

                  <button
                    variant="info"
                    className="addCart cart-btn btn btn-info text-uppercase "
                    disabled={inCart ? true : false}
                    onClick={() => {
                      value.addToCart(id);
                      value.openModal(id);
                    }}
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
              );
            }}
          </ProductConsumer>
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0">{title}</p>
            <div> ${price} </div>
          </div>
        </div>
      </div>
    );
  }
}

// product.propTypes = {
//   product: PropTypes.shape({
//     id: PropTypes.number,
//     img: PropTypes.string,
//     title: PropTypes.string,
//     price: PropTypes.number,
//     inCart: PropTypes.bool,
//   }).isRequired,
// };
