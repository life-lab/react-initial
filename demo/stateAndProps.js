/*
 * @Author: Max 
 * @Date: 2018-09-19 14:05:29 
 * @Last Modified by: Max
 * @Last Modified time: 2018-09-19 14:35:20
 */

 /**
  * state && props 简单处理 （数据简单的显示与传输）
  */

class Component extends React.Component {
    // MARK: 构造函数
    constructor(props) {
        super(props)

        this.state = {
            name: "Max"
        }
    }

    render() {
        // 设置state
        setTimeout(() => {
            this.setState({
                name: "state name"
            })
        }, 2000)

        return (
            <div>
                {/* 显示state数据 */}
                <h1>state is {this.state.name}</h1>

                {/* 显示props数据 */}
                <h1>props is {this.props.name}</h1>
            </div>
        );
    }
}

// MARK: render(param1, param2), 多个组件在统一层级情况
ReactDOM.render(
    <Component name="props name"/>,
    document.getElementById('app')
);