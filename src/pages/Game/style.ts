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
  align-items: center;

  @media (min-width: 768px) {
    margin-top: 4rem;
  }
`;

export const StyledBorder = styled.div`
  margin: auto;
  width: 80%;
  height: 30%;
  background-color: white;
  border-radius: 3rem;

  @media (min-width: 480px) {
  }
`;

export const BeginGame = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;

  h1 {
    color: white;
    font-size: 4rem;
    text-align: center;

    @media (max-width: 480px) {
      font-size: 3rem;
    }
  }

  button {
    font-size: 2rem;
    margin-top: 2rem;
    @media (max-width: 480px) {
      font-size: 1.5rem;
    }
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

  @media (max-width: 480px) {
    width: 3rem;
    height: 3rem;
    line-height: 3rem;
    font-size: 2.5rem;
  }
`;

export const CorrectAnswer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const HowToPlayConteiner = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 35rem;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  font-size: 1.25rem;
  color: #ffff;

  div {
    width: 100%;
    height: 20rem;
    background: grey;
    padding: 1.5rem;
  }

  button:hover {
    background: #404040;
  }

  button {
    background: none;
    border: none;
    color: red;
    float: right;
    font-size: 2.5rem;
    margin-left: 1rem;
  }

  h1 {
    margin-top: 1.5rem;
  }

  p {
    text-align: center;
  }

  @media (min-width: 480px) {
  }
`;

export const Information = styled.div`
  margin-top: 3rem;
`;
