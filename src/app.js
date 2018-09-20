/*
 * @Author: Max 
 * @Date: 2018-09-18 15:02:51 
 * @Last Modified by: Max
 * @Last Modified time: 2018-09-20 11:22:42
 */

import React from 'react';
import ReactDOM from 'react-dom';

/**
 * import pages
 * pages/ 目录在webpack.config.js -> resolve- > alias 中配置
 */
import Home from 'pages/home/index.jsx'

class App extends React.Component {
    render() {
        return (
            <Home/>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);