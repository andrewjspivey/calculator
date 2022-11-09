import React from "react";
import Container from "./components/Container";
import Display from "./components/Display";
import ButtonContainer from "./components/ButtonContainer";
import Button from "./components/Button";

const buttonValues = [
  "C",
  "+-",
  "%",
  "/",
  7,
  8,
  9,
  "X",
  4,
  5,
  6,
  "-",
  1,
  2,
  3,
  "+",
  0,
  ".",
  "=",
];

function App() {
  return (
    <div className="App">
      <Container>
        <Display value={0} />
        <ButtonContainer>
          {buttonValues.map((btn, index) => {
            return (
              <Button
                key={index}
                value={btn}
                onClick={() => console.log({ btn })}
              />
            );
          })}
        </ButtonContainer>
      </Container>
    </div>
  );
}

export default App;
