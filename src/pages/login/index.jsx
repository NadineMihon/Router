import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

import * as SC from './styles'

export const Login = () => {
    const [error, setError] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    const auth = useAuth();

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const userName = formData.get('username');

        if (!userName) {
            setError('Введите имя пользователя');
            return;
        }

        auth.signIn(userName, () => {
            setError('');
            navigate(from, {replace: true});
        });
    };

    return (
        <SC.Layout>
            <p>Пожалуйста, авторизуйтесь</p>
            <div style={{ color: 'red'}}>{error}</div>
            <SC.Form onSubmit={handleSubmit}>
                <label>
                    Имя пользователя: <input type="text" name="username" />
                </label>
                <button type="submit">Войти</button>
            </SC.Form>
        </SC.Layout>
    )
};