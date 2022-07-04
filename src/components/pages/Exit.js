import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TokenContext from "../../contexts/TokenContext";

import TransactionForm from "../forms/TransactionForm";

import { Header, Main } from "../wallet/style"

export default function Exit(){

    const { token } = useContext(TokenContext);
    const navigate = useNavigate();

    useEffect(() => {
        if(!token){return navigate('/')}
    }, [])

    

    return(
        <Main>
            <Header>
                <h1>Nova saída</h1>
            </Header>
            <TransactionForm transactionType={'negative'}/>
        </Main>
    )
}

