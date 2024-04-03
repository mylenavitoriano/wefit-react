"use client"
import ItemCart from "./Components/ItemCart";
import { ButtonFinish, Container, Group, ListItems, TotalPrice } from "./styles";
import { Text } from "@mantine/core";

export default function Cart() {
  return (
    <Container>
      <ListItems>
        <ItemCart />
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
