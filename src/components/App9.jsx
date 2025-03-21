import React, { useState, useEffect } from "react";

export default function App9() {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0); 
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(Number(value1) + Number(value2));
  }, [value1]);

  useEffect(() => {
    setTotal(Number(value1) * Number(value2));
  }, [value2]);

  return (
    <div>
      <input
        type="number"
        value={value1}
        onChange={(e) => setValue1(e.target.value)}
        placeholder="Enter Amount 1"
      />
      <br />
      <input
        type="number"
        value={value2}
        onChange={(e) => setValue2(e.target.value)}
        placeholder="Enter Amount 2"
      />
      <hr />
      <h3>Total: {total}</h3>
    </div>
  );
}
