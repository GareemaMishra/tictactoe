import React from 'react'

export default function Square(props) {
    const sqaurestyle={border: "1px solid black",
        float: "left",
        fontSize: "50px",
        fontWeight: "bold",
        width: '80px',
        height: '80px',
        display: 'inline-block',
        color: '#000',
        backgroundColor: "orange",
        margin: "10px"}

    return (
        <button style={sqaurestyle} onClick={props.onClick}>
            {props.value}
        </button>
    )
}