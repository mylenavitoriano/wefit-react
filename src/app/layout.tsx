import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { MantineProvider } from "@mantine/core";
import { GlobalStyles } from "../styles/global";

import "@mantine/core/styles.css";
import Header from "@/components/Header";
import StyledComponentsRegistry from "@/libs/styled-components/registry";
import CartProvider from "@/providers/cart";

const open_sans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Teste Front React WeFit",
  description: "Teste Front React WeFit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={open_sans.className}>
        <MantineProvider>
          <StyledComponentsRegistry>
            <GlobalStyles />
            <CartProvider>
              <div className="page">
                <Header />
                <main>{children}</main>
              </div>
            </CartProvider>
          </StyledComponentsRegistry>
        </MantineProvider>
      </body>
    </html>
  );
}
