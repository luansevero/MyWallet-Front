import styled from "styled-components"
import Wallet from "../pages/Wallet"

export default function WalletTransactionsHistory({ transactions, balance }) {
    console.log(transactions)
    console.log(balance)
    return (
        <>
            <WalletHistory>
                {transactions.reverse().map((transaction, index) => {
                    return (
                        <Transaction key={index + 1}>
                            <div>
                                <span>{transaction.date}</span>
                                <span>{transaction.description}</span>
                            </div>
                            <h3 className={transaction.type} type={transaction.type}>{Math.abs(transaction.value).toFixed(2)}</h3>

                        </Transaction>
                    )
                })}
            </WalletHistory>
            <WalletBalance>
                <>
                    <span>SALDO</span>
                    <span className={balance.balanceType}>{Math.abs(balance.balanceValue).toFixed(2)}</span>
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
        margin-right:5px;
    }
    h3.positive{
        color: #03AC00;
    }
    h3.negative{
        color: #c70000;
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
        color: #${props => props.balance < 0  ? "03AC00" : "c70000"}
    }
    span.positive{color:#03AC00;}
    span.negative{color:#c70000;}
    
`

/*

{transactions.map((transaction)  => {
                   
                })}

                */