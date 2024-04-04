"use client";

import { GlobalMovieProps as Movie} from "@/@types/movie-type";
import { ReactNode,createContext, useState } from "react";

export interface CartMovie extends Movie {
    quantity: number
}

interface ICartContext {
    movies: CartMovie[];
    cartTotalPrice: number;
    addMovieToCart: (movie: CartMovie) => void;
    decreaseMovieQuantity: (movieId: number) => void;
    incriseMovieQuantity: (movieId: number) => void;
    removeMovieFromCart: (movieId: number) => void;
}

export const CartContext = createContext<ICartContext>({
    movies: [],
    cartTotalPrice: 0,
    addMovieToCart: () => {},
    decreaseMovieQuantity: () => {},
    incriseMovieQuantity: () => {},
    removeMovieFromCart: () => {},
});

const CartProvider = ({children}: {children: ReactNode}) => {
    const [movies, setMovies] = useState<CartMovie[]>([]);

    const addMovieToCart = (movie: CartMovie) => {
        const movieIsAlreadyOnCart = movies.some(cartMovie => cartMovie.id === movie.id)

        if(movieIsAlreadyOnCart){
            setMovies((prev) => 
            prev.map((cartMovie) => {
            if(cartMovie.id === movie.id){
                return {
                ... cartMovie,
                quantity: cartMovie.quantity + movie.quantity,
                };
            }

            return cartMovie
            }) 
        )

        return;
        } 

        setMovies((prev) => [...prev, movie]);   
    } 

    const decreaseMovieQuantity = (movieId: number) => {
        setMovies(prev => 
          prev.map(cartMovie => {
          if(cartMovie.id === movieId){
            return {
              ... cartMovie,
              quantity: cartMovie.quantity - 1,
            }
          }
    
          return cartMovie;
        }).filter(cartMovie => cartMovie.quantity > 0));
      }
    
      const incriseMovieQuantity = (movieId: number) => {
        setMovies(prev => 
          prev.map(cartMovie => {
          if(cartMovie.id === movieId){
            return {
              ... cartMovie,
              quantity: cartMovie.quantity + 1,
            }
          }
    
          return cartMovie;
        }));
      }
    
      const removeMovieFromCart = (movieId: number) => {
        setMovies((prev) => 
          prev.filter((cartMovie) => cartMovie.id !== movieId)
        );
      };

    return (
        <CartContext.Provider
            value={{
                movies,
                addMovieToCart,
                decreaseMovieQuantity,
                incriseMovieQuantity,
                removeMovieFromCart,
                cartTotalPrice: 0,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;