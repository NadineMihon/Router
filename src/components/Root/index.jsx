import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import * as SC from './styles'
import { User } from "../User";
import { useAuth } from "../../hooks/useAuth";

export const Root = () => {
    const auth = useAuth();

    return <SC.Wrapper>
        <SC.Header>
            <SC.Menu>
                <SC.Link 
                    to='/'
                    as={NavLink}
                    className={({ isActive }) => isActive ? "active" : ""}
                >
                        Главная
                </SC.Link>
                <SC.Link 
                    to='/posts'
                    as={NavLink}
                    className={({ isActive }) => isActive ? "active" : ""} 
                >
                        Посты
                </SC.Link>
                <SC.Link 
                    to='/blog'
                    as={NavLink}
                    className={({ isActive }) => isActive ? "active" : ""}
                >
                        Блог
                </SC.Link>
                            <SC.Link 
                    to='/feedback'
                    as={NavLink}
                    className={({ isActive }) => isActive ? "active" : ""}
                >
                        Обратная связь
                </SC.Link>
                {auth.user ? <SC.Link 
                    to='/protected' 
                    as={NavLink} 
                    className={({ isActive }) => isActive ? "active" : ""}
                >
                        Специальное
                </SC.Link> : null}
            </SC.Menu>
            <SC.Auth>
                <User />
            </SC.Auth>
        </SC.Header>
        <Outlet />
    </SC.Wrapper>    
};