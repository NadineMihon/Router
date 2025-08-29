import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export const Feedback = () => {
    const [values, setValues] = useState({
        name: '',
        email: ''
    });

    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    console.log(searchParams.get('test'));

    const isTest = searchParams.get('test') === 'true';

    const onChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    };

    const onSend = () => {
        setTimeout(() => navigate('/'), 1000);
    };

    return (
        <form>
            <input type="text" name="name" placeholder="Имя" onChange={onChange} />
            <br />
            <input type="text" name="email" placeholder="Email" onChange={onChange} />
            <br />
            <button type="button" onClick={onSend}>Отправить</button>
            {
                isTest &&
                <div>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quia ab eligendi voluptate commodi cupiditate nemo eos ipsa corrupti? Culpa doloremque qui,
                    veniam illo omnis ut doloribus ea velit voluptate error.
                </div>
            }
        </form>
    )
};