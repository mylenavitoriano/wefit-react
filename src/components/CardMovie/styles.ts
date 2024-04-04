"use client"
import Image from "next/image";
import styled from "styled-components";
import { Button as ButtonMantine } from "@mantine/core";

export const Card = styled.div`
    background-color: var(--white);
    width: 100%;
    height: auto;
    padding: 1rem;
    border-radius: .25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .5rem;
    color: var(--black);

    @media (min-width: 68.75rem) {
        width: 21.125rem;   
    }

    .mantine-Button-root{
      color: #fff;
      font-size: 0.75rem;
      background-color: var(--blue);
      border-color: var(--blue);
      width: 100%;

      &.btn-green{
        background-color: var(--green-button);
        border-color: var(--green-button);

        &:hover{
          background-color: var(--green-button);
        }
      }
      
      .mantine-Button-label{
        .cart-quantity{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.25rem;

            span{
                font-weight: 500;
            }
        }

        display: flex;
        justify-content: center;
        gap: .75rem;
      }

      &:hover{
        background-color: var(--blue);
        filter: brightness(0.95);
        transition: all ease .3s;
      }
    }
`;

export const ImageMovie = styled(Image)`
    height: auto;
    max-height: 11.75rem;
    max-width: 9.1875rem;
    width: 100%;
`;

export const Button = styled(ButtonMantine)`
  

  
`;
