"use client";

import { GlobalMovieProps as Movie} from "@/@types/movie-type";
import { ReactNode,createContext, useState, useEffect } from "react";

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
    removeAllMoviesFromCart: () => void;
}

export const CartContext = createContext<ICartContext>({
    movies: [],
    cartTotalPrice: 0,
    addMovieToCart: () => {},
    decreaseMovieQuantity: () => {},
    incriseMovieQuantity: () => {},
    removeMovieFromCart: () => {},
    removeAllMoviesFromCart: () => {},
});

const CART_MOVIES_KEY = 'cartMovies';

const saveCartMovies = (movies: CartMovie[]) => {
    localStorage.setItem(CART_MOVIES_KEY, JSON.stringify(movies));
}

const loadCartMovies = (): CartMovie[] => {
  const movies = localStorage.getItem(CART_MOVIES_KEY);
  return movies ? JSON.parse(movies) : [];
}

const CartProvider = ({children}: {children: ReactNode}) => {
    const [movies, setMovies] = useState<CartMovie[]>(loadCartMovies);

    useEffect(() => {
      saveCartMovies(movies);
    }, [movies]);

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

      const removeAllMoviesFromCart = () => {
        setMovies([]);
      };

    return (
        <CartContext.Provider
            value={{
                movies,
                addMovieToCart,
                decreaseMovieQuantity,
                incriseMovieQuantity,
                removeMovieFromCart,
                removeAllMoviesFromCart,
                cartTotalPrice: 0,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;