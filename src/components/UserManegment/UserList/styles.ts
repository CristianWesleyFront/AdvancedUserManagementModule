import styled from 'styled-components';

export const TableContainer = styled.div`
  max-width: 1320px;
  padding: 0 30px;
  margin-right: auto;
  margin-left: auto;
  border: 0;
  box-shadow: 0px 0px 20px 0px rgb(76 87 125 / 2%);
  border-radius: 0.625rem;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;

  .ant-table-thead > tr > th {
    background-color: transparent;
    border: 0 rgb(239, 242, 245) dashed;
    border-bottom-width: 1px;
    color: rgb(161, 165, 183);
    font-family: Poppins, Helvetica, 'sans-serif';
    font-size: 12.35px;
    font-weight: 600;
    height: 19.5px;
    line-height: 18.525px;
  }

  .ant-table-tbody > tr > td {
    border-bottom: 1px dashed rgb(239, 242, 245);
    transition: background 0.3s;
  }

  td.ant-table-cell {
    color: rgb(126, 130, 153);
    font-family: Poppins, Helvetica, 'sans-serif';
    font-size: 13px;
    font-weight: 500;
  }

  div.ant-table-title {
    padding: 0px;
  }

  ul.ant-table-pagination.ant-pagination {
    margin: 16px 8px;
  }

  button.ant-pagination-item-link,
  li.ant-pagination-next,
  .ant-pagination-total-text {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'poppins' !important;
  }

  li.ant-pagination-item {
    font-family: 'poppins' !important;
  }

  li.ant-pagination-item-active {
    color: #0095e8;
    background-color: #f1faff;
    border-color: #f1faff;
    font-weight: 600;
  }
`;

export const TableHeader = styled.div`
  width: 100%;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
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

export const UserListUser = styled.div`
  .ant-avatar {
    width: 50px;
    height: 50px;
  }

  .ant-list-item-meta-title > a {
    color: #3f4254 !important;
    transition: color 0.2s ease, background-color 0.2s ease;
    text-decoration: none;
    font-family: Poppins, Helvetica, 'sans-serif';
    font-size: 14px;
    font-weight: 500;
  }

  .ant-list-item-meta-description {
    color: rgb(126, 130, 153);
    font-family: Poppins, Helvetica, 'sans-serif';
    font-size: 13px;
    font-weight: 500;
  }
`;
