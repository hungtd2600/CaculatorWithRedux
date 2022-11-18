import React from "react";

const History = ({ historys, className, label, handleClick }) => {
  let history = historys;
  return (
    <div className="history">
      <h1>History</h1>
      <input
        className={className}
        type="button"
        value={label}
        onClick={handleClick}
      />
      {history.map((item) => (
        <p key={item.id}>{item.result}</p>
      ))}
    </div>
  );
};

export default History;
