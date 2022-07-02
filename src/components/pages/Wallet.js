import { useContext, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import TokenContext from "../../contexts/TokenContext";
import { Header, Main, WalletHistoric, WalletTransitions, ButtonContainer } from "../wallet/style"
import axios from "axios";

export default function Wallet(){
    const [haveHistoric, setHaveHistoric] = useState('dontHave');
    const [user, setUser] = useState('');
    const { token } = useContext(TokenContext);
    console.log(token)
    const navigate = useNavigate();
    useEffect(() => {
        if(!token){return navigate('/login')}
        const promisse = axios.get('http://localhost:5000/wallet', token);
        promisse.then((res) => {
            setUser(res.data);
            if(res.data.transactions.length !== 0){
                setHaveHistoric('have');
            }
        })
        promisse.catch((erro) => {
            console.log(erro)
        })
    }, [])

    return(
        <Main>
            <Header className="walletHeader">
                <h1>Olá, {user.name}</h1>
                <ion-icon name="log-out-outline"></ion-icon>
            </Header>
            <WalletHistoric className={haveHistoric}>
                {  haveHistoric === 'have'
                    ? <></>
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