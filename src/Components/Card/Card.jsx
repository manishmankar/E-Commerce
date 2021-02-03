import React, { Component } from "react";
import { ProductConsumer } from "../../Context/Context";
import CartItem from "./CartItem";

export default class Card extends Component {
  render() {
    return (
      <div>
        <ProductConsumer>
          {(value) => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <div>
                  <div className="row">
                    <div className="col-10 mx-auto my-2 text-center text-title">
                      <h1 className="text-capitalize font-weight-bold">
                        your <strong className="text-blue">cart</strong>
                      </h1>
                    </div>
                  </div>
                  <div className="container-fluid text-center d-none d-lg-block">
                    <div className="row ">
                      <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase">products</p>
                      </div>
                      <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase">name of product</p>
                      </div>
                      <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase">price</p>
                      </div>
                      <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase">quantity</p>
                      </div>
                      <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase">remove</p>
                      </div>
                      <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase">total</p>
                      </div>
                    </div>
                  </div>

                  <div className="container-fluid">
                    {cart.map((item) => (
                      <CartItem value={value} />
                    ))}
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
