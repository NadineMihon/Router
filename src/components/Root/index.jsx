import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import * as SC from './styles'

export const Root = () => (
    <SC.Wrapper>
        <SC.Menu>
            <SC.Link 
                to='/'
                as={NavLink}
                className={({ isActive }) => isActive ? "active" : ""}
            >
                    Главная
            </SC.Link>
            <SC.Link 
                to='posts'
                as={NavLink}
                className={({ isActive }) => isActive ? "active" : ""} 
            >
                    Посты
            </SC.Link>
            <SC.Link 
                to='blog'
                as={NavLink}
                className={({ isActive }) => isActive ? "active" : ""}
            >
                    Блог
            </SC.Link>
        </SC.Menu>
        <Outlet />
    </SC.Wrapper>    
)