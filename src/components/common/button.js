import styled from "styled-components";

export default styled.button`
  border: 1px solid #DB9550;
  background: #DB9550;
  border-radius: 20px;
  font-size: 16px;
  font-weight: 800;
  color: #fff;
  padding: 5px 16px;
  cursor: pointer;
  margin: 0px 20px;
  &:disabled {
    cursor: not-allowed;
    background: #efd1b4;
    border: #efd1b4;
  }
`;