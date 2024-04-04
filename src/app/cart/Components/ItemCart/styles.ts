"use client";
import Image from "next/image";
import styled from "styled-components";
import { Button as ButtonMantine } from "@mantine/core";
import {Input as InputMantine} from '@mantine/core'

export const ItemCartComponent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
  padding-bottom: 1.3125rem;
  border-bottom: 1px solid #999;
  margin-bottom: 1.3125rem;

  .btn-delete-mobile{
    display: block;

    @media (min-width: 68.75rem) {
      display: none;
    }
  };

  .btn-delete-desktop{
    display: none;

    @media (min-width: 68.75rem) {
      display: block;
    }
  }
`;

export const ImageMovie = styled(Image)`
    height: auto;
    max-width: 4rem;
    width: 100%;

  &.image-mobile{
    display: block;

    @media (min-width: 68.75rem) {
      display: none;
    }
  };

  &.image-desktop{
    display: none;

    @media (min-width: 68.75rem) {
      display: block;
    }
  }
`;

export const DetailsShopping = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (min-width: 68.75rem) {
    display: grid;
    grid-template-columns: 2fr 2fr 3fr 1.5rem;
    width: 100%;
  }
`;

export const GroupProduct = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 1rem;
    width: 100%;
`;

export const GroupPrice = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 1rem;
    align-items: flex-start;
    width: 100%;

    @media (min-width: 68.75rem) {
      flex-direction: column;
      justify-content: center;
      gap: 0;
    }
`;

export const Group = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 1rem;

    @media (min-width: 68.75rem) {
      flex-direction: column;
      justify-content: center;
      gap: 0;
    }
`;

export const GroupButtonsAmount = styled.div`
  display: flex;
  align-items: center;
  gap: .75rem;
  margin-top: .5rem;
  width: 50%;

  .mantine-Input-wrapper{
    max-width: 3.75rem;
  }

  .mantine-Input-input{
    text-align: center;
  }

  .mantine-Button-root{
    color: var(--blue);
    background-color: transparent;
    border: 2px solid var(--blue);
    width: 1.125rem;
    height: 1.125rem;
    padding: 0;
    border-radius: 50%;
    clip-path: circle(50%);

    &:hover{
      background-color: var(--blue);
      color: var(--white);
      transition: all ease .3s;
    }
  }
`;

export const GroupSubtotal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 30%;

  .title{
    display: block;

    @media (min-width: 68.75rem) {
      display: none;
    }
  }
`;

