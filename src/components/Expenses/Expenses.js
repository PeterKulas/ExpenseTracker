import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem.js";
import ExpensesFilter from "./ExpensesFilter.js";
import ExpensesList from "./ExpensesList.js";
import Card from "../UI/Card";
import ExpensesChart from "../Chart/ExpensesChart.js";
import "./Expenses.css";

const Expences = function (props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  //My solution
  // const filterArray = function (selectedYear) {
  //   const filteredArr = props.items.filter(
  //     (expense) => Number(expense.date.getFullYear()) === Number(selectedYear)
  //   );
  //   console.log(filteredArr);
  //   return filteredArr;
  // };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  const filterChangeHandler = function (selectedYear) {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expences;
