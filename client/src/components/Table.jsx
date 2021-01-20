import React from 'react';
import { Link } from '@reach/router';
import axios from 'axios';

const Table = props => {
    const { authors, setAuthors } = props;

    const handleDelete = authorId => {
        axios
            .delete(`http://localhost:8000/api/authors/delete/${authorId}`)
            .then(() =>
                setAuthors(authors.filter(author => author._id !== authorId))
            )
            .catch(err => console.log(err));
    };

    return (
        <>
            <h1>We have quotes by:</h1>
            <ul className="list-group">
                {authors.map((author, i) => (
                    <li key={i} className="list-group-item">
                        {author.name}
                        {' | '}
                        <Link to={`/authors/edit/${author._id}`}>Edit</Link>
                        {' | '}
                        <button
                            className="btn btn-sm btn-danger"
                            onClick={() => handleDelete(author._id)}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Table;
