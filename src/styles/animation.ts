import { keyframes } from 'styled-components';

export const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

export const slideDown = keyframes`
    from {
        transform: translateY(-100%);
    }

    to {
        transform: translateY(0%);
    }
`;

export const showSlowly = keyframes`
    from {
        opacity: 0;
        visibility: hidden;
    }

    to {
        opacity: 1;
        visibility: visible;
    }
`;
