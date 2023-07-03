import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState();

    useEffect(() => {

        const userToken = localStorage.getItem("user_token"); // Pega o token do usuário do local storage: o token é um código que identifica o usuário, e é gerado pelo servidor, quando o usuário faz login.
        const userStorage = localStorage.getItem("users_db");

        if (userToken && userStorage) { // verificando se o usuário e o email são true
            const hasUser = JSON.parse(userStorage)?.filter(
                (user) => user.email === JSON.parse(userToken).email
            );

            if (hasUser) setUser(hasUser[0]);
        }

    }, []);

    const signin = (email, password) => {
        const usersStorage = JSON.parse(localStorage.getItem("users_db"))
        const hasUser = usersStorage?.filter((user) => user.email === email); //verificando se o usuário existe

        if (hasUser?.length) {
            if (hasUser[0].email === email && hasUser[0].password === password) {
                const token = Math.random().toString(36).substring(2); //gerando token
                localStorage.setItem("user_token", JSON.stringify({ email, token })); //salvando token no local storage do navegador 
                setUser({ email, password });//setando usuário
                return;
            } else {
                return "Campos incorretos"
            }
        } else {
            return "Usuário não cadastrado"
        }
    };

    const signup = (email, password) => {
        const usersStorage = JSON.parse(localStorage.getItem("users_db")) //PEGAR O USUÁRIO DO LOCAL STORAGE: 

        const hasUser = usersStorage?.filter((user) => user.email === email); //verificando se o usuário existe

        if (hasUser?.length) { //verificando se o usuário existe
            return "Ja tem uma conta com esse E-mail"
        }

        let newUser;

        if (usersStorage) { //verificando se o usuário existe
            newUser = [...usersStorage, { email, password }]

        } else {
            newUser = [{ email, password }] //criando novo usuário
        }

        localStorage.setItem("users_db", JSON.stringify(newUser)) //salvando usuário no local storage do navegador
    }

    const signout = () => {
        setUser(null);
        localStorage.removeItem("user_token"); //removendo token do local storage do navegador
    }

    return <AuthContext.Provider value={{ user, signed: !!user, signin, signup, signout }}>
        {children}
    </AuthContext.Provider>
}