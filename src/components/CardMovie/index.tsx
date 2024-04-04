"use client";
import { GlobalMovieProps } from "@/@types/movie-type";
import { Card, ImageMovie } from "./styles";
import { Text,Button } from "@mantine/core";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "@/providers/cart";

interface MovieProps{
  movie: GlobalMovieProps
}

const CardMovie = ({movie}: MovieProps) => {
  const [quantity, setQuantity] = useState(1);
  const [quantityTotal, setQuantityTotal] = useState(0);
  const { addMovieToCart, movies } = useContext(CartContext);

  const handleAddToCartClick = () => {
    addMovieToCart({...movie, quantity});
  }

  useEffect(() => {
    const movieIsAlreadyOnCart = movies.some(cartMovie => cartMovie.id === movie.id);
    if(movieIsAlreadyOnCart){
      const resultMovieFind = movies.find((cartMovie) => cartMovie.id === movie.id);
      if(resultMovieFind != undefined){
        setQuantityTotal(resultMovieFind.quantity);
      }
    }
  }, [movie, movies])

  return (
    <Card>
      <ImageMovie 
        src={movie.image}
        height={0}
        width={0}
        sizes="100vw"
        alt={movie.title}
      />

      <Text fw={700} size="sm">{movie.title}</Text>
      <Text fw={700}>{(movie.price).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</Text>

      <Button onClick={handleAddToCartClick} className={quantityTotal > 0 ? "btn-green" : ""}>
        <div className="cart-quantity">
          <MdOutlineAddShoppingCart size={16} />
          <Text span size="sm">{quantityTotal}</Text>
        </div>
        
        <Text fw={700} size="sm">ADICIONAR AO CARRINHO</Text>
      </Button>
    </Card>
  );
};

export default CardMovie;