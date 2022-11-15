import React from "react";

const History = (props) => {
  let historys = props.historys;
  return (
    <div className="history">
      <input
        className={props.className}
        type="button"
        value={props.label}
        onClick={props.handleClick}
      />
      {historys.map((item) => (
        <p key={item.id}>{item.result}</p>
      ))}
    </div>
  );
};

export default History;
