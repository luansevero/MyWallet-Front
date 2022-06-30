import EntryForm from "../forms/EntryForm"

import { Header, Main } from "../wallet/style"

export default function Entry(){
    return(
        <Main>
            <Header>
                <h1>Nova entrada</h1>
            </Header>
            <EntryForm />
        </Main>
    )
}
