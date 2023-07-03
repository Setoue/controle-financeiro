import React from 'react'
import * as style from "../styles/global"

const Button = ({ Text, onClick, Type = "button" }) => {
    return (
        <style.Button type={Type} onClick={onClick}>
            {Text}
        </style.Button>
    )
}

export default Button