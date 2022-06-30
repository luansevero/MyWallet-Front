import EntryForm from "../forms/EntryForm"

import { Header, Main } from "../wallet/style"

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

