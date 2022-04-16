import React from 'react';
import styled from 'styled-components';
import { colors } from 'styles/theme';

const MainContainer = styled.div`
    width: 100%;
    height: 100vh;
`;

const Title = styled.div`
    margin: 0 auto;
    width: 50%;
    height: 120px;
    background-color: 120px;
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    filter: drop-shadow(0 0 0.75rem ${colors.yellow});
`;

export function Main() {
    return (
        <MainContainer>
            <Title>수세미 프로젝트에 오신 걸 환영합니다!</Title>
        </MainContainer>
    );
}
