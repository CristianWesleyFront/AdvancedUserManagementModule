import styled from 'styled-components';
import { Button } from 'antd';

export const Item = styled<any>(Button)`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  font-size: 16px;
  width: 32px;
  height: 32px;
  color: #0095e8;
  background-color: #f1faff;
  border-color: #f1faff;
  transition: all 0.1s;

  &:hover {
    transform: scale(1.1);
    color: #0095e8;
    background-color: #f1faff;
    border-color: #f1faff;
  }
`;
