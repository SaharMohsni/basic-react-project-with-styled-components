import styled from "styled-components";

export const SideBarStyled = styled.div`
  height: calc(100vh - 120px);
  width:40%;
`;

export const OpenedSideBarStyled = styled.div`
  border: solid 1px gray;
  background-color: rgb(201, 220, 255);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;
