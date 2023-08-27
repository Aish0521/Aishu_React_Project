import React from "react";

import logo from "../../assets/investment-calculator-logo.png";
import classes from './InvestmentCalculatorHeader.module.css'

const InvestmentCalculatorHeader = () => (
  <header className={classes.header}>
    <img src={logo} alt="logo" />
    <h1>Investment Calculator</h1>
  </header>
);

export default InvestmentCalculatorHeader;
