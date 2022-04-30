import React from 'react';
import styled from 'styled-components';
import { colors } from 'styles/theme';
import { Button } from '../button';

const Container = styled.div`
    width: 280px;
    height: 180px;
    display: flex;
    flex-direction: column;
    background-color: ${colors.white};
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0 auto;
    justify-content: center;
    row-gap: 30px;
    padding: 20px;
    border-radius: 10px;
`;

interface IAlert {
    message: string;
    confirmText: string;
    confirmFunction: () => void;

}

export default function Alert({ message, confirmText, confirmFunction }: IAlert) {
    return (
        <Container>
            <div>
                {message}
            </div>
            <Button.Default title={confirmText} onClick={confirmFunction} theme={{ size : 'small', variant : 'black' }} />
        </Container>
    );
}
