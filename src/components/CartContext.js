import {Children, createContext} from 'react';
import { useState } from 'react';

export const CartContext = createContext();

const CartContextProvider = (props) => {
    const [cartList, setCartList] = useState ([]);

    const addToCart = (item) => {
        setCartList(item)
    }

    return (
        <CartContext.Provider value={cartList}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;