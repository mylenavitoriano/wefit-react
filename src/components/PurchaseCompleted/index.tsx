"use client";
import Link from "next/link";
import { BannerImage, Container } from "./styles";
import { Text, Button } from "@mantine/core";

const PurchaseCompleted = () => {
  return (
    <Container>
        <Text size="xl" fw={700}>Compra realizaa com sucesso!</Text>
        <BannerImage  
            src={'/images/vetor-purchase-completed.svg'}
            height={0}
            width={0}
            sizes="100vw"
            alt={"Ícone Meu Carrinho"}/>
        
        <Link href="./">
          <Button className="btn-finished">Voltar</Button>
        </Link>
    </Container>
  );
};

export default PurchaseCompleted;