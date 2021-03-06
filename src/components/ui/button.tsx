import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { buttonStyles, FontStyles, WidthStyles } from 'styles/theme';

const StyledButton = styled.button`
    width: 160px;
    height: 40px;
    border: none;
    outline: none;
    border-radius: 8px;
    font-size: 14px;
    cursor: pointer;
    :hover {
        transform: scale(0.98);
        opacity: 0.9;
    }
    ${buttonStyles}
    ${WidthStyles}
    ${FontStyles}
`;

interface IButtonProps {
    type?: 'button' | 'submit' | 'reset';
    title?: string | number;
    theme?: Record<string, string>;
    onClick?: () => void;
    isDisabled?: boolean;
}

function ButtonTemplate({
    title, theme, onClick, type, isDisabled,
}: IButtonProps) {
    return (
        <ThemeProvider theme={theme}>
            <StyledButton type={type} onClick={onClick} disabled={isDisabled}>
                {title}
            </StyledButton>
        </ThemeProvider>
    );
}

ButtonTemplate.defaultProps = {
    type : 'button',
    title : '',
    theme : { variant : 'default' },
    onClick : () => { },
    isDisabled : false,
};

export const Button = {
    Default : ({
        title, onClick, theme, type, isDisabled,
    }: IButtonProps) => (
        <ButtonTemplate
            title={title}
            theme={{ variant : 'default', ...theme }}
            onClick={onClick}
            type={type}
            isDisabled={isDisabled}
        />
    ),
    Outline : ({
        title, onClick, theme, type, isDisabled,
    }: IButtonProps) => (
        <ButtonTemplate
            title={title}
            theme={{ variant : 'outline', ...theme }}
            onClick={onClick}
            type={type}
            isDisabled={isDisabled}
        />
    ),
    Circle : ({
        title, onClick, theme, type, isDisabled,
    }: IButtonProps) => (
        <ButtonTemplate
            title={title}
            theme={{ variant : 'circle', ...theme }}
            onClick={onClick}
            type={type}
            isDisabled={isDisabled}
        />
    ),
};
