"use client";
import { CartContext, CartMovie } from "@/providers/cart";
import { DetailsShopping, Group, GroupButtonsAmount, GroupPrice, GroupProduct, GroupSubtotal, ImageMovie, ItemCartComponent } from "./styles";
import { Text, CloseButton, Input, Button } from "@mantine/core";

import { FaTrash } from "react-icons/fa";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { useContext } from "react";

interface CartItemprops {
  movie: CartMovie
}

const ItemCart = ({ movie }: CartItemprops) => {
  const { decreaseMovieQuantity, incriseMovieQuantity, removeMovieFromCart } = useContext(CartContext);

  const handleDecreaseMovieQuantityClick = () => {
      decreaseMovieQuantity(movie.id)
  }

  const handleIncreaseMovieQuantityClick = () => {
      incriseMovieQuantity(movie.id)
  }

  const removeMovieQuantityClick = () => {
      removeMovieFromCart(movie.id)
  }

  return (
    <ItemCartComponent >
        <ImageMovie 
          src={movie.image}
          height={0}
          width={0}
          sizes="100vw"
          alt={movie.title}
          className="image-mobile"
        />

        <DetailsShopping>
          <GroupProduct>
            <ImageMovie 
              src={movie.image}
              height={0}
              width={0}
              sizes="100vw"
              alt={movie.title}
              className="image-desktop"
            />
          
            <GroupPrice>
              <Text fw={700}>{movie.title}</Text>
              <Group>
                <Text fw={700}>{(movie.price).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</Text>
                <CloseButton
                  className="btn-delete-mobile"
                  icon={<FaTrash size={16} color={"#009EDD"}/>}
                  aria-label="Excluir item"
                  onClick={removeMovieQuantityClick}
                />
              </Group>
            </GroupPrice>
          </GroupProduct>

          <GroupButtonsAmount>
            <Button onClick={handleDecreaseMovieQuantityClick}>
              <FaMinus size={12} />
            </Button>

            <Input size={'xs'} type="number" value={movie.quantity}/>

            <Button onClick={handleIncreaseMovieQuantityClick}>
              <FaPlus size={12} />
            </Button>
          </GroupButtonsAmount>

          <GroupSubtotal>
            <Text fw={700} size="xs" c="dimmed" tt="uppercase" className="title">Subtotal</Text>
            <Text fw={700}>{(movie.price * movie.quantity).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</Text>
          </GroupSubtotal>

          <Group>
            <CloseButton
              className="btn-delete-desktop"
              icon={<FaTrash size={16} color={"#009EDD"}/>}
              aria-label="Excluir item"
              onClick={removeMovieQuantityClick}
            />
          </Group>

        </DetailsShopping>
      </ItemCartComponent>
  );
};

export default ItemCart;