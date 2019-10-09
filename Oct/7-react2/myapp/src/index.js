import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Person} from './App';
import {Todo} from './todo/todo'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App name="Natalie" city="Hamburg" />, 
document.getElementById('root'));

var list = (
    <div>
        <Person name="Linda" job="HR" country="Poland"/>
        <Person name="Mari" job="Graphic Designer" country="UK"/>
        <Person name="Lukas" job="CEO" country="Germany"/>
    </div>
)

ReactDOM.render(<Person name="Natalie" job="Student" country="Germany"/>, 
document.getElementById('person'));

ReactDOM.render(list, document.getElementById("list"));

ReactDOM.render(<Todo />, document.getElementById("todo"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
