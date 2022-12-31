import styled from "styled-components";

export const Navbar = styled.section`
    width: 100%;
    height: 57px;
    color: #fff;
    background-color: rgba(0, 0, 0);
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo {
        padding-left: 30px;
    }

    .collapsable {
        padding-right: 30px;

    }

`

export const Nav = styled.nav`
    background: rgba(0, 0, 0, 0.4);
    width: 100%;
    position: absolute;
    top: 57px;
    left: 0;
    right: 0;
    z-index: 20;
    transform: translateY(-500px);

    ul {
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        transition: all 0.5s;

        li {
            height: 57px;
            display: flex;
            align-items: center;
            a {
                text-decoration: none;
                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 600;
                font-size: 12px;
                line-height: 15px;
                display: flex;
                align-items: center;
                text-align: center;

                color: #FFFFFF;

            }
        }
    }


`
