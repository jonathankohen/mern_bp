import React, { useState, useEffect } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';

import Form from '../components/Form';

const Edit = props => {
    const { id } = props,
        [author, setAuthor] = useState([]),
        [errors, setErrors] = useState([]),
        [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/authors/${id}`)
            .then(res => {
                setAuthor(res.data.results);
                setLoaded(true);
            })
            .catch(err => console.log(err));
        // eslint-disable-next-line
    }, []);

    const updateAuthor = updatedAuthor => {
        axios
            .put(`http://localhost:8000/api/authors/edit/${id}`, updatedAuthor)
            .then(() => navigate('/'))
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
            <h1>Edit</h1>
            {loaded && (
                <Form
                    onSubmitProp={updateAuthor}
                    initialName={author.name}
                    errors={errors}
                />
            )}
        </>
    );
};

export default Edit;
