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
}
50% {
  background-color: red;
}
100% {
  background-color: white;
}
`;

export const ResultInstructions = styled.p`
  color: black;
  font-size: 2rem;
  width: 15rem;
  height: 5rem;
  background-color: green;
  text-align: center;
  margin: auto;
  margin-bottom: 1rem;
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
`;

export const WrongAnswer = styled.p`
  display: inline-block;
  font-size: 5rem;
  font-weight: bold;
  overflow: hidden;
  white-space: nowrap;
  animation: ${error} 0.5s infinite;
  background-color: white;
  text-align: center;
  width: 5rem;
  height: 5rem;
  color: white;
  margin-left: 9rem;
  margin-bottom: 1rem;
`;
