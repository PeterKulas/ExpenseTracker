import React from "react";

import ExpenseDate from "./ExpenseDate.js";
import Card from "../UI/Card";
import "./ExpenseItem.css";

// Can be just one parameter, object
// we get key-value pair in props obj
function ExpenseItem(props) {
  // useState return array
  //First value is current state value, second value is updating function
  // const [title, setTitle] = useState(props.title);

  return (
    <li>
      <Card className="expense-item">
        {/* toISOString convert date to string */}
        {/* <div>{props.date.toISOString()}</div> */}
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
