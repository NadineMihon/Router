import React from "react";
import { useRouteError } from "react-router-dom";
import * as SC from './styles'

export const Error = () => {
    const error = useRouteError();

    if (error.status === 404) {
        return <SC.Wrapper>Данная страница не найдена</SC.Wrapper>
    }

    return <SC.Wrapper>Что-то пошло не так</SC.Wrapper>
};