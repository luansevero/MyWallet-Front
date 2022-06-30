import { useState } from "react"


import { Header, Main, WalletHistoric, WalletTransitions, ButtonContainer } from "../wallet/style"

export default function Wallet(){
    const [haveHistoric, setHaveHistoric] = useState('dontHave')

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
                <button>
                    <ButtonContainer>
                        <ion-icon name="add-circle-outline"></ion-icon>
                            <h2>Nova entrada</h2>
                    </ButtonContainer>
                </button>
                <button>
                    <ButtonContainer>
                        <ion-icon name="remove-circle-outline"></ion-icon>
                        <h2>Nova saída</h2>
                    </ButtonContainer>
                </button>
            </WalletTransitions>
        </Main>
    )
}