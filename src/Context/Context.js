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
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
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

  increment = (id) => {
    const tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find((item) => {
      return item.id === id;
    });

    const index = tempCart.indexOf(selectedProduct);

    const product = tempCart[index];

    product.count = product.count + 1;
    product.total = product.count * product.price;
    this.setState(() => {
      return {
        cart: [...tempCart],
      };
    }, this.addTotals);
  };

  decrement = (id) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find((item) => {
      return item.id === id;
    });
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count - 1;
    if (product.count === 0) {
      this.removeIteam(id);
    } else {
      product.total = product.count * product.count;
      this.setState(() => {
        return { cart: [...tempCart] };
      }, this.addTotals);
    }
  };

  getTotals = () => {
    let subTotal = 0;
    this.state.cart.map((item) => (subTotal += item.total));
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    return {
      subTotal,
      tax,
      total,
    };
  };

  addTotals = () => {
    const total = this.getTotals();
    this.setState(() => {
      return {
        cartSubTotal: total.subTotal,
        cartTax: total.tax,
        cartTotal: total.total,
      };
    });
  };

  removeIteam = (id) => {
    let tempProduct = [...this.state.products];
    let tempCart = [...this.state.cart];

    const index = tempProduct.indexOf(this.getIteam(id));
    let removeProduct = tempProduct[index];

    removeProduct.inCart = false;
    removeProduct.count = 0;
    removeProduct.total = 0;

    tempCart = tempCart.filter((item) => {
      return item.id !== id;
    });

    this.setState(() => {
      return {
        cart: [...tempCart],
        product: [...tempProduct],
      };
    }, this.addTotals);
  };

  clearCart = () => {
    this.setState(
      () => {
        return { cart: [] };
      },
      () => {
        this.setProduct();
        this.addTotals();
      }
    );
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

          increment: this.increment,
          decrement: this.decrement,
          removeIteam: this.removeIteam,
          clearCart: this.clearCart,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
