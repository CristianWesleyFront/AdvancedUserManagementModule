import styled from 'styled-components';
import { Breadcrumb } from 'antd';

export const BreadcrumbComponent = styled(Breadcrumb)`
  display: flex;
  align-items: center;

  background-color: rgb(255, 255, 255);
  padding: 0px 30px;
  margin: 0px;

  border-top-color: rgb(239, 242, 245);
  border-top-style: solid;
  border-top-width: 1px;
  box-shadow: rgba(82, 63, 105, 0.05) 0px 10px 30px 0px;
  box-sizing: border-box;

  color: rgb(24, 28, 50);
  line-height: 19.5px;
  font-family: Poppins, Helvetica, 'sans-serif';
  font-size: 13px;
  font-weight: 400;
  height: 55px;

  text-align: start;
  text-size-adjust: 100%;

  ol {
    font-family: Poppins, Helvetica, 'sans-serif';
    display: flex;
    align-items: center;

    div.ant-divider {
      height: 20px;
      background-color: #e4e6ef;
      margin-right: 1rem !important;
      margin-left: 1rem !important;
    }

    h4.ant-typography {
      margin-bottom: 0px;
    }
  }
`;
