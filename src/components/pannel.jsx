'use strict';

import React from 'react';
import {Component} from 'react';

import Cell from './cell';

// 80*60

const LINE = 80;
const HEIGHT = 60;

let mock = [];

for(var i = 0; i < LINE*HEIGHT; i++){

  if(i==4388 || i==4389 || i==4390){
    mock.push({
      index: i,
      statue: 1
    });
  }
	// Glider
	else if(i==101 || i==182 || i==260 || i==261 || i==262){
		mock.push({
			index: i,
			statue: 1
		});
	}
	// Small Exploder
	else if(i==1101 || i==1102 || i==1103 || i==1181 || i==1183 ||
		i==1261 || i==1263 || i==1342){
			mock.push({
				index: i,
				statue: 1
			});
	}
	// 10 cells row
	else if(i==2500 || i==2501 || i==2502 || i==2503 || 
		i==2504 || i==2505 || i==2506 || i==2507 || 
		i==2508 || i==2509 || i==2510 ){
			mock.push({
				index: i,
				statue: 1
			});
	}
	else {
			mock.push({
				index: i,
				statue: 0
			});
	}
}

class Pannel extends Component {
	constructor(props) {
    super(props);
    this.state = {
    	cells: []
    };
  }
  componentDidMount() {
  	this.initGame();
  }
  initGame(){
  	var _self = this;

		function runIt() {
			setTimeout(function() {

			  _self.updateCell();

				for(var i = 0; i < LINE*HEIGHT; i++){
			 		_self.checkAround(i);
			 	}

		 		setTimeout(function() {
					runIt();
				},100);

			},0);
		};
		runIt();
  }
  checkAround(key) {
  	//debugger
  	var _cellsData = mock;
  	var _aliveNeiboursNum = 0;
  	var _leftTop = _cellsData[key - LINE - 1],
				_middleTop = _cellsData[key - LINE],
				_rightTop	= _cellsData[key - LINE + 1],
				_right	= _cellsData[key + 1],
				_rightBottom = _cellsData[key + LINE + 1],
				_bottom = _cellsData[key + LINE],
				_leftBottom = _cellsData[key + LINE - 1],
				_left = _cellsData[key - 1];

  	if(_leftTop && (_leftTop.statue == 1 || _leftTop.statue == 2)){ // leftTop
  		_aliveNeiboursNum++;
  	}
  	if(_middleTop && (_middleTop.statue == 1 || _middleTop.statue == 2)){ // middleTop
  		_aliveNeiboursNum++;
  	}
  	if(_rightTop && (_rightTop.statue == 1 || _rightTop.statue == 2)){ // rightTop
  		_aliveNeiboursNum++;
  	}
  	if(_right && _right.statue%2 == 1 ){ // right
  		_aliveNeiboursNum++;
  	}
  	if(_rightBottom && _rightBottom.statue%2 == 1 ){ // rightBottom
  		_aliveNeiboursNum++;
  	}
  	if(_bottom && _bottom.statue%2 == 1){ // bottom
  		_aliveNeiboursNum++;
  	}
  	if(_leftBottom && _leftBottom.statue%2 == 1 ){ // leftBottom
  		_aliveNeiboursNum++;
  	}
  	if(_left && (_left.statue == 1 || _left.statue == 2)){ // left
  		_aliveNeiboursNum++;
  	}

  	// update cellData
  	if(_aliveNeiboursNum < 2){
  		// dead
  		if(_cellsData[key].statue%2 === 1){ // live2death
  			_cellsData[key].statue = 2;
  		} else if (_cellsData[key].statue%2 === 0){ // death2death
  			_cellsData[key].statue = 0;
  		}
  	} else if(_aliveNeiboursNum === 2){
  		// alive
  		if(_cellsData[key].statue%2 === 1){ // live2live
  			_cellsData[key].statue = 1;
  		} else if(_cellsData[key].statue%2 === 0){ // death2death
  			_cellsData[key].statue = 0;
  		}

  	} else if(_aliveNeiboursNum > 3){
  		// dead
  		if(_cellsData[key].statue%2 === 1){ // live2death
  			_cellsData[key].statue = 2;
  		} else if (_cellsData[key].statue%2 === 0){ // death2death
  			_cellsData[key].statue = 0;
  		}
  	} 

  	if(_aliveNeiboursNum === 3){
  			// relive
	  		if(_cellsData[key].statue%2 === 1){ // live2live
	  			_cellsData[key].statue = 1;
	  		} else if (_cellsData[key].statue%2 === 0){ // death2live
	  			_cellsData[key].statue = 3;
	  		}
  	}
	  return _cellsData[key];
  }

  updateCell(){
  	var _cells = [];
  	// debugger
  	mock.map(function(item, index){
		  _cells.push(
				<Cell
					key = {item.index}
					index = {item.index + 1}
					type = {item.statue} // 0die 1old 2dead 3young
				/>
			);
  	});

		this.setState({
			cells: _cells
		});
  }
  render() {
  	return(
  		<div className = "pannel">
  			{this.state.cells}
  		</div>
  	);
  }
}

export default Pannel;