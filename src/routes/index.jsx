import { createBrowserRouter } from "react-router-dom";
import { Root } from "../components/Root";
import { Error } from "../pages/error";
import { Main } from "../pages/main";
import { Posts } from "../pages/posts";
import { Post } from "../pages/posts/components/Post";
import { Blog } from "../pages/blog";
import { BlogItem } from "../pages/blog/components/BlogItem";
import { Feedback } from "../pages/feedback";
import { Login } from "../pages/login";
import { Protected } from "../pages/protected";
import { CheckAuth } from "../components/CheckAuth";

export const routesConfig = [
    {
        path: '/',
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Main />
            },
            {
                path: '/posts',
                element: <Posts />
            },
            {
                path: '/posts/:postId',
                element: <Post />
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path:'/blog/:blogItemId',
                element: <BlogItem />
            },
            {
                path: '/feedback',
                element: <Feedback />
            },
            {
                path: '/protected',
                element: <CheckAuth>
                    <Protected />
                </CheckAuth>
            },
        ],
    },
    {
        path: '/login',
        element: <Login />
    },
];

export const appRouter = createBrowserRouter(routesConfig);