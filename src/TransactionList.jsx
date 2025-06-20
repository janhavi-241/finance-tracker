import React from 'react';

const TransactionList = ({ transactions, deleteTransaction, editTransaction }) => {
  if (!transactions || transactions.length === 0) {
    return <p className="sub-text">No transactions yet.</p>;
  }

  return (
    <div className="main-container">
      <h2 className="sub-heading-medium">Transaction History</h2>
      {transactions.map((t) => (
        <div key={t.id} className="recent-transactions-card sub-container">
          <div>
            <p className="sub-heading-small">{t.description}</p>
            <p className="sub-text-small">
              ₹{t.amount} • {t.type} • {t.category}
            </p>
          </div>
          <div className="flex-container" style={{ gap: "10px" }}>
            <button className="sub-text-small" onClick={() => editTransaction(t.id, t)}>
              ✏️ Edit
            </button>
            <button className="trash-button" onClick={() => deleteTransaction(t.id)}>
              🗑️ Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TransactionList;
