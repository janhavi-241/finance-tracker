import React from 'react'
import TransactionForm from '../components/TransactionForm';
import TransactionList from '../TransactionList';

const Transactions = ({
  transactions,
  addTransaction,
  editTransaction,
  deleteTransaction
}) => {
  return (
    <div className='main-container'>
      <TransactionForm
        addTransaction={addTransaction} />
      <TransactionList
        transactions={transactions}
        editTransaction={editTransaction}
        deleteTransaction={deleteTransaction} />
      {/* Transactions */}
    </div>
  )
}

export default Transactions;