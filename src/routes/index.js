import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home.js';
import SignIn from '../pages/SignIn.js';
import SignUp from '../pages/SignUp.js';
import useAuth from "../hooks/useAuth";

const Private = ({ Item }) => {
    const { signed } = useAuth();

    return signed > 0 ? <Item /> : <SignIn />;
}

const RouteApp = () => {
    return (
        <>
            <BrowserRouter>
                <Fragment>
                    <Routes>
                        <Route exact path="/" element={<SignIn />} />
                        <Route path="/home" element={<Private Item={Home} />} />
                        <Route path="*" element={<SignIn />} />
                        <Route exact path="/signup" element={<SignUp />} />
                    </Routes>
                </Fragment>
            </BrowserRouter>
        </>
    );
};

export default RouteApp;