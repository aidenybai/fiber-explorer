import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { useFiber } from './_fiber';

function Counter({ init }) {
  const [count, setCount] = useState(init);
  const fiber = useFiber();

  console.log('Counter', fiber);

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}

function App() {
  const fiber = useFiber();

  console.log('App', fiber);

  return (
    <div>
      <Counter init={0} />
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
