import React, { useState } from 'react';
import InputText from "../components/Input.js";
import Button from "../components/Button.js";
import * as style from "../styles/global";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth"



const SignIn = () => {

    const { signin } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [error, setError] = useState();


    const handleLogin = () => {

        if (!email | !senha) {
            setError("Preencha todos os campos")
            return;
        }

        const res = signin(email, senha);

        if (res) {
            setError(res)
            return;
        }

        navigate("/home");
    };


    return (
        <style.Container>
            <style.Label>
                Sistema de Login
            </style.Label>
            <style.Content>
                <InputText
                    type="email"
                    placeholder="Digite seu Email"
                    value={email}
                    onChange={(e) => [setEmail(e.target.value), setError("")]} />
                <InputText
                    type="senha"
                    placeholder="Digite sua senha"
                    value={senha}
                    onChange={(e) => [setSenha(e.target.value), setError("")]} />
                <style.LabelError>{error}</style.LabelError>
                <Button Text="Entrar" onClick={handleLogin} />
                <style.LabelSignUp>
                    Não tem uma conta?
                    <style.Strong><Link to="/signup">&nbsp;Registre-se</Link></style.Strong>
                </style.LabelSignUp>
            </style.Content>
        </style.Container>
    )
}

export default SignIn