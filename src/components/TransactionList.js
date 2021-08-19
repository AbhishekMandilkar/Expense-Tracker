import React, { useContext } from "react";
import Transaction from "./Transaction";
import { GlobalContext } from "../Context/GlobalState";
function TransactionList() {
  const context = useContext(GlobalContext);
  const { transactions } = context;
  console.log(transactions);
  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
