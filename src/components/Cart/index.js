import React from 'react';
import CartHeader from '../CartHeader';
import Product from '../Product';

import './index.css';

let total=0;
const Cart = ({products, onDeleteProduct, total}) => {
  const calcTotal = () => {
    let total = 0;
    for (let product of products){
        total += product.price;
    }
    return total;
  }

  return(
  <div className="Cart">
    <CartHeader title="Carrinho" total={calcTotal()}/>

    {
      products.map( product => (
        <Product
         key = {product.id}
         name={product.name}
         price = {product.price}
         onDelete = {() => onDeleteProduct(product.id)}
         />
      ))
    }
  </div>)
}

export default Cart;
