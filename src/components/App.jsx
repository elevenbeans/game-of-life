'use strict';

import React from 'react';
import { createRoot } from 'react-dom/client';

import Pannel from './pannel';
// console.log(Pannel);


const App = () => (
  <div className="page">
    <header className="site-header">
      <h1>Game of Life</h1>
      <p className="subtitle">
        Conway&apos;s cellular automaton &mdash;&nbsp;
        <a target="_blank" href="https://www.math.cornell.edu/~lipa/mec/lesson6.html" rel="noreferrer">
          learn more
        </a>
      </p>
    </header>
    <Pannel />
  </div>
);


// 最终渲染
const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
