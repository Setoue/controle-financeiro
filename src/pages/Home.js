import React from 'react'
import Button from "../components/Button.js";
import * as style from '../styles/global'
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth"
import Header from '../components/Header.js';
import Resume from '../components/Resume.js';
import Forms from '../components/Forms.js'
import { CalculateProvider } from '../context/calculate.js'

const Home = () => {

    const { signout } = useAuth();
    const navigate = useNavigate();

    return (
        <>
            <Header />
            <CalculateProvider>
                <Resume />
                <Forms />
            </CalculateProvider>
            <style.Container>
                <Button Text="Sair" onClick={() => [signout(), navigate('/')]}>Sair</Button>
            </style.Container>
        </>

    )
}

export default Home
