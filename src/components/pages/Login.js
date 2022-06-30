import styled from "styled-components"

import LogoHeader from "../LogoHeader"
import LoginForm from "../forms/LoginForms"

export default function Login(){
    return(
        <Main>
            <Container>
                <LogoHeader />
                <LoginForm />
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
