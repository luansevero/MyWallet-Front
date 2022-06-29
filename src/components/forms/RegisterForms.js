import { useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { Link } from 'react-router-dom';

import { Container, Form, Input, Button} from './style';

export default function RegisterForm() {
    const [registerData, setRegisterData] = useState({
        name: "",
        email: "",
        password: "",
        samePassword: ""
    });
    const [isDisable, setIsDisable] = useState("enabled");

    function handleRegister(e) {
        e.preventDefault();
        setIsDisable("disabled");
        setInterval(() => setIsDisable("enabled"), 5000)

    };

    function handleInput(e) {
        setRegisterData({ ...registerData, [e.target.name]: e.target.value })
    };

    console.log(registerData)
    return (
        <Container className={isDisable}>
            <Form onSubmit={handleRegister} >
            <Input
                    type="name"
                    placeholder="Nome"
                    id="nameInput"
                    value={registerData.name}
                    name="name"
                    onChange={handleInput}
                />
                <Input
                    type="email"
                    placeholder="E-mail"
                    id="emailInput"
                    value={registerData.email}
                    name="email"
                    onChange={handleInput}
                />
                <Input
                    type="password"
                    placeholder="Password"
                    id="passwordInput"
                    value={registerData.password}
                    name="password"
                    onChange={handleInput}
                />
                <Input
                    type="password"
                    placeholder="Confirme a senha"
                    id="samePasswordInput"
                    value={registerData.samePassword}
                    name="samePassword"
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
            <Link to="/login">
                <h3>Já tem uma conta? Entre agora!</h3>
            </Link>
        </Container>
    )
}
