import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';
import axios from 'axios';

import Table from '../components/Table';

const Main = () => {
    const [authors, setAuthors] = useState([]),
        [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios
            .get('http://localhost:8000/api/authors')
            .then(res => {
                setAuthors(res.data.results);
                setLoaded(true);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <>
            <Link to="/authors/new">Add an author</Link>
            {loaded && <Table authors={authors} setAuthors={setAuthors} />}
        </>
    );
};

export default Main;
