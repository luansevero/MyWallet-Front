import styled from "styled-components";

const Container = styled.section`
    display:flex;
    align-items:center;
    flex-direction:column;
    a{  
        color: #FFFFFF;
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
        text-decoration: none;
        margin-top: 20px;
    }
    &.disabled{
        button,
        input,
        a{
            pointer-events:none;
        }
        input{
            background-color: #e0e0e0;
            color: #AFAFAF;
        }
    }
`

const Form = styled.form`
    display:flex;
    align-items:center;
    flex-direction:column;
    input, button{
        width: 326px;
        height: 58px;
        border-radius:5px;
    }
    input::placeholder,
    h2{
        font-size:20px;
        line-height:23px;
    }

`
const Input = styled.input`
    background-color: #FFFFFF;
    &::placeholder{
        font-weight: 400;
        color: #000000;
    }
    padding-left: 15px;
    margin: 7.5px 0px;
    &:first-of-type{
        margin-top: 0px;
    }
    &:last-of-type{
        margin-bottom: 0px;
    }
    &:
`
const Button = styled.button`
    display:flex;
    align-items:center;
    justify-content:center;
    background: #A328D6;
    margin: 15px 0;
    h2{
        font-weight: 700;
        color: #FFFFFF;
    }
`

export { Container, Form, Input, Button }