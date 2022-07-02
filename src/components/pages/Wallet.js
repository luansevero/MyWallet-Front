import { useContext, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import TokenContext from "../../contexts/TokenContext";
import { Header, Main, WalletHistoric, WalletTransitions, ButtonContainer } from "../wallet/style"

export default function Wallet(){
    const [haveHistoric, setHaveHistoric] = useState('dontHave')
    const { token } = useContext(TokenContext);
    
    const navigate = useNavigate();
    useEffect(() => {
        if(!token){return navigate('/login')}
    }, [])

    return(
        <Main>
            <Header className="walletHeader">
                <h1>Olá, Fulano</h1>
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