import { Button } from 'components/ui/button';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    justify-content: center;
    align-items: center;
`;

export function NotFoundComponent() {
    return (
        <Container>
            <div>요청하신 페이지를 찾을 수 없습니다. 😭</div>
            <Link to='/'>
                <Button.Default title='홈으로 돌아가기' />
            </Link>
        </Container>
    );
}
