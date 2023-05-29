import styled from 'styled-components';

export const Item = styled.li`
  padding: 10px;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 20px;

  border: 1px solid black;
  border-radius: 10px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  flex: 1 0 auto;
  gap: 20px;
`;

export const Name = styled.span`
  text-align: left;
  font-size: 18px;
  color: black;
`;

export const Number = styled.a`
  position: relative;

  font-weight: 500;
  font-size: 18px;
  text-align: right;
  color: black;
  text-decoration: none;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;

    width: 100%;
    height: 2px;

    transform: scaleX(0);
    transform-origin: bottom right;

    background-color: #fff;
    border-radius: 5px;
  }

  &:hover::after,
  &:focus::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  :hover,
  :focus {
    color: black;
  }
`;

export const Btn = styled.button`
  padding: 8px 18px;

  font-weight: 500;
  font-size: 18px;
  color: black;

  background-color: transparent;

  border: 1px solid black;
  border-radius: 10px;

  cursor: pointer;

  :hover {
    color: black;
    border: 1px solid black;
    background-color: rgba(255, 255, 255, 0.2);
  }
`;
