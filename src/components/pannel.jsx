'use strict';

import React from 'react';
import {Component} from 'react';

import Cell from './cell';

// 80*60

const LINE = 80;
const HEIGHT = 60;

let mock = [];

for(var i = 0; i < LINE*HEIGHT; i++){
	if(i%5==0 && i>2200 && i<2500){
			mock.push({
				index: i,
				statue: 1
			});
	}	else if(i%7==0 && i>2200 && i<2500){
			mock.push({
				index: i,
				statue: 3
			});
	}else {
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
    	cellsData: mock,
    	cells: []
    };
  }
  componentDidMount() {
  	this.initGame();
  }
  initGame(){
  	var _self = this;

		function runIt() {
			// console.log('1');
			var _temp = [];
			setTimeout(function() {
				for(var i = 0; i < LINE*HEIGHT; i++){
			 		_temp.push(_self.checkAround(i));
			 	}

			 	_self.setState({
			 			cellData: _temp
			 	});

			  _self.updateCell();

				setTimeout(function() {
					runIt();
				},10);

			},0);
		};
		runIt();
  }
  checkAround(key) { //
  	// debugger
  	var _cellsData = this.state.cellsData;
  	var _aliveNeiboursNum = 0;
  	var _leftTop = _cellsData[key - LINE - 1],
				_middleTop = _cellsData[key - LINE],
				_rightTop	= _cellsData[key - LINE + 1],
				_right	= _cellsData[key + 1],
				_rightBottom = _cellsData[key + LINE + 1],
				_bottom = _cellsData[key + LINE],
				_leftBottom = _cellsData[key + LINE - 1],
				_left = _cellsData[key - 1];
  	// debugger
  	if(_leftTop && _leftTop.statue%2 !== 0){ // leftTop
  		_aliveNeiboursNum++;
  	}
  	if(_middleTop && _middleTop.statue%2 !== 0){ // middleTop
  		_aliveNeiboursNum++;
  	}
  	if(_rightTop && _rightTop.statue%2 !== 0){ // rightTop
  		_aliveNeiboursNum++;
  	}
  	if(_right && _right.statue%2 !== 0){ // right
  		_aliveNeiboursNum++;
  	}
  	if(_rightBottom && _rightBottom.statue%2 !== 0){ // rightBottom
  		_aliveNeiboursNum++;
  	}
  	if(_bottom && _bottom.statue%2 !== 0){ // bottom
  		_aliveNeiboursNum++;
  	}
  	if(_leftBottom && _leftBottom.statue%2 !== 0){ // leftBottom
  		_aliveNeiboursNum++;
  	}
  	if(_left && _left.statue%2 !== 0){ // left
  		_aliveNeiboursNum++;
  	}

  	// update cellData
  	if(_aliveNeiboursNum < 2){
  		// dead
  		if(_cellsData[key].statue%2 === 1){ // live2death
  			_cellsData[key].statue = 2;
  		}
  		if(_cellsData[key].statue%2 === 0){ // death2death
  			_cellsData[key].statue = 0;
  		}
  	} else if(_aliveNeiboursNum === 2 ||
  		_aliveNeiboursNum === 3){
  		// alive
  		if(_cellsData[key].statue%2 === 1){ // live2live
  			_cellsData[key].statue = 1;
  		}
  		// if(_cellsData[key].statue%2 === 0){ // death2live
  		// 	_cellsData[key].statue = 3;
  		// }
  	} else if(_aliveNeiboursNum > 3){
  		// dead
  		if(_cellsData[key].statue%2 === 1){ // live2death
  			_cellsData[key].statue = 2;
  		}
  		if(_cellsData[key].statue%2 === 0){ // death2death
  			_cellsData[key].statue = 0;
  		}
  	} 

  	if(_aliveNeiboursNum === 3){
  		//if(_cellsData[key].statue%2 === 0){
  			// relive
	  		if(_cellsData[key].statue%2 === 1){ // live2live
	  			_cellsData[key].statue = 1;
	  		}
	  		if(_cellsData[key].statue%2 === 0){ // death2live
	  			_cellsData[key].statue = 3;
	  		}
  		//}
  	}
	  return _cellsData[key];
  }

  updateCell(){
  	var _cells = [];
  	// debugger
  	this.state.cellsData.map(function(item, index){
		  _cells.push(
				<Cell
					key = {item.index}
					index = {item.index + 1}
					type = {item.statue} // 0die 1old 2dead 3young
				/>
			);
  	});

		this.setState({
			cells:_cells
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