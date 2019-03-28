import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data';
const ProductContext = React.createContext()

//Provider
//Consumer

class ProductProvider extends Component {
  state = {
    products: storeProducts,
    detailProduct
  };

  handleDetail = () => {
    console.log('hola from detail');
  };

  addToCart = () => {
    console.log('hola desde cart');
  };

  render() {
    return (
      <ProductContext.Provider value={{
        ...this.state,
        handleDetail: this.handleDetail,
        addToCart: this.addToCart
      }}>
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer };