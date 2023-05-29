import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  margin-bottom: 25px;

  font-weight: 500;
  font-size: 24px;
  color: black;
`;

export const InputWrapper = styled.div`
  position: relative;

  margin-bottom: 30px;
  max-width: 100%;
  width: 300px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

export const Label = styled.label`
  font-size: 22px;
  color: black;
`;

export const Input = styled(Field)`
  padding: 5px;
  width: 100%;

  font-size: 20px;
  color: black;

  background-color: transparent;
  border: 1px solid black;
  border-radius: 10px;

  outline: none;

  &[data-error='true'] {
    color: black;
    border: 1px solid black;
    background-color: rgba(255, 255, 255, 0.1);
  }

  &[type='password'] {
    padding-right: 65px;
  }
`;

export const Btn = styled.button`
  padding: 6px 12px;

  font-weight: 700;
  font-size: 24px;
  color: black;

  background-color: transparent;

  border: 1px solid black;
  border-radius: 10px;

  cursor: pointer;
`;

export const ErrorMsg = styled(ErrorMessage)`
  position: absolute;
  bottom: -10%;
  left: 0;

  transform: translateY(100%);

  font-size: 14px;
  color: #e34343;
`;

export const PassWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const ShowPassBtn = styled.button`
  position: absolute;
  top: 50%;
  right: 15px;

  transform: translateY(-50%);

  padding: 5px;
  width: 23px;
  height: 23px;

  background-color: transparent;

  border: 1px solid black;
  border-radius: 7px;

  cursor: pointer;

  &:hover {
    border: 1px solid black;
  }

  &:hover > svg {
    fill: black;
  }
`;
