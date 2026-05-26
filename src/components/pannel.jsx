'use strict';

import React from 'react';
import { Component } from 'react';

import Cell from './cell';

const LINE = 80;
const HEIGHT = 60;

var PRESETS = {
  'Glider': [101, 182, 260, 261, 262],
  'Small Exploder': [1101, 1102, 1103, 1181, 1183, 1261, 1263, 1342],
  '10-cell Row': [2500, 2501, 2502, 2503, 2504, 2505, 2506, 2507, 2508, 2509, 2510],
  'Trio': [4388, 4389, 4390]
};

var PATTERN_DEFS = [
  {
    offsets: [
      { r: 0, c: 1 }, { r: 1, c: 2 }, { r: 2, c: 0 },
      { r: 2, c: 1 }, { r: 2, c: 2 }
    ],
    w: 3, h: 3
  },
  {
    offsets: [
      { r: 0, c: 0 }, { r: 0, c: 1 }, { r: 0, c: 2 },
      { r: 1, c: 0 }, { r: 1, c: 2 },
      { r: 2, c: 0 }, { r: 2, c: 2 },
      { r: 3, c: 1 }
    ],
    w: 3, h: 4
  },
  {
    offsets: [
      { r: 0, c: 0 }, { r: 0, c: 1 }, { r: 0, c: 2 },
      { r: 0, c: 3 }, { r: 0, c: 4 }, { r: 0, c: 5 },
      { r: 0, c: 6 }, { r: 0, c: 7 }, { r: 0, c: 8 },
      { r: 0, c: 9 }, { r: 0, c: 10 }
    ],
    w: 11, h: 1
  },
  {
    offsets: [
      { r: 0, c: 0 }, { r: 0, c: 1 }, { r: 0, c: 2 }
    ],
    w: 3, h: 1
  }
];

