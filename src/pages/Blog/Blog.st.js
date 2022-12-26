import styled from "styled-components";
import blogBg from "../../assets/blog-bg.svg"

export const Header = styled.section`
    width: 100vw;
    height: 320px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url(${blogBg});

    .name {
        width: 480px;
        height: 105px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 8px solid black;
        text-transform: uppercase;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-size: 30px;
        line-height: 38px;
        letter-spacing: 0.43538em;
    }
`