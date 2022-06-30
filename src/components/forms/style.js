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
            color: #AFAFAF;
        }
        input{
            background-color: #e0e0e0;
            color: #AFAFAF;
        }
        input:-webkit-autofill,
        input:-webkit-autofill:hover, 
        input:-webkit-autofill:focus,
        textarea:-webkit-autofill,
        textarea:-webkit-autofill:hover,
        textarea:-webkit-autofill:focus,
        select:-webkit-autofill,
        select:-webkit-autofill:hover,
        select:-webkit-autofill:focus {
            -webkit-text-fill-color: #AFAFAF;
            -webkit-box-shadow: 0 0 0 50px #e0e0e0 inset !important;
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
    input,
    span,
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
    &:-webkit-autofill,
    &:-webkit-autofill:hover, 
    &:-webkit-autofill:focus,
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover,
    textarea:-webkit-autofill:focus,
    select:-webkit-autofill,
    select:-webkit-autofill:hover,
    select:-webkit-autofill:focus {
        -webkit-text-fill-color: #000000;
        -webkit-box-shadow: 0 0 0 50px #ffffff inset;
    }   

`

const InputBox = styled.div`
    position: relative;
    span{
        font-weight: 400;
        color: #000000;
        position: absolute;
        top:calc((58px - 23px) / 2);
        left: 15px;
    }
    input.filled{
        padding-left: 50px;
    }
    margin-bottom: 15px;
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

export { Container, Form, Input, InputBox, Button }