import { useContext, useState, useEffect} from 'react';
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

    useEffect(() => {
        const login = async() => {
            try {
                if(localStorage.getItem('MyWallet_acc') !== null){
                    const userStorage = JSON.parse(localStorage.getItem('MyWallet_acc'));
                    setIsDisable("disabled");
                    setLoginData(userStorage)
                    const response = await axios.post('http://localhost:5000/login', userStorage)
                    setToken({headers:{
                        Authorization: `Bearer ${response.data.token}`
                   }})
                   
                    setIsDisable("enabled");
                    navigate("/wallet");
                    ;
                }
            } catch (error) {setIsDisable("enabled")}};
            login();
    }, [])

    function handleLogin(e) {
        e.preventDefault();
        setIsDisable("disabled")
        const promisse = axios.post('http://localhost:5000/login', loginData);
        promisse.then((res) => {
            setToken({
                headers:{
                    Authorization: `Bearer ` + res.data.token
                }
            })
            localStorage.setItem('MyWallet_acc', JSON.stringify(loginData));
            console.log(res.data.token)
            const HALF_SECOND = 500;
            setTimeout(() => {
                navigate('/wallet')
                setIsDisable("enabled")
            }, HALF_SECOND)
        })
        promisse.catch(() => {
            window.alert('Email ou usuário errado');
            setIsDisable("enabled")
        })
    };

    console.log(loginData)

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
