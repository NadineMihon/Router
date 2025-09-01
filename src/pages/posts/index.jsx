import React from "react";
import { Link } from "react-router-dom";
import * as SC from './styles'

export const Posts = () => {
    const posts = [
        {
            id: 1,
            name: 'Post 1'
        },
        {
            id: 2,
            name: 'Post 2'
        },
        {
            id: 3,
            name: 'Post 3'
        },
        {
            id: 4,
            name: 'Post 4'
        }
    ];
    
    return (
        <SC.Wrapper>
            Я страница Posts
            <SC.Menu>
                {posts.map((post) => 
                    <SC.Link 
                        key={post.id}
                        to={`/posts/${post.id}`}
                        as={Link}
                    >
                            {post.name}
                    </SC.Link>
                )}
            </SC.Menu>
        </SC.Wrapper>
    )
};