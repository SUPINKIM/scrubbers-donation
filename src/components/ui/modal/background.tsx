/** Modal background */
import React, { PropsWithChildren, useEffect, useRef } from 'react';
import styled from 'styled-components';

const BgContainer = styled.div`
    width: 100%;
    height: 100%;
    z-index: 100;
    background-color: rgba(0,0,0,0.7);
    position: fixed;
    overflow: hidden;
`;

export default function Background({ children }: PropsWithChildren<any>) {
    const parent = useRef(document.getElementById('root'));

    useEffect(() => {
        parent.current.style.position = 'fixed';
        parent.current.style.overflow = 'hidden';

        return () => {
            parent.current.style.position = 'relative';
            parent.current.style.overflow = 'auto';
        };
    }, []);

    return <BgContainer>{children}</BgContainer>;
}
