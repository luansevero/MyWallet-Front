import styled from "styled-components"

import LogoHeader from "../LogoHeader"
import RegisterForm from "../forms/RegisterForms"

export default function Register(){
    return(
        <Main>
            <Container>
                <LogoHeader />
                <RegisterForm />
            </Container>
        </Main>
    )
}

const Main = styled.main`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Container = styled.section`
    margin-bottom: 20px;
`