import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import axios from 'axios';

import TokenContext from '../../contexts/TokenContext';


import { Container, Form, Input, InputBox, Button} from './style';

export default function TransactionForm({transactionType}) {
    const [transactionData, setTransactionData] = useState({
        value: "",
        description: "",
    });
    const [isDisable, setIsDisable] = useState("enabled");
    const [isFilled, setIsFilled] = useState("");
    const navigate = useNavigate();
    const { token } = useContext(TokenContext);

    async function handleNewExit(e) {
        e.preventDefault();
        setIsDisable("disabled");
        let transaction = transactionData;
        if(transactionType === 'Exit'){
            transaction = {...transactionData, value: - transactionData.value}
        }
        const promisse = axios.post("http://localhost:5000/wallet/exit", transaction, token)
        promisse.then((res) => {
            console.log('Sucesso')
            setIsDisable("enabled")
            navigate('/wallet')
        })
        promisse.catch((error) => {
            console.log(error)
            setIsDisable("enabled")
        })
        console.log(transaction)
        setIsDisable("enabled")
    };

    function handleInput(e) {
        if((e.target.name === 'value' && e.target.value != '-') || e.target.name === 'description'){
            setTransactionData({ ...transactionData, [e.target.name]: e.target.value });
        } 
    };

    function cancelTransaction(){
        let answer = true
        console.log('entrei')
        if(transactionData.value.length !== 0 || transactionData.description.length !== 0){
           answer = window.confirm('Tem certeza que deseja cancelar a transação?');
        }
        if(answer){
            navigate('/wallet');
        }
    }

    console.log(transactionData)
    return (
        <Container className={isDisable}>
            <Form onSubmit={handleNewExit}>
                <InputBox>
                    <Input
                        className={isFilled}
                        type="number"
                        placeholder="Valor"
                        id="valueInput"
                        value={transactionData.value}
                        name="value"
                        onChange={handleInput}
                    />{
                        transactionData.value === ""
                        ? <></>
                        : <span>R$</span>
                    }
                </InputBox>
                <Input
                    type="description"
                    placeholder="Descrição"
                    id="descriptionInput"
                    value={transactionData.description}
                    name="description"
                    onChange={handleInput}
                />
                <Button type="submit">{
                    isDisable !== "disabled"
                        ? transactionType !== 'Exit'
                            ? <h2>Salvar entrada</h2>
                            : <h2>Salvar saída</h2>
                        : <ThreeDots
                            height="20"
                            width="70"
                            color="#FFFFFF"
                            ariaLabel='loading'
                        />
                }</Button>
                <Button >
                    <h2>Cancelar</h2>
                </Button>
            </Form>
        </Container>
    )
}
