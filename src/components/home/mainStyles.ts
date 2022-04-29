import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { showSlowly } from 'styles/animation';
import { colors } from 'styles/theme';

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 12px;
    row-gap: 16px;
`;

const TitleContainer = styled.div`
    width: 100%;
    height: 160px;
    display: flex;
    align-items: center;
    @media screen and (max-width: 768px) {
        margin-bottom: 24px;
    }
`;

const Title = styled.div`
    margin: 0 auto;
    text-align: center;
    width: 90%;
    height: 120px;
    background-color: 120px;
    font-size: 30px;
    display: flex;
    font-weight: 700;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    word-break: keep-all;
    white-space: pre-line;
    line-height: 36px;
    //animation: 1s ${showSlowly};
    filter: drop-shadow(0 0 0.8rem ${colors.yellow});
    @media screen and (max-width: 768px) {
        font-size: 26px;
    }
`;

const ContentsContainer = styled.div`
    width: 100%;
    height: calc(100vh - 160px);
    display: flex;
    column-gap: 24px;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 768px) {
        flex-direction: column;
        row-gap: 36px;
        justify-content: space-between; 
        height: fit-content;
    }
`;

const ImageContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 20px;
    @media screen and (max-width: 768px) {
        width: 90%;
    }
`;

const Card = styled.div`
    width: 520px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    box-shadow: 1px 1px 20px 1px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    margin: 12px;
    padding: 20px;
    row-gap: 12px;
    animation: 1s ease-in ${showSlowly};
    justify-content: center;
    @media screen and (max-width: 768px) {
        width: 90%;
        margin-top: 24px;
    }
`;

const Image = styled.div`
    position: relative;
    width: 300px;
    height: 360px;
    border-radius: 12px;
    animation: 2s ease-in ${showSlowly};
`;

const LeftImage = styled(Image)`
    top: -40px;
`;

const RightImage = styled(Image)`
    top: 40px;
`;

const ButtonContainer = styled.div`
    width: 100%;
    animation: 2s ease-in ${showSlowly};
    @media screen and (max-width: 768px) {
        margin-top: 16px;
    }
`;

const ButtonLink = styled(Link)`
    all: unset;
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 16px;
`;

export {
    Container, Card, ContentsContainer, ImageContainer,
    Title, TitleContainer, ButtonContainer, ButtonLink, LeftImage, RightImage,
};
