"use client";

import { GlobalMovieProps as Movie} from "@/@types/movie-type";
import { ReactNode,createContext } from "react";

interface CartMovie extends Movie {
    quantity: number
}

interface ICartContext {
    movies: CartMovie[];
    cartTotalPrice: number;
}

const CartContext = createContext<ICartContext>({
    movies: [],
    cartTotalPrice: 0,
});

const CartProvider = ({children}: {children: ReactNode}) => {
    return (
        <CartContext.Provider
            value={{
                movies: [],
                cartTotalPrice: 0,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;