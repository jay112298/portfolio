import styled from "styled-components";

export const Box = styled.section`


    width: 100%;
    min-height: 100vh;
    background: radial-gradient(50% 50% at 50% 50%, rgba(26, 21, 21, 0) 0%, rgba(1, 1, 1, 0.16) 100%), #FFFFFF;
    mix-blend-mode: normal;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
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

    .skills {
        margin-top: 79px;
        width: 1004px;

        .using {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-template-rows: repeat(3, 1fr);
            justify-content: center;
            align-items: center;
            grid-row-gap: 65px;
            grid-column-gap: 75px;


            div {
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                font-family: 'Montserrat', sans-serif;
                font-size: 24px;
                font-weight: 400;
                line-height: 29px;
                letter-spacing: 0.13538em;
                text-transform: uppercase;
            }


            .using-header {
                height: 74px;
                display: flex;
                align-items: flex-start;
                text-transform: uppercase;
                grid-column-start: 1;
                grid-column-end: 5;
                font-family: 'Montserrat', sans-serif;
                font-weight: 700;
                font-size: 30px;
                line-height: 37px;
                letter-spacing: 0.18538em;
                padding-left: 50px;
            }

            img {
                height: 64px;
            }
        }

    }

`