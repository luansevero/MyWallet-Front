import EntryForm from "../forms/EntryForm"

import styled from "styled-components"
import { Header } from '../headers/style.js'

export default function Exit(){
    return(
        <Main>
            <Header>
                <h1>Nova saída</h1>
            </Header>
            <EntryForm />
        </Main>
    )
}

const Main = styled.main`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 25px;
`