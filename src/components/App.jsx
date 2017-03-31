'use strict';

import React from 'react';
import ReactDom from 'react-dom';

const App = () => (
    <div>
        <div className="pannel">
Hello ~
        </div>
    </div>
);

// 最终渲染
ReactDom.render((
	<App />
), document.getElementById('app'));
