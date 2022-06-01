import React from 'react';
import styled from 'styled-components';
import Progressbar from './progressbar';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    justify-content: center;
    align-items: center;
    padding: 12px;
`;

const Title = styled.h1`
    font-size: 20px;
`;

export default function Result() {
    return (
        <Container>
            <Title>첫 번째 이벤트가 마무리 되었습니다. 🎉 👏 </Title>
            <Progressbar />
        </Container>
    );
}
