/*
 * @Author: Max 
 * @Date: 2018-09-19 11:44:15 
 * @Last Modified by: Max
 * @Last Modified time: 2018-09-19 15:39:00
 */

 /**
  * 1、组件显示
  * 2、组件调用
  *     ·调用普通组件
  *     ·调用容器组件
  * 3、组件传值
  *     ·父组件 -> 子组件
  *     ·子组件 -> 父组件
  *     ·兄弟组件之间传值
  */


// =============组件显示==============

class FirstComponent extends React.Component {
    render() {
        return <h1>I am Max in FirstComponent</h1>
    }
}

class SecondComponent extends React.Component {
    render() {
        return <h1>I am Max in SecondComponent</h1>
    }
}

// MARK: render(param1, param2)
// $param1 => component
// $param2 => dom
ReactDOM.render(
    <FirstComponent/>,
    document.getElementById('app')
);

// MARK: render(param1, param2), 多个组件在统一层级情况
ReactDOM.render(
    <div>
        <FirstComponent />
        <SecondComponent />
    </div>,
    document.getElementById('app')
);


// =============组件调用==============

// ===>>> 普通组件
class Component extends React.Component {
    // MARK: 构造函数
    constructor(props) {
        super(props)

        this.state = {
            name: "Max"
        }
    }

    render() {
        return (<h1>props is {this.props.name}</h1>);
    }
}

// ===>>> 容器式组件
class Footer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            // children => 返回由当前组件包起来的所有内容
            <h1>{this.props.children}</h1>
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                {/* 调用普通组件 */}
                调用普通组件
                <Component name="Max"></Component>

                <hr/>

                {/* 调用容器式组件 */}
                调用容器式组件
                <Footer>
                    <span>this is footer</span>
                    <a href="">link</a>
                </Footer>
            </div>
        );
    }
}

// MARK: render(param1, param2), 多个组件在统一层级情况
ReactDOM.render(
    <App/>,
    document.getElementById('app')
);



// =============组件传值=============

// ===>>> 父组件 -> 子组件 && 子组件 -> 父组件

// 子组件
class Child extends React.Component {
    // MARK: 构造函数
    constructor(props) {
        super(props)
    }

    changeFatherColor(e) {
        // 向父组件的changeColor回调方法传值
        this.props.changeColor("red")
    }

    render() {
        return (
            <div>
                {/* 取得父组件传过来的值 */}
                <h1>father props.name is {this.props.name}</h1>

                {/* 修改父组件的值 */}
                <button onClick={(e) => this.changeFatherColor(e) }>改变父组件背景色</button>
            </div>
        );
    }
}

// 父组件
class Father extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            bgColor: '#999'
        }
    }
    onChangeColor(color) {
        this.setState({
            bgColor: color
        })
    }

    render() {
        return (
            <div style={{ backgroundColor: this.state.bgColor }}>
                {/* 子组建向父组件传值，父组件调用子组件的时候需要传一个回调，然后在回调内处理获取的到的子组件传递过来的值 */}
                <Child name="Max" changeColor={(color) => this.onChangeColor(color)}></Child>
            </div>
        );
    }
}

// MARK: render(param1, param2), 多个组件在统一层级情况
ReactDOM.render(
    <Father/>,
    document.getElementById('app')
);


// ===>>> 兄弟组件传值
/**
 * 原理： 先把值传回给父组件，再由父组件传递给其他的子组件
 */

// 子组件1
class Child1 extends React.Component {
    // MARK: 构造函数
    constructor(props) {
        super(props)
    }

    change2Bg(e) {
        this.props.changeComponent2BgColor("red")
    }

    render() {
        return (
            <div>
                <h1>this is child1</h1>
                <button onClick={(e) => this.change2Bg(e)}>点击修改子组件2的背景颜色</button>
            </div>
        );
    }
}

// 子组件2
class Child2 extends React.Component {
    // MARK: 构造函数
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div style={{backgroundColor: this.props.bgColor}}>
                <h1>this is child2</h1>
                <h1>bg color is {this.props.bgColor}</h1>
            </div>
        );
    }
}

// 父组件
class Father extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            bg2Color: "#999"
        }
    }

    changeColor(color) {
        this.setState({
            bg2Color: color
        })
    }

    render() {
        return (
            <div>
                <Child1 changeComponent2BgColor={(color) => {this.changeColor(color)}}></Child1>
                <br/>
                <Child2 bgColor={this.state.bg2Color}></Child2>
            </div>
        );
    }
}

// MARK: render(param1, param2), 多个组件在统一层级情况
ReactDOM.render(
    <Father/>,
    document.getElementById('app')
);