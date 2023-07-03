import styled, { keyframes } from "styled-components";

const blink = keyframes`
  0%, 50% {
    opacity: 1;
  }
  51%, 100% {
    opacity: 0;
  }
`;

export const NumberScreen = styled.h1`
  width: 4rem;
  height: 4rem;
  background-color: purple;
  text-align: center;
  margin: auto;
  margin-top: 10px;
  line-height: 4rem;
  font-family: Arial;
  font-size: 3rem;

  &.number-screen {
    animation: ${blink} 0.5s infinite;
  }

  &.white {
    color: white;
  }
`;

export const CorrectAnswer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BeginGame = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  margin-top: 8rem;
`;
