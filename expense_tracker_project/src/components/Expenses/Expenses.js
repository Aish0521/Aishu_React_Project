import React, { useState } from "react";

import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const expenseItems = props.items;
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  let filterInfoText = `2021, 2022 & 2023`;
  if (filteredYear === "2021") {
    filterInfoText = `2020, 2022 & 2023`;
  } else if (filteredYear === "2022") {
    filterInfoText = `2020, 2021 & 2023`;
  } else if (filteredYear === "2023") {
    filterInfoText = `2020, 2021 & 2022`;
  }

  const filteredExpenses = expenseItems.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );
  return (
    <Card className="expenses">
      <ExpensesFilter
        onChangeFilter={filterChangeHandler}
        selected={filteredYear}
      />
      <p style={{ color: "white" }}>
        Data for years {filterInfoText} are hidden
      </p>
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
