
/*
    <div id="parent">
        <div id="child">
            <h1>I'm h1 Tag</h1>
            <h2>I'm h2 Tag</h2>
        </div>
        <div id="child2">
            <h1>I'm h1 Tag</h2>
        </div>
    </div>
*/

// const heading = React.createElement("h1", { id: "heading" }, "Hello from React!!")
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading)

const parent = React.createElement("div" , {id : "parent"} , 
    [React.createElement('div' , {id : "child"} , 
    [
        React.createElement("h1" , {} , "I'm h1 Tag"),
        React.createElement("h2" , {} , "I'm h2 Tag")
    ]),
    React.createElement("div" , {id : "child2"} , 
        React.createElement("h1" , {} , "I'm h1 Tag of child2")
    )
    ]
    )

const root = ReactDOM.createRoot(document.getElementById("root"))
console.log(root)
root.render(parent)