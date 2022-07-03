import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import TokenContext from "../../contexts/TokenContext"

import TransactionForm from "../forms/TransactionForm"

import { Header, Main } from "../wallet/style"

export default function Entry(){
    const { token } = useContext(TokenContext);
    const navigate = useNavigate();

    useEffect(() => {
        if(!token){return navigate('/login')}
    }, [])

    return(
        <Main>
            <Header>
                <h1>Nova entrada</h1>
            </Header>
            <TransactionForm transactionType={'positive'} />
        </Main>
    )
}
