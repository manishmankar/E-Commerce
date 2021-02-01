import React, { Component } from "react";
import Product from "../Product/Product";
import Title from "../Title/Title";
import { ProductConsumer } from "../../Context/Context";

export default class ProductList extends Component {
  render() {
    return (
      <div>
        <div className="py-5">
          <div className="container">
            <Title name="our" title="Product" />
            <div className="row">
              <ProductConsumer>
                {(value) => {
                  return value.products.map((pro) => {
                    return <Product key={pro.id} pro={pro} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
