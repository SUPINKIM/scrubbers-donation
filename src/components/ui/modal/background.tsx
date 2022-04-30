/** Modal background */
import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

const BgContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.7);
    position: absolute;
    top: 0;
    left :0;
`;

export default function Background({ children }: PropsWithChildren<any>) {
    return <BgContainer>{children}</BgContainer>;
}
