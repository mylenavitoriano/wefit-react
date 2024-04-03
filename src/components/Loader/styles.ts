"use client"
import styled from "styled-components";

export const LoaderComponent = styled.div`
    width: 62px;
    padding: 4px;
    aspect-ratio: 1;
    border-radius: 50%;
    background: #FFF;
    --_m: 
      conic-gradient(#0000 10%,#000),
      linear-gradient(#000 0 0) content-box;
    -webkit-mask: var(--_m);
            mask: var(--_m);
    -webkit-mask-composite: source-out;
            mask-composite: subtract;
    animation: l3 1s infinite linear;
  
    @keyframes l3 {
        to{
            transform: rotate(1turn);
        }
    }
`
