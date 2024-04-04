"use client"
import { useContext } from "react";
import ItemCart from "./Components/ItemCart";
import { ButtonFinish, Container, Group, ListItems, TotalPrice } from "./styles";
import { Text } from "@mantine/core";
import { CartContext } from "@/providers/cart";

export default function Cart() {
  const { movies } = useContext(CartContext);
  console.log(movies);

  return (
    <Container>
      <ListItems>
        {movies.map((movie) => (
          <ItemCart movie={movie} key={movie.id}/>
        ))}
        
      </ListItems>

      <TotalPrice>
        <Group>
          <Text size="sm" fw={700} c="dimmed" tt="uppercase">Total</Text>
          <Text size="xl" fw={700}>R$ 29,99</Text>
        </Group>

        <ButtonFinish>Finalizar Pedido</ButtonFinish>
      </TotalPrice>
    </Container>
  );
}
