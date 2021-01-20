import React, { useState } from 'react';

const Form = props => {
    const { initialName, onSubmitProp, errors } = props,
        [name, setName] = useState(initialName);

    const handleSubmit = e => {
        // setErrors('');
        e.preventDefault();
        onSubmitProp({ name: name });
    };

    return (
        <form onSubmit={handleSubmit}>
            {errors.map((err, i) => (
                <p key={i} className="text-danger">
                    {err}
                </p>
            ))}
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Author's name ex/ Kurt Vonnegut"
                    onChange={e => setName(e.target.value)}
                    value={name}
                />
                {/* <span className="text-danger">
                    {errors.name ? errors.name.message : ''}
                </span> */}
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default Form;
