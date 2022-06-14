import styled from 'styled-components';
import { Layout } from 'antd';

const { Sider } = Layout;

const darkBlue = '#1a1a27';
const darkBlue50 = '#1e1e2d';
const textColor = '#9899ac';
const iconColor = '#494b74';
const iconColorHover = '#009ef7';

export const SideBar = styled(Sider)`
  div.logo-container {
    padding: 16px;
    background: ${darkBlue};
    margin-bottom: 1.5rem;
  }

  div.logo {
    height: 32px;
    width: 160px;
    background: rgba(255, 255, 255, 0.3);
  }

  &,
  ul.ant-menu,
  div.ant-layout-sider-trigger,
  ul.ant-menu-dark .ant-menu-inline.ant-menu-sub {
    background: ${darkBlue50};
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  ul.ant-menu {
    font-size: 13px !important;
    font-weight: 400;
    font-family: Poppins, Helvetica, 'sans-serif';
    color: ${textColor};

    svg {
      line-height: 1;
      font-size: 18px;
      color: ${iconColor};
    }
  }

  li.ant-menu-item.ant-menu-item-selected {
    transition: color 0.2s ease, background-color 0.2s ease;
    background-color: #1b1b28 !important;
    color: #ffffff;
    padding: 0.65rem 1rem;

    svg {
      color: ${iconColorHover} !important;
    }

    .bullet {
      background-color: ${iconColorHover} !important;
    }
  }

  div.menu-label {
    display: flex;
  }
  span.menu-bullet {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.25rem;
    margin-right: 0.5rem;
  }

  .bullet {
    display: inline-block;
    background-color: ${textColor};
    border-radius: 6px;
    width: 8px;
    height: 4px;
    flex-shrink: 0;
  }

  .bullet-dot {
    width: 4px;
    height: 4px;
    border-radius: 100% !important;
  }
`;
