import React from 'react';
import { Router } from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';

import Main from './views/Main';
import New from './views/New';
import Edit from './views/Edit';

function App() {
    return (
        <Router>
            <Main path="/" />
            <New path="/authors/new" />
            <Edit path="/authors/edit/:id" />
        </Router>
    );
}

export default App;
