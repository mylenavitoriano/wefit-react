"use client";
import { CartContext } from "@/providers/cart";
import { HeaderComponent, ContainerCarrinho } from "./styles";
import { Text } from "@mantine/core";
import Image from "next/image";

import Link from "next/link";
import { useContext } from "react";

const Header = () => {
    const { movies } = useContext(CartContext);

  return (
    <HeaderComponent>
        <Link href="/">
            <Text size="lg" fw={700}>
                WeMovies
            </Text>
        </Link>

        <Link href={"./cart"}>
            <ContainerCarrinho>
                    <div className="texts-cart">
                        <Text size="sm" className="cart">Meu Carrinho</Text>
                        <Text size="xs" c="dimmed" fw={600}>{movies.length} itens</Text>
                    </div>
                
                <Image 
                    src={'/images/icon-shopping-bag.svg'}
                    height={24}
                    width={24}
                    sizes="100vw"
                    alt={"Ícone Meu Carrinho"}/>
            </ContainerCarrinho>
        </Link>
    </HeaderComponent>
  );
};

export default Header;