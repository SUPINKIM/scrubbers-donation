import React from 'react';
import styled from 'styled-components';
import { colors } from 'styles/theme';
import { extendsLeftToRight } from 'styles/animation';

const Container = styled.div`
    position: relative;
`;

const BackgroundBar = styled.div`
    width: 500px;
    height: 20px;
    border-radius: 10px;
    background-color: ${colors.lightGray};
`;

const MovingContainer = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    column-gap: 4px;
`;

const MovingBar = styled.div`
    width: 120px;
    height: 20px;
    border-radius: 10px;
    background-color: ${colors.coral}; 
    animation: 2s ease-in-out ${extendsLeftToRight};
`;

const MovingIcon = styled.div`
    width: fit-content;
    height: fit-content;
    font-size: 28px;
    transform: translateY(-4px)
`;

export default function Progressbar() {
    return (
        <Container>
            <BackgroundBar />
            <MovingContainer>
                <MovingBar />
                <MovingIcon>🚀</MovingIcon>
            </MovingContainer>
        </Container>
    );
}
