import React from "react";
import { ActionKeys } from "../../enums/action-keys.enum";
import { OperatorKeys } from "../../enums/operator-keys.enum";
import { NumericKeys } from "../../enums/numeric-keys.enum";

interface IProps {
  displayValue: string;
}

export function CalculatorDisplay(props: IProps) {
  const value = props.displayValue || "0";
  return <div className="calculator-display">{value}</div>;
}
