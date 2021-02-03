import React, { Component } from "react";
import { ProductConsumer } from "../../Context/Context";
import { Link } from "react-router-dom";

export default class Model extends Component {
  render() {
    return (
      <div>
        <ProductConsumer>
          {(value) => {
            const { modalOpen, closeModal } = value;
            const { img, title, price } = value.modalProduct;
            console.log(modalOpen);
            if (!modalOpen) {
              return null;
            } else {
              return (
                <div
                  style={{
                    position: "fixed",
                    top: "0",
                    left: "0",
                    right: "0",
                    bottom: "0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "rgba(0, 0, 0, 0.3)",
                  }}
                >
                  <div className="container">
                    <div className="row">
                      <div
                        style={{ backgroundColor: "white" }}
                        className="col-8 mx-auto col-md-6 col-lg-4 p-5 text-center"
                      >
                        <h5>iteam add to cart</h5>
                        <img
                          style={{ width: "100%", height: "250px" }}
                          className="img-fluid"
                          src={img}
                          alt=""
                        />
                        <h5>{title}</h5>
                        <h5 className="text-muted">price: ${price}</h5>
                        <Link to="/">
                          <button onClick={() => closeModal()}>
                            continue shoping
                          </button>
                        </Link>
                        <Link to="/card">
                          <button cart onClick={() => closeModal()}>
                            go to cart
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          }}
        </ProductConsumer>
      </div>
    );
  }
}
