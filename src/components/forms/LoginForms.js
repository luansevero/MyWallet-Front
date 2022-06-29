import { useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { Link } from 'react-router-dom';

import { Container, Form, Input, Button} from './style';

export default function LoginForm() {
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });
    const [isDisable, setIsDisable] = useState("enabled");

    function handleLogin(e) {
        e.preventDefault();
        setIsDisable("disabled")
        setInterval(() => setIsDisable("enabled"), 5000)

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
            <Link to="/wallet">
                <h3>Primeira vez? Cadastres-se</h3>
            </Link>
        </Container>
    )
}
