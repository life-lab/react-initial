/*
 * @Author: Max 
 * @Date: 2018-09-19 14:33:09 
 * @Last Modified by: Max
 * @Last Modified time: 2018-09-19 14:34:18
 */

/**
 * 事件处理
 * 两种点击事件绑定
 * input处理
 */
class Component extends React.Component {
    // MARK: 构造函数
    constructor(props) {
        super(props)

        this.state = {
            name: "Max",
            age: 18
        }

        // this 作用域的绑定
        this.addAge = this.addAge.bind(this);
    }

    addAge() {
        console.log("click addAge");
        this.setState({
            age: this.state.age + 1
        })
    }

    addAge2() {
        console.log("click addAge2");
        this.setState({
            age: this.state.age + 1
        })
    }

    inputChange(e) {
        console.log("input event", e);
        this.setState({
            // 获取输入的值并改变age
            age: e.target.value
        })
    }

    render() {
        return (
            <div>
                <h1>props is {this.state.name}</h1>
                <h1>is {this.state.age} years old</h1>

                {/* 点击事件 -> 需要在构造方法内添加绑定，否则this无法使用 */}
                <button onClick={this.addAge}>+ | 需要绑定作用域</button>

                {/* 点击事件 -> 使用箭头函数，无需绑定作用域 */}
                <button onClick={(e) => { this.addAge2(e) }}>+ | 使用=>函数</button>

                {/* input */}
                <input type="text" onChange={(e) => { this.inputChange(e) }}/>
            </div>
        );
    }
}

// MARK: render(param1, param2), 多个组件在统一层级情况
ReactDOM.render(
    <Component name="props name"/>,
    document.getElementById('app')
);