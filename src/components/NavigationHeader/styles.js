import Styled from "styled-components";

export const Header = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-width: 100px;
  min-height: 100px;
  position: relative;
  z-index: 1;
  box-shadow: 0px 2px 10px 0px rgba(3, 3, 3, 0.1);
  background-color: green;
`;
