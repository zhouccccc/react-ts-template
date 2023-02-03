import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
// import {Button} from "antd";

import './App.css';
import Test from '@/components/Test';

function App() {
  const [count, setCount] = useState(0);

  function add(p1: number, p2: number): number {
    return p1 + p2;
  }

  return (
    <div className="App">
      {/*<Button>1111</Button>*/}
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>

      <Test name={'111'} age={222} aa={'1'} />
    </div>
  );
}

export default App;
