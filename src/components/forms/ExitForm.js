import { useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';


import { Container, Form, Input, InputBox, Button} from './style';

export default function EntryForm() {
    const [exitData, setExitData] = useState({
        value: "",
        description: ""
    });
    const [isDisable, setIsDisable] = useState("enabled");
    const [isFilled, setIsFilled] = useState("")

    function handleNewExit(e) {
        e.preventDefault();
        setIsDisable("disabled")
        setInterval(() => setIsDisable("enabled"), 5000)

    };

    function handleInput(e) {
        setExitData({ ...exitData, [e.target.name]: e.target.value });
        
    };

    console.log(exitData)
    return (
        <Container className={isDisable}>
            <Form onSubmit={handleNewExit} >
                <InputBox>
                    <Input
                        className={isFilled}
                        type="number"
                        placeholder="Valor"
                        id="valueInput"
                        value={exitData.value}
                        name="value"
                        onChange={handleInput}
                    />{
                        exitData.value === ""
                        ? <></>
                        : <span>R$</span>
                    }
                </InputBox>
                <Input
                    type="description"
                    placeholder="Descrição"
                    id="descriptionInput"
                    value={exitData.description}
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
