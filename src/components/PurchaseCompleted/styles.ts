"use client"
import Image from "next/image";
import styled from "styled-components";
import { Button as ButtonMantine } from "@mantine/core";

export const Container = styled.div`
    width: 100%;
    padding: 4rem;
    border-radius: .25rem;
    background-color: var(--white);
    color: var(--primary);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;

    p{
        max-width: 200px;
        text-align: center;

        @media (min-width: 68.75rem) {
            max-width: fit-content;
        }
    }

    .btn-finished {
        color: #fff;
        font-size: 0.75rem;
        background-color: var(--blue);
        border-color: var(--blue);
        width: 10.8125rem;

        &:hover{
            background-color: var(--blue);
            filter: brightness(0.95);
            transition: all ease .3s;
        }
    }
`;

export const BannerImage = styled(Image)`
    height: auto;
    max-height: 16.5rem;
    max-width: 14.875rem;
    width: 100%;

    @media (min-width: 68.75rem) {
        
        max-width: 18.375rem;
    }
`;