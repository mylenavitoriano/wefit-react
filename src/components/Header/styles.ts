"use client";
import styled from "styled-components";

export const HeaderComponent = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 0;
`

export const ContainerCarrinho = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    cursor: pointer;

    .texts-cart{
        display: flex;
        flex-direction: column;
        align-items: flex-end;

        .cart{
            display: none;

            @media (min-width: 68.75rem) {
                display: block;
            }
        }
    }
`