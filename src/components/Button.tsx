import React, { MouseEventHandler } from "react";
import styled from "styled-components";

interface Props {
  value: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const StyledButton = styled.button`
  background-color: darkgray;
  color: white;
  font-weight: bold;
  cursor: pointer;
  border-radius: 10px;
  border: none;
  outline: none;
`;

const Button = ({ value, onClick }: Props) => {
  return <StyledButton onClick={onClick}>{value}</StyledButton>;
};

export default Button;
