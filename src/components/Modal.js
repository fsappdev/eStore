import React, { Component } from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../Context';
import { ButtonContainer } from './Button';
import { Link } from 'react-router-dom';

export default class Modal extends Component {
   render() {
      return (
         <ProductConsumer>
            {(value) => {
               const { modalOpen, closeModal } = value;
               const { img, title, price } = value.modalProduct;
               if (!modalOpen) {
                  return null;
               } else {
                  return (
                     <ModalContainer>
                        <div className="container">
                           <div className="row">
                              <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize">
                                 <h5 className="mt-3 mb-3"><i className="fa fa-thumbs-up"></i>
                                    item agregado al carrito </h5>
                                 <img src={img} className="img-fluid" alt="product" />
                                 <h5>{title}</h5>
                                 <h5 className="text-muted">precio: $ {price}</h5>
                                 <Link to='/'>
                                    <ButtonContainer onClick={() => closeModal()}>
                                       vuelve a la tienda
                                    </ButtonContainer>
                                 </Link>
                                 <Link to='/cart'>
                                    <ButtonContainer onClick={() => closeModal()}>
                                       ve al carrito
                                    </ButtonContainer>
                                 </Link>
                              </div>
                           </div>
                        </div>
                     </ModalContainer>
                  );
               }
            }}
         </ProductConsumer>
      )
   }
}

const ModalContainer = styled.div`
   /* -moz-border-radius: 6px 6px 6px 6px;
   -webkit-border-radius: 6px;  
   border-radius: 0.8rem 0.8rem 0.8rem 0.8rem; */
   position: fixed;
   top:0;
   left:0;
   right: 0;   
   bottom: 0;
   background: rgba(0, 0, 0, 0.3);
   display: flex;
   align-items: center;
   justify-content: center;
   #modal {
      border-radius: 0.5rem 0.5rem 0.5rem 0.5rem;
      background: var(--mainWhite);
   }
`;