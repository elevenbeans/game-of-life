'use strict';

import React from 'react';
import ReactDom from 'react-dom';

import Pannel from './pannel';
// console.log(Pannel);
const App = () => (
    <div>
        <div className = "pannel">
					<Pannel />
        </div>
    </div>
);



// 最终渲染
ReactDom.render((
	<App />
), document.getElementById('app'));
