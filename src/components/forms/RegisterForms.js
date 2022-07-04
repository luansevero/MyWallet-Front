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
        if(registerData.password === registerData.samePassword){
            const promisse = axios.post('https://my-wallet-full-stack.herokuapp.com/register', {
                name: registerData.name,
                email: registerData.email,
                password: registerData.password
            });
            promisse.then((res) => {
                setTimeout(navigate('/'), 2000);
            })
            promisse.catch((erro) => {
                console.log(erro)
                alert('Registro não foi efetuado com sucesso')
                setIsDisable("enabled")
            })
        } else {
            
        }
        
       
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
                        ? <h2>Cadastrar</h2>
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
