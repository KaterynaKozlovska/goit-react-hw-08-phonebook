import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const FormContainer = styled(Form)`
  margin-bottom: 55px;

  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px 20px;
`;

export const InputWrapper = styled.div`
  position: relative;

  max-width: 100%;
  width: 450px;
  min-width: 200px;

  flex: 1 0 33.333%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
`;

export const Label = styled.label`
  font-size: 22px;
  color: black;
`;

export const Input = styled(Field)`
  padding: 5px;
  width: 100%;

  font-size: 24px;
  color: black;

  background-color: transparent;
  border: 1px solid black;
  border-radius: 10px;

  outline: none;

  &:not(:placeholder-shown)[data-error='false'] {
    color: black;
    border: 1px solid black;
    background-color: rgba(255, 255, 255, 0.1);
  }

  &[data-error='true'] {
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

export const Btn = styled.button`
  padding: 5px 8px;

  font-weight: 500;
  font-size: 24px;
  color: black;

  background-color: transparent;

  border: 1px solid black;
  border-radius: 10px;
  
  cursor: pointer;

  :hover {
    color: black;
    border: 1px solid black);
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

export const ErrorMsg = styled(ErrorMessage)`
  position: absolute;
  bottom: -10%;
  left: 0;

  transform: translateY(100%);

  font-size: 14px;
  color: #e34343;
`;
