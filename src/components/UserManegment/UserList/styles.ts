import styled from 'styled-components';

export const TableContainer = styled.div`
  div.ant-table-title {
    padding: 0px;
  }
`;

export const TableHeader = styled.div`
  width: 100%;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  input {
    background-color: #f5f8fa;
    border-color: #f5f8fa;
    color: #5e6278;
    transition: color 0.2s ease, background-color 0.2s ease;

    font-weight: 500;
    min-height: calc(1rem);
    padding: 0.425rem 1.5rem;
    font-size: 1rem;
    border-radius: 0.625rem;
  }

  span.ant-input-group-addon {
    background-color: #f5f8fa;
    border-top-right-radius: 0.625rem;
    border-bottom-right-radius: 0.625rem;
  }

  .ant-input:hover {
    border-color: transparent;
  }

  .ant-input:focus,
  .ant-input-focused {
    border-color: transparent;
    box-shadow: none;
    border-right-width: 0px;
    z-index: inherit;
  }

  button.ant-input-search-button {
    border: none;
    background-color: transparent;
    color: #5e6278;
    transition: color 0.2s ease, background-color 0.2s ease;
  }

  div.Actions {
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      font-weight: 500;
      min-height: 40px;
      text-align: center;
      vertical-align: middle;

      border-radius: 0.475rem;
      border: 1px solid #f1faff;
      padding: 0.55rem 1.5rem;
      box-shadow: none !important;
      color: #009ef7;
      background-color: #f1faff;

      cursor: pointer;
      outline: none !important;
      margin-bottom: 1.25rem !important;

      transition: filter 0.2s;

      &:hover {
        border-color: #009cf7ae;
        filter: brightness(1.1);
      }
    }
  }
`;
