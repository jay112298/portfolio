import styled from "styled-components";


export const Box = styled.section`

    width: 100%;
    min-height: 100vh;
    mix-blend-mode: normal;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: radial-gradient(50% 50% at 50% 50%, rgba(26, 21, 21, 0) 0%, rgba(0, 0, 0, 0.16) 100%), #FFFFFF;

    .header {
        margin-top: 142px;
        font-family: 'Montserrat', sans-serif;
        text-transform: uppercase;
        font-size: 30px;
        font-weight: 700;
        letter-spacing: 0.35538em;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 404px;
        height: 74px;
        border: 5px solid black;
    }

    .intro {
        margin-top: 71px;
        font-family: 'Open Sans', sans-serif;
        font-weight: 300;
        font-size: 15px;
    }

    .divider {
        padding-top: 30px;
    }

    .form {
        padding-top: 123px;
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 55px;
    }

    input {
        height: 48px;
        width: 609px;
        border: none;
        border-left: 5px solid black;
        border-bottom: 5px solid black;
        background: transparent;
        font-family: 'Montserrat', sans-serif;
        line-height: 17px;
        font-weight: 700;
        font-size: 14px;
        padding-left: 14px;
    }

    input:last-of-type {
        height: 184px;
    }

    .submit {
        font-family: 'Montserrat', sans-serif;
        font-size: 16px;
        font-weight: 700;
        line-height: 20px;
        letter-spacing: 0.1em;
        background: transparent;
        border: none;
        border-left: 3px solid black;
        border-right: 3px solid black;
        width: 197px;
        height: 45px;
        text-transform: uppercase;
    }

`