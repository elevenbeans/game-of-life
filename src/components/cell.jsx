'use strict';

import React from 'react';

var Cell = React.memo(function Cell(props) {
  var _type = '';
  switch (props.type) {
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
  return (
    <div
      id = {'cell' + props.index}
      className = {'cell ' + _type}
      onClick = {props.onClick}>
    </div>
  );
});

export default Cell;
