import React, { Component } from 'react';
import { ProductConsumer } from '../Context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';

export default class Details extends Component {
   render() {
      return (
         <ProductConsumer>
            {value => {
               //console.log(value.detailProduct);
               const { id, company, img, info, price, title, inCart } = value.detailProduct;
               return (
                  <div className="container py-5">
                     {/*titulo */}
                     <div className="row">
                        <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                           <h1>{title}</h1>
                        </div>
                     </div>
                     {/*fin*/}
                     {/*product info*/}
                     <div className="row">
                        <div className="col-10 mx-auto col-md-6 my-3">
                           <img src={img} className="img-fluid" alt="product" />
                        </div>
                        {/* product text */}
                        <div className="col-10 mx-auto col-md-6 my-3">
                           <h2>model: {title}</h2>
                           <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                              made by : <span className="text-uppercase">{company}</span>
                           </h4>
                           <h4 className="text-blue">
                              <strong>
                                 precio : <span>$</span>{price}
                              </strong>
                           </h4>
                           <p className="text-capitalize font-weight-bold mt-3 mb-0">
                              some info about product:
                           </p>
                           <p className="text-muted lead">
                              {info}
                           </p>
                           <p className="text-muted lead">{info}</p>
                           {/* botones */}
                           <div>
                              <Link to="/">
                                 <ButtonContainer>
                                    Volver a Productos
                                 </ButtonContainer >
                              </Link>
                              <ButtonContainer cart
                                 disabled={inCart ? true : false}
                                 onClick={() => {
                                    value.addToCart(id);
                                    value.openModal(id);
                                 }}>
                                 {inCart ? "en el carrito" : "añadir al carrito"}
                              </ButtonContainer>
                           </div>
                        </div>
                     </div>
                  </div>
               )
            }}
         </ProductConsumer>
      )
   }
}