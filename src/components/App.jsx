'use strict';

import React from 'react';
import ReactDom from 'react-dom';

import Pannel from './pannel';
// console.log(Pannel);


const App = () => (
    <div>
    	<h1>ReactJS Game of Life &nbsp;
    		<a
    			target="_blank"
    			href="https://www.math.cornell.edu/~lipa/mec/lesson6.html"
    		>
					(Click to learn more)
    		</a>
    	</h1>
			<Pannel />
    </div>
);



// 最终渲染
ReactDom.render((
	<App />
), document.getElementById('app'));
