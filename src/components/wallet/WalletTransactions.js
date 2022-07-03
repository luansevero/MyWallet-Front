import styled from "styled-components"
import Wallet from "../pages/Wallet"

export default function WalletTransactionsHistory({ transactions }){
    console.log(transactions)
    return(
        <>
            <WalletHistory>
                
            </WalletHistory>
            <WalletBalance>
                <>
                <span>SALDO</span>
                <span>VALOR</span>
                </>
            </WalletBalance>
        </>
    )
}

const Main = styled.section`
`

const WalletHistory = styled.ul`
    width: 100%;
    max-height: calc(100% - 30px);
    overflow-x: hidden;
`
const Transaction = styled.li`
    display:flex;
    align-items:center;
    justify-content: space-between;
    span{
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
    }
    & div span:nth-child(1){
        margin-right: 5px;
        color: #c6c6c6;
    }
    & div span:nth-child(1){
        margin-right: 5px;
    }
    margin-bottom: 11px;
    
`
const WalletBalance = styled.div`
    width: 100%:
    margin-top:15px;
    display:flex;
    justify-content: space-between;
    span{
        font-size: 17px;
        line-height: 20px;
    }
    span:nth-child(1){
        font-weight: 700;
        color: #000000;
    }
    span:nth-child(2){
        font-weight: 400;
        color: #${props => props.xd ? 'ffffff' : '0000000'};
    }
`

/*

{transactions.map((transaction)  => {
                    <Transaction>
                    <div>
                        <span>{transaction.data}</span>
                        <span>{transaction.description}</span>
                    </div>
                    <span isPositive={transaction.isEntry}>{transaction.value}</span>
                </Transaction>
                })}

                */