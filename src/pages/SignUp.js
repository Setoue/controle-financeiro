import React, { useState } from 'react'
import InputText from "../components/Input.js";
import Button from "../components/Button.js";
import * as style from '../styles/global'
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth"


const SignUp = () => {

    const [email, setEmail] = useState("");
    const [emailConf, setEmailConf] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const { signup } = useAuth()


    const handleSignUp = () => {
        if (!email | !senha | !emailConf) {
            setError("Preencha todos os campos")
            return;
        } else if (email !== emailConf) {
            setError("Os emails devem ser iguais")
            return;
        }

        const res = signup(email, senha);

        if (res) {
            setError(res)
            return;
        }

        alert("Usuário cadastrado");
        navigate("/");
    }

    return (

        <style.Container>
            <style.Label>
                Faça seu cadastro
            </style.Label>
            <style.Content>
                <InputText
                    type="email"
                    placeholder="Digite seu Email"
                    value={email}
                    onChange={(e) => [setEmail(e.target.value), setError("")]} />
                <InputText
                    type="email"
                    placeholder="Confirme seu email"
                    value={emailConf}
                    onChange={(e) => [setEmailConf(e.target.value), setError("")]} />
                <InputText
                    type="senha"
                    placeholder="Digite sua senha"
                    value={senha}
                    onChange={(e) => [setSenha(e.target.value), setError("")]} />
                <style.LabelError>{error}</style.LabelError>
                <Button Text="Inscrever-se" onClick={handleSignUp} />
                <style.LabelSignUp>
                    Ja tem conta?
                    <style.Strong><Link to="/signin">&nbsp;Faça o login</Link></style.Strong>
                </style.LabelSignUp>
            </style.Content>
        </style.Container>
    );
}

export default SignUp