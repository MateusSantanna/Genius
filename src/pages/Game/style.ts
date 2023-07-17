import styled, { keyframes } from "styled-components";

const blink = keyframes`
  0%, 50% {
    opacity: 1;
  }
  51%, 100% {
    opacity: 0;
  }
`;

export const StyledGame = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  justify-content: center;
`;

export const StyledBorder = styled.div`
  margin: auto;
  width: 30%;
  height: 30%;
  background-color: white;
`;

export const BeginGame = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  margin-top: 8rem;

  h1 {
    color: white;
    font-size: 4rem;
  }

  button {
    font-size: 2rem;
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
