import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from 'pages/home';
import NotFound from 'pages/notfound';
import Submit from 'pages/submit';

function Router() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='submit' element={<Submit />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    );
}

export default Router;
