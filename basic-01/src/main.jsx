import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

function MyApp() { 
    const user = 'Vishwakarma' 
    return(<h1>Hello Deepak {user}</h1>);
}
const anotherUser = '\nhello'
const reactElement = React.createElement(   'a' , 
    {href:'https://google.com' , target:'_blank'} ,
    'click me', 
    anotherUser
)

root.render(
    <>
        {reactElement}
        <MyApp/>
    </>
);
