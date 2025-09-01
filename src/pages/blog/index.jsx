import React from "react";
import { Link } from "react-router-dom";
import * as SC from './styles'

export const Blog = () => {
    const blogItems = [
        {
            id: 1,
            name: 'item 1'
        },
        {
            id: 2,
            name: 'item 2'
        },
        {
            id: 3,
            name: 'item 3'
        },
        {
            id: 4,
            name: 'item 4'
        },
    ];

    return (
        <SC.Wrapper>
            Я страница Blog
            <SC.Menu>
                {blogItems.map((blogItem) => 
                    <SC.Link 
                        key={blogItem.id}
                        to={`/blog/${blogItem.id}`}
                        as={Link}
                    >
                            {blogItem.name}
                    </SC.Link>
                )}
            </SC.Menu>
        </SC.Wrapper>
    )
};