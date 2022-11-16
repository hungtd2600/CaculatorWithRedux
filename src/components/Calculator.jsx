import React from "react";
import Button from "./Button";
import CalculatorTitle from "./CalculatorTilte";
import OutputScreen from "./OutputScreen";
import History from "./History";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteCacul,
  caculSelector,
  resultSelector,
  clearCacul,
  totalCacul,
  defaultCacul,
  historySelector,
  clearHistory,
} from "../features/CaculatorSlice";

const Calculator = () => {
  let cacul = useSelector(caculSelector);
  let result = useSelector(resultSelector);
  let historys = useSelector(historySelector);
  const dispatch = useDispatch();

  const handleClick = (value) => {
    switch (value) {
      case "=": {
        dispatch(totalCacul(value));
        break;
      }
      case "Delete": {
        dispatch(deleteCacul(value));
        break;
      }
      case "Clear": {
        dispatch(clearCacul(value));
        break;
      }
      case "ClearHistory": {
        dispatch(clearHistory(value));
        break;
      }
      default: {
        dispatch(defaultCacul(value));
      }
    }
  };

  return (
    <div className="wrapper">
      <div className="frame">
        <CalculatorTitle title="Calculator" />
        <div className="mainCalc">
          <OutputScreen question={cacul} answer={result} />
          <div className="button-row">
            <Button
              className="btnaction"
              label={"Clear"}
              handleClick={handleClick.bind(this, "Clear")}
            />
            <Button
              className="btnaction"
              label={"Delete"}
              handleClick={handleClick.bind(this, "Delete")}
            />
            <Button
              className="btnaction"
              label={"/"}
              handleClick={handleClick.bind(this, "/")}
            />
          </div>
          <div className="button-row">
            <Button label={"8"} handleClick={handleClick.bind(this, "8")} />
            <Button label={"9"} handleClick={handleClick.bind(this, "9")} />
            <Button
              className="btnaction"
              label={"+"}
              handleClick={handleClick.bind(this, "+")}
            />
          </div>
          <div className="button-row">
            <Button label={"6"} handleClick={handleClick.bind(this, "6")} />
            <Button label={"7"} handleClick={handleClick.bind(this, "7")} />
            <Button
              className="btnaction"
              label={"*"}
              handleClick={handleClick.bind(this, "*")}
            />
          </div>
          <div className="button-row">
            <Button label={"4"} handleClick={handleClick.bind(this, "4")} />
            <Button label={"5"} handleClick={handleClick.bind(this, "5")} />
            <Button
              className="btnaction"
              label={"-"}
              handleClick={handleClick.bind(this, "-")}
            />
          </div>
          <div className="button-row">
            <Button label={"2"} handleClick={handleClick.bind(this, "2")} />
            <Button label={"3"} handleClick={handleClick.bind(this, "3")} />
            <Button
              className="btnaction"
              label={"."}
              handleClick={handleClick.bind(this, ".")}
            />
          </div>
          <div className="button-row">
            <Button label={"0"} handleClick={handleClick.bind(this, "0")} />
            <Button label={"1"} handleClick={handleClick.bind(this, "1")} />
            <Button
              className="btnaction"
              label={"="}
              handleClick={handleClick.bind(this, "=")}
            />
          </div>
        </div>
      </div>
      <br />
      <History
        historys={historys}
        label={"Clear"}
        handleClick={handleClick.bind(this, "ClearHistory")}
      />
    </div>
  );
};

export default Calculator;
