import React from 'react';
import { useContext } from 'react';
import { CartContext } from './CartContext';

const Cart = () => {
    const test = useContext(CartContext)
    console.log(test)
  return (
    <>
    <h1>Hi im cart</h1>
    <hr/>
    <ul>
    {
      test.length === 0 
      ? <li>No hay productos en el carro</li>
      : test.map(item => <li>{item.name}</li>)
    }
    </ul>
    </>
  )
}

export default Cart