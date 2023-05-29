import styled from 'styled-components';

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const Paragraph = styled.p`
  font-size: 14px;
  color: black;
`;

export const UserName = styled.span`
  font-weight: 500;
  color: black;
`;

export const BtnLogOut = styled.button`
  padding: 3px;

  font-size: 14px;
  font-weight: 500;
  color: black;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  :hover {
    color: #fff;
  }
`;
