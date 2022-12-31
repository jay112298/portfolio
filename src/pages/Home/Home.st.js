import styled from 'styled-components';
import heroBg from '../../assets/hero-bg.png'

export const Hero = styled.section`
    background: #d7d7d7;
    height: 100vh;
    width: 100%;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left {
        width: 50vw;
        /* display: flex; */
        /* justify-content: center; */
        /* align-items: center; */
        /* flex-direction: column; */
        font-family: 'Raleway', sans-serif;

        div, h2 {
            padding-left: 85px;
        }

        .hi {
            font-size: 40px;
            padding-bottom: 40px;
        }

        .name {
            font-size: 60px;
            padding-bottom: 20px;
            font-weight: 700;
        } 
        .dev {
            color: #909090;
            text-decoration: underline;
            font-weight: 800;
        }
        .icons {
            margin-top: 126px;
            display: flex;
            justify-content: flex-start;
            div {
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 0px;
                width: 61px;
                height: 56px;
                margin-right: 31px;
                background: #c4c4c4;
                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

                svg {
                    width: 36px;
                    height: 36px;
                }
            }
        }
    }

    .right {
        background: #000;
        width: 88vw;
        height: 150vh;
        transform: rotate(9.67deg);
        position: relative;
        left: 50px;

        img {
            height: 570px;
            transform: rotate(-9.67deg);
            position: absolute;
            bottom: 80px;
        }
    }

    .mobile-hero-container {

    }

    @media (max-width: 768px){
        display: none;
    }

`

export const HeroPhone = styled.div`
        
    background: url(${heroBg});
    background-size: cover;
    object-fit: cover;
    width: 100%;
    height: calc(100vh - 57px);
    width: 100%;

`