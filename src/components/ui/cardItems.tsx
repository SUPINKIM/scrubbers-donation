import React from 'react';
import styled from 'styled-components';
import { colors } from 'styles/theme';

interface ICardItemProps {
    title: string;
    content: string;
}

const Title = styled.h4`
    font-size: 20px;
    font-weight: 500;
`;

const Content = styled.span`
    word-break: keep-all;
    white-space: pre-wrap;
    line-height: 24px;
    color: ${colors.charcoal}
`;

export function CardItem({ title, content }: ICardItemProps) {
    return (
        <>
            <Title>{title}</Title>
            <Content>{content}</Content>
        </>
    );
}
