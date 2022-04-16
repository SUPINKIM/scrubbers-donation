import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Form } from 'components/submit/form';
import NotFound from 'pages/notfound';
import Home from 'pages/home';

function Router() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='submit' element={<Form />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    );
}

export default Router;
