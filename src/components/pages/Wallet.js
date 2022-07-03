import { useContext, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import TokenContext from "../../contexts/TokenContext";
import { Header, Main, WalletHistoric, WalletTransitions, ButtonContainer } from "../wallet/style"
import axios from "axios";

import WalletTransactionsHistory from "../wallet/WalletTransactions.js";

export default function Wallet(){
    const [haveHistoric, setHaveHistoric] = useState('dontHave');
    const [userWallet, setUserWallet] = useState([]);
    const { setToken, token } = useContext(TokenContext);
    console.log(token)
    const navigate = useNavigate();
    useEffect(() => {
        if(!token){return navigate('/login')}
        const promisse = axios.get('http://localhost:5000/wallet', token);
        promisse.then((res) => {
            setUserWallet(res.data);
            if(res.data.transactions.length > 0){
                setHaveHistoric('have');
            }
            console.log(res.data)
        })
        promisse.catch((erro) => {
            console.log(erro)
        })
        
    }, [])
    function isEmpty(){
        if(window.confirm('Tem certeza que deseja sair da sua conta?')){
            setToken("");
            navigate('/login');
        };
    }

    return(
        <Main>
            <Header className="walletHeader">
                <h1>Olá, {userWallet.name}</h1>
                <ion-icon name="log-out-outline" onClick={isEmpty}></ion-icon>
            </Header>
            <WalletHistoric className={haveHistoric}>
                {  haveHistoric === 'have'
                    ? <WalletTransactionsHistory transactions={userWallet.transactions}balance={userWallet.balance}/>
                    : <h2>Não há registro de entrada ou saída</h2>
                }
            </WalletHistoric>
            <WalletTransitions>
                <Link to='/wallet/entry'>
                    <button>
                        <ButtonContainer>
                            <ion-icon name="add-circle-outline"></ion-icon>
                                <h2>Nova entrada</h2>
                        </ButtonContainer>
                    </button>
                </Link>
                <Link to='/wallet/exit'>
                    <button>
                        <ButtonContainer>
                            <ion-icon name="remove-circle-outline"></ion-icon>
                            <h2>Nova saída</h2>
                        </ButtonContainer>
                    </button>
                </Link>
            </WalletTransitions>
        </Main>
    )
}

/*transactions={userWallet.transactions}*/