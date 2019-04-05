import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';

import { ProductConsumer } from '../Context';

export default class ProductList extends Component {

   render() {
      return (
         <React.Fragment>
            <div className="py-5">
               <div className="container">
                  <Title name="nuestros" title="productos" />
                  <div className="row">
                     <ProductConsumer>
                        {value => {
                           return value.products.map(producto => {
                              return <Product key={producto.id} producto={producto} />;
                           });
                        }}
                     </ProductConsumer>
                  </div>
               </div>
            </div>
         </React.Fragment>
         //<Product />
      );
   }
}
