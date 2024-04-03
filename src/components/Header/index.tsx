"use client";
import { HeaderComponent, ContainerCarrinho } from "./styles";
import { Text } from "@mantine/core";
import Image from "next/image";

import Link from "next/link";

const Header = () => {

  return (
    <HeaderComponent>
        <Link href="/">
            <Text size="lg" fw={700}>
                WeMovies
            </Text>
        </Link>

        <ContainerCarrinho>
            <div className="texts-cart">
                <Text size="sm" className="cart">Meu Carrinho</Text>
                <Text size="xs" c="dimmed" fw={600}>0 itens</Text>
            </div>
            <Image 
                src={'/images/icon-shopping-bag.svg'}
                height={24}
                width={24}
                sizes="100vw"
                alt={"Ícone Meu Carrinho"}/>
        </ContainerCarrinho>
    </HeaderComponent>
  );
};

export default Header;