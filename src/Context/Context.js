import React, { Component } from "react";
import { detailProduct, storeProducts } from "../Data/storeProduct";

const ProductContext = React.createContext();
//provider
//consumer

class ProductProvider extends Component {
  state = {
    products: storeProducts,
    detailsPoduct: detailProduct,
  };
  handleDetail = () => {
    console.log("helo from details");
  };

  addToCard = () => {
    console.log("helo from add");
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCard: this.addToCard,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
