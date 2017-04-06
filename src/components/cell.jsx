'use strict';

import React from 'react';
import {Component} from 'react';

// console.log($('body'));

class Cell extends Component {
	constructor(props) {
    super(props);
  }
  render(){
  	var _type = '';
  	switch(this.props.type){
  		case 0:
  		_type = 'dead';
  		break;
  		case 1:
  		_type = 'old';
  		break;
  		case 2:
  		_type = 'dead';
  		break;
  		case 3:
  		_type = 'young';
  		break;
  		default:
  		_type = 'dead';

  	}
  	return(
  		<div
  			id = {"cell" + this.props.index}
  			className = {"cell " + _type}>
  		</div>

  	);
  }
}

export default Cell;