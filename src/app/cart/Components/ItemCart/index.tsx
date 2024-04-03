"use client";
import { ButtonQuantity, DetailsShopping, Group, GroupButtonsAmount, GroupSubtotal, ImageMovie, InputQuantity, ItemCartComponent } from "./styles";
import { Text, CloseButton, Input } from "@mantine/core";

import { FaTrash } from "react-icons/fa";
import { FaPlus, FaMinus } from "react-icons/fa6";

interface MovieProps {
  id: number;
  title: string;
  price: number;
  image: string;
}

const ItemCart = () => {
  return (
    <ItemCartComponent>
        <ImageMovie 
          src={'https://wefit-react-web-test.s3.amazonaws.com/spider-man.png'}
          height={0}
          width={0}
          sizes="100vw"
          alt={'Homem Aranha'}
        />

        <DetailsShopping>
          <Group>
            <Text fw={700}>Homem Aranha</Text>

            <Group>
              <Text fw={700}>R$ 29,99</Text>
              <CloseButton
                icon={<FaTrash size={16} color={"#009EDD"}/>}
                aria-label="Clear input"
              />
            </Group>
          </Group>

          <Group>
            <GroupButtonsAmount>
              <ButtonQuantity>
                <FaMinus size={12} />
              </ButtonQuantity>

              <InputQuantity />

              <ButtonQuantity>
                <FaPlus size={12} />
              </ButtonQuantity>
            </GroupButtonsAmount>

            <GroupSubtotal>
              <Text fw={700} size="xs" c="dimmed" tt="uppercase">Subtotal</Text>
              <Text fw={700}>R$ 29,99</Text>
            </GroupSubtotal>
          </Group>
        </DetailsShopping>
      </ItemCartComponent>
  );
};

export default ItemCart;