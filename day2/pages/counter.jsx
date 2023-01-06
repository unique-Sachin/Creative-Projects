import React from "react";
import { useState } from "react";
import Head from "next/head";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Head>
        <title>Counter App</title>
      </Head>
      <h2>{count}</h2>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};
export default Counter;
