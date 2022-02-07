import React, { useContext } from "react";
import FormContext from "../../store/form-context";
import {
  convertToUSD,
  formatUSD,
  formatVND,
} from "../Helpers/currency-convert";
import classes from "./Transfer.module.css";
const Transfer = ({ rate }) => {
  const formCtx = useContext(FormContext);
  const { gross, netSalary: net } = formCtx.transfer;
  const grossToUSD = convertToUSD(gross, rate);
  const netToUSD = convertToUSD(net, rate);

  return (
    <div className={`${classes.transfer} d-flex flex-column align-end`}>
      <div>
        <span>GROSS:</span>
        <span>{formatVND(gross)} (VND)</span>
        <span>&asymp;</span>
        <span>{formatUSD(grossToUSD)} (USD)</span>
      </div>
      <div>
        <span>NET:</span>
        <span>{formatVND(net)} (VND)</span>
        <span>&asymp;</span>
        <span>{formatUSD(netToUSD)} (USD)</span>
      </div>
    </div>
  );
};

export default Transfer;
