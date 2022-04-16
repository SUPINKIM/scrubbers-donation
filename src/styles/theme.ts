import { css } from 'styled-components';
import theme from 'styled-theming';

export const colors = {
    white : '#ffffff',
    flashWhite : '#f1f2f6',
    black : '#000000',
    yellow : '#F79F1F',
    gray : '#747d8c',
    lightGray : '#c8d6e5',
    darkGray : '#576574',
    orange : '#f0932b',
    red : '#e74c3c',
};

export const WidthStyles = theme('size', {
    full : css`
        width: 100%;
    `,
    large : css`
        width: 70%;
    `,
    midium : css`
        width: 50%;
    `,
});

export const buttonStyles = theme('variant', {
    default : css`
        background: ${colors.orange};
        color: ${colors.white};
    `,
    outline : css`
        background: ${colors.white};
        color: ${colors.orange};
    `,
    circle : css`
        width: 28px;
        height: 28px;
        font-size: 16px;
        line-height: 14px;
        border: 2px solid ${colors.orange};
        background: ${colors.white};
        color: ${colors.orange};
        border-radius: 50%;
    `,
});
