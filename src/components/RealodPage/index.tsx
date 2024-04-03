"use client";
import { BannerImage, Button, Container } from "./styles";
import { Text } from "@mantine/core";

const ReloadPage = () => {
  return (
    <Container>
        <Text size="xl" fw={700}>Parece que não há nada por aqui :(</Text>
        <BannerImage  
            src={'/images/vetor-reload-page.svg'}
            height={0}
            width={0}
            sizes="100vw"
            alt={"Ícone Meu Carrinho"}/>
        
        <Button>Recarregar página</Button>
    </Container>
  );
};

export default ReloadPage;