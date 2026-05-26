'use strict';

import React from 'react';
import { createRoot } from 'react-dom/client';

import Pannel from './pannel';
// console.log(Pannel);


const App = () => (
  <div>
    <h1>ReactJS Game of Life &nbsp;
      <a
        target="_blank"
        href="https://www.math.cornell.edu/~lipa/mec/lesson6.html" rel="noreferrer"
      >
          (Click to learn more)
      </a>
    </h1>
    <Pannel />
  </div>
);


// 最终渲染
const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
