import styled from 'styled-components';
import { colors } from 'styles/theme';

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    padding: 16px;
`;

const FormContainer = styled.div`
    width: 70%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    row-gap: 16px;
    padding: 16px;
    align-items: center;
    box-shadow: 1px 1px 20px 1px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    @media screen and (max-width: 500px) {
        width: 96%;
    }
`;

const FormTitleContainer = styled.div`
    width: 100%;
    display:flex;
    flex-direction: column;
    row-gap: 20px;
    padding: 12px 0;
    margin-top: 20px;
    margin-bottom: 20px;
`;

const Title = styled.h1`
    font-size: 24px;
    text-align: center;
`;

const SubTitle = styled.div`
    font-size: 16px;
    text-align: center;
    color: ${colors.gray}
    word-break: keep-all;
`;

const AddressContainer = styled.div`
    width: 100%;
    align-self: center;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 12px;
    margin-top: 16px;
    margin-left: 30%;
    @media screen and (max-width: 500px) {
        margin-left: 4%;
    }
`;

export {
    Container, FormContainer, FormTitleContainer, Title, SubTitle, AddressContainer,
};
