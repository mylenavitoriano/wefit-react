"use client";
import styled from "styled-components";
import { Button as ButtonMantine } from "@mantine/core";

export const Container = styled.div`
  background-color: var(--white);
  color: var(--primary);
  border-radius: .25rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ListItems = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TotalPrice = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .btn-finished-request{
    color: #fff;
    font-size: 0.75rem;
    background-color: var(--blue);
    border-color: var(--blue);
    width: 100%;
    text-transform: uppercase;

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

export const Group = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;