import styled, { keyframes } from "styled-components";

const write = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
`;

const error = keyframes`
  0% {
    background-color: white;
    color: rgba(132, 13, 10);
  }
  50% {
    background-color: black;
    color: white;
  }
  100% {
    background-color: white;
    color: black;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;

export const ResultInstructions = styled.p`
  color: white;
  font-size: 2.5rem;
  width: 15rem;
  height: 5rem;
  background-color: #1a2a2c;
  text-align: center;
  margin: auto;
  margin-bottom: 1rem;

  @media (min-width: 769px) {
    margin: auto;
    margin-bottom: 1rem;
  }

  @media (max-width: 768px) {
    width: 12rem;
  }

  @media (max-width: 480px) {
    width: 10rem;
  }
`;

export const CorrectAnswer = styled.p`
  display: inline-block;
  font-size: 48px;
  font-weight: bold;
  overflow: hidden;
  white-space: nowrap;
  animation: ${write} 1s ease-in-out forwards;
  text-align: center;
  width: 2rem;
  height: 3.75rem;
  background-color: green;
  color: black;

  @media (max-width: 480px) {
    font-size: 36px;
    width: 1.5rem;
    height: 3rem;
  }
`;

export const WrongAnswer = styled.p`
  display: inline-block;
  font-weight: bold;

  animation: ${error} 0.5s infinite;
  background-color: white;
  color: red;
  text-align: center;
  width: 4rem;
  height: 4rem;
  font-size: 4rem;
`;
