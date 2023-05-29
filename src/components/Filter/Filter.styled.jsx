import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: 25px;
  max-width: 100%;
`;

export const Label = styled.label`
  display: inline-block;
  margin-bottom: 5px;

  font-size: 22px;
  color: black;
`;

export const Input = styled.input`
  padding: 5px;
  width: 100%;

  font-size: 24px;
  color: black;

  background-color: transparent;
  border: 1px solid black;
  border-radius: 10px;

  outline: none;

  &:not(:placeholder-shown) {
    color: black;
    border: 1px solid black;
    background-color: rgba(255, 255, 255, 0.1);
  }

  &:hover,
  &:focus {
    color: black;
    border: 1px solid black;
    background-color: rgba(255, 255, 255, 0.1);
  }
`;
