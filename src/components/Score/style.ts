import styled from "styled-components";

export const CentralDiv = styled.div`
  display: flex;
  justify-content: center;
  height: 3.5rem;
  background: ;
`;

export const ScoreText = styled.h1`
  color: black;
  font-size: 3rem;
  font-family: Time New Roman;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ScoreActual = styled.h1`
  color: black;
  font-size: 3rem;
  margin-left: 3rem;
  font-family: Time New Roman;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-left: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    margin-left: 1rem;
  }
`;
