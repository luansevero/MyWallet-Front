import styled from "styled-components";

const Header = styled.main`
    display:flex;
    margin-bottom: 40px;
    h1{
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;
        color: #FFFFFF;
    }
    ion-icon{
        width:  31px;
        height: 31px;
        color: #FFFFFF;
    }
    &.walletHeader{
        margin-bottom: 20px;
        justify-content: space-between;
    }
`
const Main = styled.main`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 25px;
`

const WalletHistoric = styled.section`
    display:flex;
    margin-bottom: 15px;
    width: 326px;
    height: 446px;
    background: #FFFFFF;
    border-radius: 5px;
    h2{
        display:flex;
        align-items:center;
        width: 180px;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        text-align: center;
        color: #868686;
    }
    &.dontHave{
        justify-content:center;
    }
    &.have{

    }
`
const WalletTransitions = styled.section`
    display:flex;
    justify-content:space-between;
    button{
        width: 155px;
        height: 114px;
        background: #A328D6;
        border-radius: 5px;
    }
`
const ButtonContainer = styled.div`
    width: 100%;
    height: 100%;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
    ion-icon{
        width: 24px;
        height: 24px;
        color: #FFFFFF;
    }
    h2{
        text-align:start;
        width: 64px;
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;
        color: #FFFFFF;
    }
`

export { Header, Main , WalletHistoric, WalletTransitions, ButtonContainer }