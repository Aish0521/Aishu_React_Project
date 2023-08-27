import React, { useState } from "react";

import InvestmentCalculatorForm from "./components/InvestmentCalculatorForm/InvestmentCalculatorForm";
import InvestmentCalculatorHeader from "./components/InvestmentCalculatorHeader/InvestmentCalculatorHeader";
import InvestmentInfoTable from "./components/InvestmentInfoTable/InvestmentInfoTable";

function App() {
  // const [results, setResults] = useState(null)
  const [userInput, setUserInput] = useState(null); //Derived state approach
  const calculateHandler = (userInput) => {
    setUserInput(userInput);
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    // const yearlyData = []; // per-year results

    // let currentSavings = +userInput["current-savings"]; // feel free to change the shape of this input object!
    // const yearlyContribution = +userInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
    // const expectedReturn = +userInput["expected-return"] / 100;
    // const duration = +userInput["duration"];

    // The below code calculates yearly results (total savings, interest etc)
    // for (let i = 0; i < duration; i++) {
    //   const yearlyInterest = currentSavings * expectedReturn;
    //   currentSavings += yearlyInterest + yearlyContribution;
    //   yearlyData.push({
    //     // feel free to change the shape of the data pushed to the array!
    //     year: i + 1,
    //     yearlyInterest: yearlyInterest,
    //     savingsEndOfYear: currentSavings,
    //     yearlyContribution: yearlyContribution,
    //   });
    // }

    // do something with yearlyData ...
    // setResults(yearlyData)
  };
  const yearlyData = []; // per-year results

  if (userInput) {
    //only will access below properties when userInput is not null

    let currentSavings = +userInput["current-savings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    //The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div>
      <InvestmentCalculatorHeader />
      <InvestmentCalculatorForm onCalculate={calculateHandler} />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      {!userInput && (
        <p style={{ textAlign: "center" }}>
          Invetsment table not calculated yet.
        </p>
      )}
      {userInput && (
        <InvestmentInfoTable
          data={yearlyData}
          initialInvestment={userInput["current-savings"]}
        />
      )}
    </div>
  );
}

export default App;
