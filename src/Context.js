import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data';
const ProductContext = React.createContext()

//Provider
//Consumer

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct,
    cart: [],
    modalOpen: false,
    modalProduct: detailProduct,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0
  };

  componentDidMount() {
    this.setProducts();
  }
  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach(item => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];

    })
    this.setState(() => {
      return { products: tempProducts }
    });
  };

  getItem = id => {
    const product = this.state.products.find(item => item.id === id);
    return product;
  }

  handleDetail = id => {
    //console.log('hola from detail');
    const product = this.getItem(id);
    this.setState(() => {
      return { detailProduct: product }
    })
  };

  addToCart = id => {
    //console.log(`hola desde el carrito el id es: ${id}`);
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(() => {
      return { products: tempProducts, cart: [...this.state.cart, product] };
    }, () => {
      //console.log(this.state);
    });
  };

  clearCart = () => {
    return console.log('nada');
  };

  openModal = id => {
    const product = this.getItem(id);
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
    console.log('este es un metodo incremental');
  };
  decrement = (id) => {
    console.log('este es un metodo decremental');
  };
  removeItem = (id) => {
    console.log('item removido');
  };
  clearCart = () => {
    console.log('el carrito se ha eliminado');
  };

  tester = () => {
    console.log('state products :', this.state.products);
    console.log('data products :', storeProducts[0].inCart);
    const tempProducts = [...this.state.products];
    tempProducts[0].inCart = true
    this.setState(() => {
      return { products: tempProducts }
    }, () => {
      console.log('state products :', this.state.products);
      console.log('data products :', storeProducts[0].inCart);
    });
  };

  render() {
    return (
      <ProductContext.Provider value={{
        ...this.state,
        handleDetail: this.handleDetail,
        addToCart: this.addToCart,
        openModal: this.openModal,
        closeModal: this.closeModal,
        increment: this.increment,
        decrement: this.decrement,
        removeItem: this.removeItem,
        clearCart: this.clearCart
      }}>
        {/* <button onClick={this.tester}>testear</button> */}
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer };