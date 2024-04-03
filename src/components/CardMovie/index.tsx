"use client";
import { Button, Card, ImageMovie } from "./styles";
import { Text } from "@mantine/core";
import { MdOutlineAddShoppingCart } from "react-icons/md";

interface MovieProps {
  id: number;
  title: string;
  price: number;
  image: string;
}

const CardMovie = ({ movie }: {movie: MovieProps} ) => {
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

      <Button>
        <div className="cart-quantity">
          <MdOutlineAddShoppingCart size={16} />
          <Text span size="sm">0</Text>
        </div>
        
        <Text fw={700} size="sm">ADICIONAR AO CARRINHO</Text>
      </Button>
    </Card>
  );
};

export default CardMovie;