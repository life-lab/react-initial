/*
 * @Author: Max 
 * @Date: 2018-09-19 16:33:00 
 * @Last Modified by: Max
 * @Last Modified time: 2018-09-19 16:34:48
 */

 /**
  * 组件的生命周期
  */

class Component extends React.Component {

    // 构造函数
    constructor(props) {
        super(props);

        this.state = {
            name: "Max"
        }

        console.log("===>>>构造函数","constructor");
    }

    // 组件将要加载
    componentWillMount() {
        console.log("组件将要加载/初始化", "componentWillMount");
    }

    // 组件加载完成
    componentDidMount() {
        console.log("组件加载完成", "componentDidMount");
    }

    // 当组件有更新是，是否要更新组件
    shouldComponentUpdate() {
        console.log("检查是否要更新组件","shouldComponentUpdate");
        return true
    }

    // 组件将要更新
    componentWillUpdate() {
        console.log("组件将要更新", "componentWillUpdate");
    }

    // 组件更新完成
    componentDidUpdate() {
        console.log("组件更新完成", "componentDidUpdate");
    }

    // 组件接收父组件的props
    componentWillReceiveProps() {
        console.log("组件接收父组件的props", "componentWillReceiveProps");
    }

    // 组件将要销毁
    componentWillUnmount() {
        console.log("组件将要销毁", "componentWillUnmount");
    }

    updateComponent() {
        this.setState({
            name: "new state is Jack"
        })
    }

    // 渲染
    render() {
        console.log("===>>>页面渲染","render");
        return (
            <div>
                <h1>this state is : {this.state.name}</h1>
                <h1>this props is : {this.props.name}</h1>
                <button onClick={() => {this.updateComponent()}}>更新组件</button>
            </div>
        );
    }
}

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "oldProps"
        }
    }

    changeComponentProds() {
        this.setState({
            name: "newProps"
        })
    }

    render() {
        return (
            <div>
                <Component name={this.state.name}></Component>
                <button onClick={() => this.changeComponentProds()}>更新prods</button>
            </div>
        )
    }
}

// MARK: render(param1, param2), 多个组件在统一层级情况
ReactDOM.render(
    <App/>,
    document.getElementById('app')
);