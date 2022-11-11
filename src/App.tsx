import React, { useState } from "react";
import Container from "./components/Container";
import Display from "./components/Display";
import ButtonContainer from "./components/ButtonContainer";
import Button from "./components/Button";
import OperationButton from "./components/OperationButton";

function App() {
  const [currentValue, setCurrentValue] = useState("0");
  const [operation, setOperation] = useState("");
  const [prevValue, setPrevValue] = useState("0");
  const [result, setResult] = useState("");

  const setValue = (value: string) => {
    if (value === "0" && currentValue === "0") return;
    if (currentValue.includes(".") && value === ".") return;

    if (currentValue !== "0") {
      setCurrentValue(`${currentValue}${value}`);
    } else setCurrentValue(`${value}`);
  };

  const clear = () => {
    setCurrentValue("0");
    setOperation("");
    setPrevValue("0");
    setResult("");
  };

  const calculate = () => {
    if (!prevValue || !operation) return;

    const current = parseFloat(currentValue);
    const prev = parseFloat(prevValue);

    let answer;
    switch (operation) {
      case "+":
        answer = prev + current;
        break;
      case "-":
        answer = prev - current;
        break;
      case "X":
        answer = prev * current;
        break;
      case "÷":
        answer = prev / current;
        break;

      default:
        break;
    }
    return answer;
  };

  const equalsHandler = () => {
    const answer = calculate();
    setCurrentValue(`${answer}`);
    setResult(`${answer}`);
    setPrevValue("0");
    setOperation("");
  };

  const operationHandler = (symbol: string) => {
    const res = calculate();
    if (prevValue !== "0") {
      setPrevValue(`${res}`);
      setResult(`${res}`);
    } else {
      setPrevValue(currentValue);
      setResult(`${currentValue}`);
    }
    setCurrentValue("0");
    setOperation(symbol);
  };

  const invertHandler = () => {
    let curr = parseFloat(currentValue);
    if (currentValue !== "0") {
      curr = curr * -1;
      setCurrentValue(curr.toString());
    }
  };

  const percentHandler = () => {
    const current = parseFloat(currentValue);
    setCurrentValue((current / 100).toString());
  };

  return (
    <Container>
      <Display value={result && currentValue === "0" ? result : currentValue} />
      <ButtonContainer>
        <OperationButton onClick={() => clear()} operation={"C"} />
        <OperationButton onClick={() => invertHandler()} operation={"+/-"} />
        <OperationButton onClick={() => percentHandler()} operation={"%"} />
        <OperationButton
          onClick={() => operationHandler("÷")}
          operation={"÷"}
        />
        <Button value={"7"} onClick={() => setValue("7")} />
        <Button value={"8"} onClick={() => setValue("8")} />
        <Button value={"9"} onClick={() => setValue("9")} />
        <OperationButton
          onClick={() => operationHandler("X")}
          operation={"X"}
        />
        <Button value={"4"} onClick={() => setValue("4")} />
        <Button value={"5"} onClick={() => setValue("5")} />
        <Button value={"6"} onClick={() => setValue("6")} />
        <OperationButton
          onClick={() => operationHandler("+")}
          operation={"+"}
        />
        <Button value={"1"} onClick={() => setValue("1")} />
        <Button value={"2"} onClick={() => setValue("2")} />
        <Button value={"3"} onClick={() => setValue("3")} />
        <OperationButton
          onClick={() => operationHandler("-")}
          operation={"-"}
        />
        <Button value={"0"} onClick={() => setValue("0")} />
        <Button value={"."} onClick={() => setValue(".")} />
        <OperationButton onClick={() => equalsHandler()} operation={"="} />
      </ButtonContainer>
    </Container>
  );
}

export default App;
