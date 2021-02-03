import React, { Component } from "react";
import { detailProduct, storeProducts } from "../Data/storeProduct";

const ProductContext = React.createContext();
//provider
//consumer

class ProductProvider extends Component {
  state = {
    products: [],
    cart: [],
    detailsPoduct: detailProduct,
    modalOpen: false,

    modalProduct: detailProduct,
  };
  componentDidMount() {
    this.setProduct();
  }
  setProduct = () => {
    let tempProduct = [];
    storeProducts.forEach((item) => {
      const singleIteam = { ...item };
      tempProduct = [...tempProduct, singleIteam];
    });
    this.setState(() => {
      return { products: tempProduct };
    });
  };

  getIteam = (id) => {
    const product = this.state.products.find((item) => item.id === id);
    return product;
  };

  handleDetail = (id) => {
    const product = this.getIteam(id);
    this.setState(() => {
      return { detailProduct: product };
    });
  };

  addToCart = (id) => {
    let tempProduct = [...this.state.products];
    const index = tempProduct.indexOf(this.getIteam(id));
    const product = tempProduct[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;

    this.setState(() => {
      return {
        products: tempProduct,
        cart: [...this.state.cart, product],
        detailProduct: { ...product },
      };
    }, this.addTotals);
  };

  openModal = (id) => {
    const product = this.getIteam(id);
    this.setState(() => {
      return { modalProduct: product, modalOpen: true };
    });
  };

  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false };
    });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
