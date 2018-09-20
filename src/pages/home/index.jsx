/*
 * @Author: Max 
 * @Date: 2018-09-20 10:59:32 
 * @Last Modified by: Max
 * @Last Modified time: 2018-09-20 11:22:47
 */

import React from 'react';
import "./index.styl";

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="home">
                Hello React
            </div>
        )
    }
}

export default Home;