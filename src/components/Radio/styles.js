import Styled from 'styled-components';

export const Label = Styled.label`
  flex-shrink: 1;
  margin: 10px;
  display: block;
  position: relative;
  border-radius: 10px;
  border: 1px solid rgba(95, 173, 86, 1);
  background-color: rgba(255, 255, 255, 1);
`;

export const Toggle = Styled.div`
  display: none;
  position: absolute;
  top: 4px;
  left: 4px;
  width: calc(100% - 8px);
  height: calc(100% - 8px);
  border-radius: 6px;
  background-color: rgba(95, 173, 86, 1);
  
  ${(props) =>
    props.checked &&
    `
    display: block;
  `}
`;

export const Input = Styled.input`
  position: absolute;
  opacity: 0;
  visibility: hidden;
  width: 1px;
  height: 1px;
`;
