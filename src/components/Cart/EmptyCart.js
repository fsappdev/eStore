import React from 'react';

export default function EmptyCart() {
   return (
      <div className="container mt-5">
         <div className="col-10 mx-auto text-center text-title">
            <h1>
               <i class="fas fa-shopping-cart"></i>
               tu carrito de compras esta vacio
               <i class="far fa-grin-beam-sweat"></i>
            </h1>
         </div>
      </div>
   );
}
