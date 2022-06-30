import { useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


import { Container, Form, Input, Button} from './style';

export default function RegisterForm() {
    const [registerData, setRegisterData] = useState({
        name: "",
        email: "",
        password: "",
        samePassword: ""
    });
    const [isDisable, setIsDisable] = useState("enabled");
    const navigate = useNavigate();

    function handleRegister(e) {
        e.preventDefault();
        setIsDisable("disabled");

        const promisse = axios.post("localstorage:5000/register", registerData);
        promisse.then((res) => {
            setIsDisable("enabled")
            navigate('/login');
        })
        promisse.catch((erro) => {
            alert('Registro não foi efetuado com sucesso')
            setIsDisable("enabled")
        })
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
