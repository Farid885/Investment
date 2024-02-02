import React from "react";
// import calculateInvestmentResults from '../src/util/investment'
import { calculateInvestmentResults, formatter } from "../src/util/investment";
function Results({ userInput, handleChange }) {
  console.log(calculateInvestmentResults(userInput));

  const resultDatas = calculateInvestmentResults(userInput);

  const initialInvestment = resultDatas[0].valueEndOfYear - resultDatas[0].interest - resultDatas[0].annualInvestment;
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultDatas.map((yearData) => {
          const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment;
          const totalAmountInvested = yearData.valueEndOfYear - totalInterest;
          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Results;
