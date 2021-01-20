import React, { useState } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';

import Form from '../components/Form';

const New = () => {
    const [errors, setErrors] = useState([]);

    // once updated with the post req, just navigating back to / will add it to DOM
    const createAuthor = newAuthor => {
        axios
            .post('http://localhost:8000/api/authors/create', newAuthor)
            .then(() => navigate('/'))
            // .then(res => console.log(res))
            .catch(err => {
                const errorResponse = err.response.data.errors,
                    errorArr = [];

                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message);
                }

                setErrors(errorArr);
            });
    };

    return (
        <>
            <h1>Add a new author:</h1>
            <Form onSubmitProp={createAuthor} initialName="" errors={errors} />
        </>
    );
};

export default New;
