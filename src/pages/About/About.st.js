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

    .intro {
        margin-top: 71px;
        font-family: 'Open Sans', sans-serif;
        font-weight: 300;
        font-size: 15px;
    }

    .explore {
        text-transform: uppercase;
        border-left: 2px solid black;
        border-right: 2px solid black;
        margin-top: 74px;
        font-family: 'Montserrat', sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 139px;
        height: 32px;
        font-size: 15px;
        font-weight: bold;
        
    }
    
    .divider {
        margin-top: 85px;
    }

    .services {
        margin-top: 108px;
        width: 1066px;
        height: 373px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;



        .top {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .bottom {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .top > div, .bottom > div {
            width: 483px;
            height: 178px;
        }

        .service-header {
            text-transform: uppercase;
            font-size: 22px;
            font-family: 'Montserrat', sans-serif;
            font-weight: 700;
            line-height: 27px;
            letter-spacing: 0.18538em;
        }

        .service-text {
            font-family: 'OpenSans', sans-serif;
            font-style: normal;
            font-weight: 300;
            font-size: 14px;
            line-height: 19px;
            padding-left: 83px;
        }

    }
`