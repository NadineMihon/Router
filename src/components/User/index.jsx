import React from "react";
import { useAuth } from '../../hooks/useAuth'
import { Link, useLocation } from "react-router-dom";

import * as SC from './styles'

export const User = () => {
    const auth = useAuth();
    const location = useLocation();

    if (!auth.user) {
        return <SC.Auth as={Link} to='/login' state={{ from: location }} replace>Авторизация</SC.Auth>;
    }

    return (
        <SC.UserData>
            Добро пожаловать, {auth.user}
            <SC.Button
                onClick={() => {
                    auth.signOut();
                }}
            >
                    Выход
            </SC.Button>
        </SC.UserData>
    )
};