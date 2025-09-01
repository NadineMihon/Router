import styled from "styled-components";

export const Wrapper = styled.div `
    text-align: center;
    margin: 30px auto;
    font-size: 30px;
    font-family: Raleway;
    display: flex;
    flex-direction: column;
    gap: 50px;
`

export const Menu = styled.div `
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const Link = styled.a `
    font-size: 20px;
    color: black;
    text-decoration: none;
    font-weight: 500;

    &:hover {
        color: rgba(255, 142, 142, 1);
    }
`
