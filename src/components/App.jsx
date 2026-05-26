'use strict';

import React from 'react';
import { createRoot } from 'react-dom/client';

import Pannel from './pannel';

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
    <section className="about">
      <h2>About Conway&apos;s Game of Life</h2>
      <p>
        The Game of Life is a cellular automaton devised by the British mathematician
        John Horton Conway in 1970. It is a <em>zero-player game</em> &mdash; its evolution
        is determined by its initial state, requiring no further input. Each cell on a
        two-dimensional grid interacts with its eight neighbours according to four simple
        rules, producing complex, often unpredictable patterns that can mimic living
        systems: birth, death, competition, and even reproduction.
      </p>
      <p>
        Despite its simplicity, Life is Turing complete &mdash; it can simulate any
        computation that a conventional computer can. Enthusiasts have built working
        counters, clocks, logic gates, and even a&nbsp;complete&nbsp;CPU within the Life
        universe, making it a cornerstone of computational&nbsp;theory and artificial&nbsp;life
        research.
      </p>
      <div className="rules">
        <div className="rule">
          <div className="rule-title">
            <span className="rule-icon" style={{ backgroundColor: '#1A1A1A', border: '1px solid #D4D4D4' }} />
            Birth
          </div>
          <div className="rule-desc">
            A dead cell with exactly three live neighbours becomes alive.
          </div>
        </div>
        <div className="rule">
          <div className="rule-title">
            <span className="rule-icon" style={{ backgroundColor: '#1A1A1A', border: '1px solid #D4D4D4' }} />
            Survival
          </div>
          <div className="rule-desc">
            A live cell with two or three live neighbours stays alive.
          </div>
        </div>
        <div className="rule">
          <div className="rule-title">
            <span className="rule-icon" style={{ backgroundColor: '#E8E8E8', border: '1px solid #D4D4D4' }} />
            Death
          </div>
          <div className="rule-desc">
            A live cell with fewer than two (underpopulation) or more than three
            (overpopulation) live neighbours dies.
          </div>
        </div>
      </div>
    </section>
  </div>
);

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