class Pannel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cells: [],
      mode: 'editing'
    };
    this.mock = this.initGrid();
    this.timer = null;
  }

  initGrid() {
    var grid = [];
    for (var i = 0; i < LINE * HEIGHT; i++) {
      grid.push({ index: i, statue: 0 });
    }
    return grid;
  }

  componentDidMount() {
    this.scatterPatterns(10);
    this.renderGrid('editing');
  }

  scatterPatterns(count) {
    for (var n = 0; n < count; n++) {
      var pat = PATTERN_DEFS[Math.floor(Math.random() * PATTERN_DEFS.length)];
      var startRow = Math.floor(Math.random() * (HEIGHT - pat.h + 1));
      var startCol = Math.floor(Math.random() * (LINE - pat.w + 1));
      for (var i = 0; i < pat.offsets.length; i++) {
        this.mock[(startRow + pat.offsets[i].r) * LINE + startCol + pat.offsets[i].c].statue = 1;
      }
    }
  }

  componentWillUnmount() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  renderGrid(mode) {
    mode = mode || this.state.mode;
    var that = this;
    var isEditing = mode === 'editing';
    var _cells = this.mock.map(function(item) {
      return (
        <Cell
          key = {item.index}
          index = {item.index + 1}
          type = {item.statue}
          onClick = {isEditing ? function() { that.handleCellClick(item.index); } : undefined}
        />
      );
    });

    this.setState({
      cells: _cells
    });
  }

  handleCellClick(index) {
    if (this.state.mode !== 'editing') {
      return;
    }
    var cell = this.mock[index];
    cell.statue = cell.statue === 0 ? 1 : 0;
    this.renderGrid('editing');
  }

  loadPreset(name) {
    var cells = PRESETS[name];
    if (!cells) {
      return;
    }
    for (var i = 0; i < LINE * HEIGHT; i++) {
      this.mock[i].statue = 0;
    }
    for (var j = 0; j < cells.length; j++) {
      this.mock[cells[j]].statue = 1;
    }
    this.renderGrid('editing');
  }

  clearGrid() {
    for (var i = 0; i < LINE * HEIGHT; i++) {
      this.mock[i].statue = 0;
    }
    this.renderGrid('editing');
  }

  start() {
    this.setState({ mode: 'running' });
    this.renderGrid('running');
    this.startLoop();
  }

  startLoop() {
    var that = this;
    var runIt = function() {
      that.renderGrid('running');

      for (var i = 0; i < LINE * HEIGHT; i++) {
        that.checkAround(i);
      }

      var changed = false;
      for (var j = 0; j < LINE * HEIGHT; j++) {
        if (that.mock[j].statue === 2 || that.mock[j].statue === 3) {
          changed = true;
          break;
        }
      }

      if (!changed) {
        that.setState({ mode: 'stopped' });
        that.renderGrid('stopped');
        return;
      }

      that.timer = setTimeout(function() {
        runIt();
      }, 100);
    };
    runIt();
  }

  startOver() {
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
    for (var i = 0; i < LINE * HEIGHT; i++) {
      this.mock[i].statue = 0;
    }
    this.scatterPatterns(10);
    this.setState({ mode: 'editing' });
    this.renderGrid('editing');
  }

  pause() {
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
    this.setState({ mode: 'paused' });
    this.renderGrid('paused');
  }

  resume() {
    this.setState({ mode: 'running' });
    this.renderGrid('running');
    this.startLoop();
  }

  countAliveNeighbors(key) {
    var _cellsData = this.mock;
    var count = 0;
    var _row = Math.floor(key / LINE);
    var _col = key % LINE;

    var neighbors = [
      (_row > 0 && _col > 0) ? _cellsData[key - LINE - 1] : null,
      (_row > 0) ? _cellsData[key - LINE] : null,
      (_row > 0 && _col < LINE - 1) ? _cellsData[key - LINE + 1] : null,
      (_col < LINE - 1) ? _cellsData[key + 1] : null,
      (_row < HEIGHT - 1 && _col < LINE - 1) ? _cellsData[key + LINE + 1] : null,
      (_row < HEIGHT - 1) ? _cellsData[key + LINE] : null,
      (_row < HEIGHT - 1 && _col > 0) ? _cellsData[key + LINE - 1] : null,
      (_col > 0) ? _cellsData[key - 1] : null
    ];

    for (var i = 0; i < 8; i++) {
      if (neighbors[i] && neighbors[i].statue % 2 === 1) {
        count++;
      }
    }
    return count;
  }

  checkAround(key) {
    var _cellsData = this.mock;
    var _aliveNeiboursNum = this.countAliveNeighbors(key);

    if (_aliveNeiboursNum < 2) {
      if (_cellsData[key].statue % 2 === 1) {
        _cellsData[key].statue = 2;
      } else {
        _cellsData[key].statue = 0;
      }
    } else if (_aliveNeiboursNum === 2) {
      if (_cellsData[key].statue % 2 === 1) {
        _cellsData[key].statue = 1;
      } else {
        _cellsData[key].statue = 0;
      }
    } else if (_aliveNeiboursNum === 3) {
      if (_cellsData[key].statue % 2 === 1) {
        _cellsData[key].statue = 1;
      } else {
        _cellsData[key].statue = 3;
      }
    } else {
      if (_cellsData[key].statue % 2 === 1) {
        _cellsData[key].statue = 2;
      } else {
        _cellsData[key].statue = 0;
      }
    }
    return _cellsData[key];
  }

  render() {
    var that = this;
    var controls;

    if (this.state.mode === 'editing') {
      var presetButtons = Object.keys(PRESETS).map(function(name) {
        return (
          <button key={name} onClick={function() { that.loadPreset(name); }}>
            {name}
          </button>
        );
      });

      controls = (
        <div className="controls">
          <div className="controls-row">
            {presetButtons}
          </div>
          <div className="controls-row">
            <button className="btn-start" onClick={function() { that.start(); }}>Start</button>
            <button className="btn-clear" onClick={function() { that.clearGrid(); }}>Clear</button>
          </div>
        </div>
      );
    } else if (this.state.mode === 'running') {
      controls = (
        <div className="controls">
          <button className="btn-pause" onClick={function() { that.pause(); }}>Pause</button>
        </div>
      );
    } else if (this.state.mode === 'paused') {
      controls = (
        <div className="controls">
          <button className="btn-resume" onClick={function() { that.resume(); }}>Resume</button>
        </div>
      );
    } else if (this.state.mode === 'stopped') {
      controls = (
        <div className="controls">
          <button className="btn-start" onClick={function() { that.startOver(); }}>Start Over</button>
        </div>
      );
    }

    return (
      <div>
        {controls}
        <div className={'pannel' + (this.state.mode === 'editing' ? ' editing' : '')}>
          {this.state.cells}
        </div>
      </div>
    );
  }
}

export default Pannel;
