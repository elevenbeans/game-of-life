'use strict';

import React from 'react';
import ReactDom from 'react-dom';

import Pannel from './pannel';
// console.log(Pannel);


const App = () => (
    <div>
    	<h1>ReactJS Game of Life (click to learn more)</h1>
			<Pannel />
    </div>
);



// 最终渲染
ReactDom.render((
	<App />
), document.getElementById('app'));
