import styled from "styled-components";
import blogTileSvg from '../../assets/blog-tile.svg'

export const Tile = styled.div`
    height: 400px;
    background: url(${blogTileSvg});

    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-family: 'Montserrat', sans-serif;
    gap: 13px;
    transition: all 0.8s;

    &:hover {
        background-color: grey;
        background-blend-mode: multiply;
    }
    
    div {
        color: #fff;

        a {
            color : inherit;
            text-decoration: none;
        }
    }

    .title {
        font-weight: 700;
        font-size: 25px;
    }

    .subtitle {
        font-weight: 500;
        font-size: 10px;
        letter-spacing: -0.015em;
        font-style: normal;
        font-weight: 500;
        font-size: 10px;
        line-height: 12px;
    }

    .more {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 114px;
        height: 27px;
        border-left: 2px solid #fff;
        border-right: 2px solid #fff;
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 15px;
    }


`