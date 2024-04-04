"use client"
import { useContext, useState, useEffect } from "react";
import ItemCart from "./Components/ItemCart";
import { Container, Group, ListItems, TitleTableItems, TotalPrice } from "./styles";
import { Text, Button } from "@mantine/core";
import { CartContext } from "@/providers/cart";
import ReloadPage from "@/components/RealodPage";
import PurchaseCompleted from "@/components/PurchaseCompleted";

export default function Cart() {
  const { movies, removeAllMoviesFromCart } = useContext(CartContext);

  const [totalPriceMoviesCart, setTotalPriceMoviesCart] = useState(0);
  const [purchaseCompleted, setPurchaseCompleted] = useState(false);

  useEffect(() => {
      let total = 0;
      movies.forEach(item => {
          total += (item.quantity * item.price);
      });
      setTotalPriceMoviesCart(total);
  }, [movies]);

  const handleFinishedRequest = () => {
    removeAllMoviesFromCart();
    setPurchaseCompleted(true);
  }

  return (
    <>
      {movies.length > 0 && purchaseCompleted == false ? ( 
        <Container>
          <TitleTableItems>
            <Text fw={700} size="xs" c="dimmed" tt="uppercase">Produto</Text>
            <Text fw={700} size="xs" c="dimmed" tt="uppercase">Qtd</Text>
            <Text fw={700} size="xs" c="dimmed" tt="uppercase">Subtotal</Text>
            <div></div>
          </TitleTableItems>

          <ListItems>
            {movies.map((movie) => (
              <ItemCart movie={movie} key={movie.id}/>
            ))}
            
          </ListItems>

          <TotalPrice>
            <Group>
              <Text size="sm" fw={700} c="dimmed" tt="uppercase">Total</Text>
              <Text size="xl" fw={700}>{totalPriceMoviesCart.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</Text>
            </Group>

            <Button className="btn-finished-request" onClick={handleFinishedRequest}>Finalizar Pedido</Button>
          </TotalPrice>
        </Container>
        ) : purchaseCompleted == true ? (
          <PurchaseCompleted />
        ) : (
          <ReloadPage reload={false}/>
        )}
    </>
  );
}
