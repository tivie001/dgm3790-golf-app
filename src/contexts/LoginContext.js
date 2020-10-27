import React, {useState, useContext, createContext} from "react";

const LoginContext = createContext({
    isAuth: false,
    email: '',
    password: '',
    firstName: '',
    setFirstName: ()=>{},
    setEmail: ()=>{},
    setPassword: ()=>{},
    login: ()=>{}
})

export const LoginContextProvider = (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginHandler = () => {
        setIsAuthenticated(true);
    }
    const firstNameHandler = (firstName) => {
        setFirstName(firstName);
    }
    const emailHandler = (email) => {
        setEmail(email);
    }
    const passwordHandler = () => {
        setPassword(password);
    }

    return (
        <LoginContext.Provider value={{
            login: loginHandler,
            isAuth: isAuthenticated,
            setFirstName: firstNameHandler,
            setEmail: emailHandler,
            setPassword: passwordHandler,
            email: email,
            firstName: firstName
        }}>
            {props.children}
        </LoginContext.Provider>
    );
}

export const useLoginContext = () => useContext(LoginContext);