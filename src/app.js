/*
 * @Author: Max 
 * @Date: 2018-09-18 15:02:51 
 * @Last Modified by: Max
 * @Last Modified time: 2018-09-19 16:39:01
 */

import React from 'react';
import ReactDOM from 'react-dom';
import "./style/index.styl";

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            data: "Hello React!"
        }
    }

    render() {
        return (
            <div className="bg">
                <h1>{this.state.data}</h1>
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);