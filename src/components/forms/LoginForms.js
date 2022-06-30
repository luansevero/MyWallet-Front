import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import { ThreeDots } from 'react-loader-spinner';
import TokenContext from '../../contexts/TokenContext'
import { Container, Form, Input, Button} from './style';

export default function LoginForm() {
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });
    const { setToken, token } = useContext(TokenContext);
    const navigate = useNavigate();
    const [isDisable, setIsDisable] = useState("enabled");

    function handleLogin(e) {
        e.preventDefault();
        setIsDisable("disabled")
        const promisse = axios.post('localhost:5000/login', loginData);
        promisse.then((res) => {
            setToken({
                headers:{
                    Authorization: `Bearer ` + res.data.token
                }
            })
            setIsDisable("enabled");
            navigate('/wallet')
        });
        promisse.catch(() => {
            setIsDisable("enabled");
            window.alert('Email ou usuário errado');
        })

        

    };

    function handleInput(e) {
        setLoginData({ ...loginData, [e.target.name]: e.target.value })
    };

    return (
        <Container className={isDisable}>
            <Form onSubmit={handleLogin} >
                <Input
                    type="email"
                    placeholder="E-mail"
                    id="emailInput"
                    value={loginData.email}
                    name="email"
                    onChange={handleInput}
                />
                <Input
                    type="password"
                    placeholder="Password"
                    id="passwordInput"
                    value={loginData.password}
                    name="password"
                    onChange={handleInput}
                />
                <Button type="submit">{
                    isDisable !== "disabled"
                        ? <h2>Entrar</h2>
                        : <ThreeDots
                            height="20"
                            width="70"
                            color="#FFFFFF"
                            ariaLabel='loading'
                        />
                }</Button>
            </Form>
            <Link to="/register">
                <h3>Primeira vez? Cadastres-se</h3>
            </Link>
        </Container>
    )
}
