import { Input } from 'components/ui/input';
import React, { useState } from 'react';
import styled from 'styled-components';
import {
    AddressContainer, Container, FormContainer, FormTitleContainer, Title, SubTitle,
} from './formStyles';

const CountContainer = styled(AddressContainer)`
    flex-direction: row;
    column-gap: 20px;
`;

export function Form() {
    const [ count, setCount ] = useState(0);

    return (
        <Container>
            <FormContainer>
                <FormTitleContainer>
                    <Title>주문서</Title>
                    <SubTitle> * 적어주신 연락처로 물품 발송 시에 연락을 드릴 예정이니 정확한 정보 기재 부탁드립니다. 🙇‍♀️ </SubTitle>
                </FormTitleContainer>
                <Input.Name />
                <Input.PhoneNumber />
                <AddressContainer>
                    <button type='button'>우편 번호 찾기</button>
                    <Input.AddressNumber />
                    <Input.Address />
                    <Input.DetailAddress />
                </AddressContainer>
                <CountContainer>
                    <span>{`주문 수량 : ${count}`}</span>
                    <span>* 주문은 최대 2개까지 가능합니다.</span>
                    <button type='button' onClick={() => setCount(count + 1)}>+</button>
                    <button type='button' onClick={() => setCount(count - 1)}>-</button>
                </CountContainer>
            </FormContainer>
        </Container>
    );
}
