import React from "react";
import styled from "styled-components";

interface Props {
  operation: string;
  onClick: () => void;
}

const StyledOperationButton = styled.button`
  background-color: orange;
  color: white;
  font-weight: bold;
  cursor: pointer;
  border-radius: 10px;
  border: none;
  outline: none;
`;

const OperationButton = ({ operation, onClick }: Props) => {
  return (
    <StyledOperationButton onClick={() => onClick()}>
      {operation}
    </StyledOperationButton>
  );
};

export default OperationButton;
