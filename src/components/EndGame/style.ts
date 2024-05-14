import styled from "styled-components";

export const GameOverConteiner = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;

  height: 35rem;
  background: green;
`;

export const GameOverProps = styled.div`
  text-align: center;

  p {
    margin-top: 2rem;
  }

  h1 {
    font-size: xxx-large;
    margin-top: 2rem;
  }

  button {
    margin-top: 2rem;
  }
`;

export const EndGameAdvise = styled.div`
  width: 4rem;
  height: 2rem;
  display: inline;
  h1 {
    font-family: Arial;
  }
`;
