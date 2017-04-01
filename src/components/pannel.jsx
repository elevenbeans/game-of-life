'use strict';

import React from 'react';
import {Component} from 'react';

import Cell from './cell';

// console.log($('body'));

class Pannel extends Component {
	constructor(props) {
    super(props);
  }
  render(){
  	var cells = [];

  	for(var i=0; i < 4800; i++){
  		var _type = '';
  		if(i%4 == 0 || i%3===0){
  			// _type = 'old';
  		}
  		cells.push(<Cell key={i} classType={_type}/>);
  	}

  	return(
  		<div className = "pannel">
  			{cells}
  		</div>
  	);
  }
}

export default Pannel;