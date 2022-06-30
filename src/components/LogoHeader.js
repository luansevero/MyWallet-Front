import styled from "styled-components"

import logo from '../assets/MyWallet.png'

export default function LogoHeader(){
    return(
        <Container>
            <img src={logo} alt="MyWallet" />
        </Container>
    )
}

const Container = styled.header`
    display:flex;
    align-items:center;
    justify-content:center;
    margin-bottom: 25px;
`