import React from "react";
import styled from "styled-components";

type Props = {
  children?: React.ReactNode;
};

const StyledButtonContainer = styled.div`
  width: 100%;
  height: 85%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 10px;
`;

const ButtonContainer = ({ children }: Props) => {
  return <StyledButtonContainer>{children}</StyledButtonContainer>;
};

export default ButtonContainer;
