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
`;

export const ImageMovie = styled(Image)`
    height: auto;
    max-width: 4rem;
    width: 100%;
`;

export const DetailsShopping = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

export const Group = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 1rem;
`;

export const GroupButtonsAmount = styled.div`
  display: flex;
  align-items: center;
  gap: .75rem;
  margin-top: .5rem;
`;

export const ButtonQuantity = styled(ButtonMantine)`
  color: var(--blue);
  background-color: transparent;
  border: 2px solid var(--blue);
  width: 1.125rem;
  height: 1.125rem;
  padding: 0;
  border-radius: 50%;

  &:hover{
    background-color: var(--blue);
    transition: all ease .3s;
  }
`;

export const InputQuantity = styled(InputMantine).attrs({
  size: 'xs',
})`
  max-width: 3.75rem;

  .mantine-Input-input{
    text-align: center;
  }
`;

export const GroupSubtotal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

