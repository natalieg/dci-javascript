import React from 'react'

const InputTodo = (props) => {
    return (
        <input id="input" type="text" placeholder="Enter new tasks to do..."
        value = {props.todoValue}
        onChange = {(e) => props.changed(e)}
        onKeyDown = {(e) => props.function(e)}
        />
    )
}

export default InputTodo;