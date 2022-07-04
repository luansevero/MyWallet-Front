import { useContext, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import TokenContext from "../../contexts/TokenContext";
import { Header, Main, WalletHistoric, WalletTransitions, ButtonContainer } from "../wallet/style"
import axios from "axios";

import Loading from "../Loading";
import WalletTransactionsHistory from "../wallet/WalletTransactions.js";

export default function Wallet() {
    const [haveHistoric, setHaveHistoric] = useState('dontHave');
    const [userWallet, setUserWallet] = useState([]);
    const { setToken, token } = useContext(TokenContext);
    const  [ isLoading, setIsLoading ] = useState(false);
    console.log(token)
    const navigate = useNavigate();
    useEffect(() => {
        if (!token) { return navigate('/') }
        setIsLoading(true)
        const ONE_SECOND = 1000;
        const promisse = axios.get('https://my-wallet-full-stack.herokuapp.com/wallet', token);
        promisse.then((res) => {
            setUserWallet(res.data);
            if (res.data.transactions.length > 0) {
                setHaveHistoric('have');
            }
            console.log(res.data)
            setTimeout(setIsLoading(false),ONE_SECOND)
            
        })
        promisse.catch((erro) => {
            console.log(erro)
            setTimeout(setIsLoading(false),ONE_SECOND)
        })

    }, [])
    function isEmpty() {
        if (window.confirm('Tem certeza que deseja sair da sua conta?')) {
            setToken("");
            localStorage.clear();
            navigate('/');
        };
    }

    return (
        <Main>
            <Header className="walletHeader">
                {isLoading
                ? <h1>Carregando...</h1>
                : <h1>Olá, {userWallet.name}</h1>}
                
                <ion-icon name="log-out-outline" onClick={isEmpty}></ion-icon>
            </Header>
            {isLoading
                ? <WalletHistoric className="dontHave">
                    <Loading></Loading>
                </WalletHistoric>
                : <WalletHistoric className={haveHistoric}>
                    {haveHistoric === 'have'
                        ? <WalletTransactionsHistory transactions={userWallet.transactions} balance={userWallet.balance} />
                        : <h2>Não há registro de entrada ou saída</h2>
                    }
                </WalletHistoric>}

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