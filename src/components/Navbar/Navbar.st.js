import styled from 'styled-components'

export const Nav = styled.nav`
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    position: ${props => props.position};
    top: 0;
    left: 0;
    right: 0;
    height: 80px;
    background-color: ${props => props.bg};
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 5;

    .logo {
        text-decoration: none;
        color: #fff;
        padding-left: 50px;
        opacity: 1;
        font-size: 50px;

        a {
            text-decoration: none;
            color: #fff;
        }
    }

    .nav {
        display: flex;
        align-items: center;
        padding-right: 20px;
        gap: 30px;
        padding-right: 100px;
        opacity: 1;

        li {

            a {
                text-decoration: none;
                color: inherit;
            }
            padding: 10px 20px;
            list-style: none;
            font-size: 17px;
            font-weight: 700;
            color: #fff;

            &:last-child {
                background: #fff;
                color: #000;
                font-size: 15px;
                border-radius: 25px;
                height: 25px;
                display: flex;
                align-items: center;
            }
        }
    }
    
`