"use client";
import { CartContext } from "@/providers/cart";
import { HeaderComponent, ContainerCarrinho } from "./styles";
import { Text } from "@mantine/core";
import Image from "next/image";

import Link from "next/link";
import { useContext, useState, useEffect } from "react";

const Header = () => {
    const { movies } = useContext(CartContext);
    const [totalMoviesCart, setTotalMoviesCart] = useState(0);

    useEffect(() => {
        // Calcula o total de itens do carrinho
        let total = 0;
        movies.forEach(item => {
            total += item.quantity;
        });
        setTotalMoviesCart(total);
    }, [movies]); // Executa o useEffect sempre que a lista de filmes no carrinho mudar


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
                            <Text size="xs" c="dimmed" fw={600}>{totalMoviesCart} itens</Text>
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