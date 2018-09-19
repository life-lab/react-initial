/*
 * @Author: Max 
 * @Date: 2018-09-19 11:38:15 
 * @Last Modified by: Max
 * @Last Modified time: 2018-09-19 14:34:43
 */

/**
 * JSX 基本语法演示
 */ 

// MARK: 样式
// => 驼峰规则
let style = {
    color: "blue",
    fontSize: "30px"
}

let name = "Max";
let flag = true;
let names = ["Jack", "Emma", "Lucy"];

let jsx = (
    <div className="jsx" style={style}>
        {/* ===变量=== */}
        here is {name}

        {/* ===判断=== */}
        {
            flag ? <p>I am {name}</p> : <p>I am not {name}</p>
        }

        {/* ===循环=== */}
        {   
            names.map((name, index) => <p key={index}>this is {name}</p>)
        }
    </div>
)

// MARK: render(param1, param2)
// $param1 => jsx
// $param2 => dom
ReactDOM.render(
    jsx,
    document.getElementById('app')
);