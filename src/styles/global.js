import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
//style global

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        width: 100vw;
        height: 100vh;
        background-color: #f0f2f5;
        font-family: Arial, 'Poppins', sans-serif
    }
`;

export default GlobalStyle;

//Button

export const Button = styled.button`

    outline: none;
    padding: 16px 20px;
    width: 100%;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    color: white;
    font-weight: 600;
    max-width: 350px;
    background-color: #046ee5;
    border: none;
`;

//input

export const InputText = styled.input`

    outline: none;
    padding: 16px 20px;
    width: 100%;
    border-radius: 5px;
    font-size: 16px;
    background-color: #f0f2f5;
    border: none;
`;

//SingIn / Home

export const Container = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    height: 100vh;
`;

export const Title = styled.h2`

    
`;

//SignIn

export const Content = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 15px;
    width: 100%;
    box-shadow: 0 1px 2px #0003;
    background-color: white;
    max-width: 350px;
    padding: 20px;
    border-radius: 5px;
`;

export const Label = styled.label`
    font-size:18px;
    font-weight: 600;
    color: #676767;
`;

export const LabelSignUp = styled.label`

    font-size: 16px;
    color: #676767;
`;

export const LabelError = styled.label`
    font-size: 14px;
    color: red;
`;

export const Strong = styled.strong`
    cursor: pointer;

    a{
        text-decoration: none;
        color: #676767
    }
`;

//