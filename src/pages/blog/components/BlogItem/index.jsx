import React from "react";
import { useParams } from "react-router-dom";

export const BlogItem = ({ name }) => {
    const { blogItemId } = useParams();
    return (
        <div>Элемент блога №{blogItemId}</div>
    )
};