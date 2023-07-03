import React from 'react'
import * as style from "../styles/global"

const InputText = ({ type, placeholder, value, onChange }) => {

    return (
        <style.InputText
            value={value}
            onChange={onChange}
            type={type}
            placeholder={placeholder}
        />
    )
}

export default InputText