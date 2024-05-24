import React from 'react'
import { useState } from 'react';
import TodoCard from './TodoCard';
export default function TodoList() {




    const [show, setShow] = useState(false)

    // function fun() {
    //   setShow(true)
    // } 

    function hbl() {
        setShow(!show)
    }
    return (
        <>
            <button onClick={hbl}>Toggle</button>
            <h3>
                {/* <TodoCard  /> */}
            </h3>

            <button onClick={hbl}>Add</button>
        </>
    )
}
