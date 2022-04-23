import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

export default function CustomHelmet() {
    return (
        <HelmetProvider>
            <Helmet>
                <link rel='preconnect' href='https://fonts.googleapis.com' />
                <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='*' />
                <link href='https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;400&display=swap' rel='stylesheet' />
                <link href='https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;400&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500&display=swap' rel='stylesheet' />
            </Helmet>
        </HelmetProvider>
    );
}
