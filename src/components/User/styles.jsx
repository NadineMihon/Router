import styled from "styled-components"

export const Auth = styled.a `
    position: absolute;
    top: 0;
    right: 20px;
    font-size: 16px;
    color: rgba(68, 68, 68, 1);
    text-decoration: none;
    font-weight: 500;
    cursor: pointer;

    &:hover {
        color: rgba(255, 142, 142, 1);
    }
`
export const UserData = styled.div `
    font-size: 16px;
    color: rgba(68, 68, 68, 1);
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    font-weight: 500;
`

export const Button = styled.button `
    max-width: 70px;
    width: 100%;
    font-size: 13px;
    color: rgba(68, 68, 68, 1);
`