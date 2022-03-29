//alert('Hello World!');
//
//$('#wd-todo').append(`
//    <div class="container">
//        <h1>Todo example</h1>
//    </div>
//`);
import React from 'react'
import TodoList from "./TodoList.js";

$('#wd-todo').append(`
    <div className="container">
        <h1>Todo example</h1>
        ${TodoList()}
    </div>
`);
