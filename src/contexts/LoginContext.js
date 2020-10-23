import React, {useState, useContext, createContext} from "react";

const LoginContext = createContext({
    isAuth: false,
    email: '',
    password: '',
    setEmail: ()=>{},
    setPassword: ()=>{},
    login: ()=>{}
})

export const LoginContextProvider = (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const loginHandler = () => {
        setIsAuthenticated(true);
    }
    const logoutHandler = () => {
        setIsAuthenticated(false);
    }
    const emailHandler = () => {
        setEmail(email);
    }
    const passwordHandler = () => {
        setPassword(password);
    }

    return (
        <LoginContext.Provider value={{
            login: loginHandler,
            isAuth: isAuthenticated,
            setEmail: emailHandler,
            setPassword: passwordHandler,
            email: email,
            logout: logoutHandler
        }}>
            {props.children}
        </LoginContext.Provider>
    );
}

export const useLoginContext = () => useContext(LoginContext);