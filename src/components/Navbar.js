import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';
import { ButtonContainer } from './Button';

export default class Navbar extends Component {
   render() {
      return (
         <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
            {/*https://www.iconfinder.com/icons/1243689/call_phone_icon
               Creative Commons (Attribution 3.0 Unported);
               https://www.iconfinder.com/Makoto_msk*/}
            <Link to="/">
               <img src={logo} alt="store" className="navbar-brand"></img>
            </Link>
            <ul className="navbar-nav align-items-center">
               <li className="nav-item ml-5">
                  <Link to="/" /* className="nav-link" */>
                     <ButtonContainer>
                        <span className="mr-2">
                           <i class="fas fa-shopping-bag" />
                           Productos
                         </span>
                     </ButtonContainer>
                  </Link>
               </li>
            </ul>

            <Link to='/cart' className="ml-auto">
               <ButtonContainer>
                  <span className="mr-2">
                     <i className="fas fa-cart-plus" />
                     Mi carrito
                  </span>
               </ButtonContainer>
            </Link>

         </NavWrapper>
      );
   }
}

const NavWrapper = styled.nav`
/* background: var(--mainBlue); */
background: #41295a;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #2F0743, #41295a);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #2F0743, #41295a); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

/* .nav-link{
   color: var(--mainWhite) !important;
   font-size:1.3rem;
  /*  text-transform: capitalize; */
} */
`;
