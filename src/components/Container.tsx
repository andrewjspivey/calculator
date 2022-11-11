import React from "react";
import styled from "styled-components";

type Props = {
  children?: React.ReactNode;
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: grey;
  width: 400px;
  height: 600px;
`;

const Container = ({ children }: Props) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
