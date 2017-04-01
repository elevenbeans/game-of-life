'use strict';

import React from 'react';
import {Component} from 'react';

// console.log($('body'));

class Cell extends Component {
	constructor(props) {
    super(props);
  }
  render(){
  	return(
  		<div
  			className = {"cell " + this.props.classType}>
  		</div>

  	);
  }
}

export default Cell;