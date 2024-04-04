"use client";
import Link from "next/link";
import { BannerImage, Container } from "./styles";
import { Text, Button } from "@mantine/core";

interface RealodProps {
  reload: boolean
}

const ReloadPage = ({reload}: RealodProps) => {

  const handleReload = () => {
    window.location.reload();
  };

  return (
    <Container>
        <Text size="xl" fw={700}>Parece que não há nada por aqui :(</Text>
        <BannerImage  
            src={'/images/vetor-reload-page.svg'}
            height={0}
            width={0}
            sizes="100vw"
            alt={"Ícone Meu Carrinho"}/>
        
        {reload == true ? (
          <Button className="btn-error" onClick={handleReload}>Recarregar página</Button>
        ) : (
          <Link href="./"><Button className="btn-error">Voltar</Button></Link>
        )}
    </Container>
  );
};

export default ReloadPage;