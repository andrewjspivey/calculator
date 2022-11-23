import React from "react";
import styled from "styled-components";

interface Props {
  operation: string;
  onClick: () => void;
  selected?: string;
}

const StyledOperationButton = styled.button`
  background-color: ${(props: Props) =>
    props.selected === props.operation ? "white" : "orange"};
  color: ${(props: Props) =>
    props.selected === props.operation ? "orange" : "white"};
  font-size: 1.5em;
  font-weight: bold;
  cursor: pointer;
  border-radius: 10px;
  border: none;
  outline: none;
`;

const OperationButton = ({ operation, onClick, selected }: Props) => {
  return (
    <StyledOperationButton
      onClick={onClick}
      selected={selected}
      operation={operation}
    >
      {operation}
    </StyledOperationButton>
  );
};

export default OperationButton;
