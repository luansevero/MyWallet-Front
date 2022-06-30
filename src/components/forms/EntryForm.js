import { useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';


import { Container, Form, Input, InputBox, Button} from './style';

export default function EntryForm() {
    const [entryData, setEntryData] = useState({
        value: "",
        description: ""
    });
    const [isDisable, setIsDisable] = useState("enabled");
    const [isFilled, setIsFilled] = useState("")

    function handleNewEntry(e) {
        e.preventDefault();
        setIsDisable("disabled")
        setInterval(() => setIsDisable("enabled"), 5000)

    };

    function handleInput(e) {
        setEntryData({ ...entryData, [e.target.name]: e.target.value });
        
    };

    console.log(entryData)
    return (
        <Container className={isDisable}>
            <Form onSubmit={handleNewEntry} >
                <InputBox>
                    <Input
                        className={isFilled}
                        type="number"
                        placeholder="Valor"
                        id="valueInput"
                        value={entryData.value}
                        name="value"
                        onChange={handleInput}
                    />{
                        entryData.value === ""
                        ? <></>
                        : <span>R$</span>
                    }
                </InputBox>
                <Input
                    type="description"
                    placeholder="Descrição"
                    id="descriptionInput"
                    value={entryData.description}
                    name="description"
                    onChange={handleInput}
                />
                <Button type="submit">{
                    isDisable !== "disabled"
                        ? <h2>Salvar entrada</h2>
                        : <ThreeDots
                            height="20"
                            width="70"
                            color="#FFFFFF"
                            ariaLabel='loading'
                        />
                }</Button>
            </Form>
        </Container>
    )
}
