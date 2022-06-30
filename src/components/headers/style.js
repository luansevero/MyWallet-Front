import styled from "styled-components";

const Header = styled.main`
    display:flex;
    margin-bottom: 40px;
    h1{
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;
        color: #FFFFFF;
    }
    &.walletHeader{
        margin-bottom: 20px;
        justify-content: space-between;
    }
`

export { Header }