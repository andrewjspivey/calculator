import React from "react";
import styled from "styled-components";

type Props = {
  value: string | number;
};

const StyledDisplay = styled.div`
  height: 10%;
  width: 100%;
  margin-bottom: 10px;
  padding: 0 10px;
  background-color: #4357692d;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: black;
  color: white;
  font-weight: bold;
  box-sizing: border-box;
`;

const Display = ({ value }: Props) => {
  return <StyledDisplay>{value}</StyledDisplay>;
};

export default Display;
