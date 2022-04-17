import { Button } from 'components/ui/button';
import { Input } from 'components/ui/input';
import React, { useState } from 'react';
import {
    AddressContainer, Container, FormContainer, DividedLine,
    FormTitleContainer, Title, SubTitle, CountContainer,
    CountExplainText, CountTextContainer, CountButtonContainer, ButtonContainer,
} from './formStyles';

export function Form() {
    const [ count, setCount ] = useState(0);

    const onClickAddButton = () => {
        setCount(count === 2 ? 2 : count + 1);
    };

    const onClickMinusButton = () => {
        setCount(count === 0 ? 0 : count - 1);
    };

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
                    <Button.Default title='우편 번호 찾기' />
                    <Input.AddressNumber />
                    <Input.Address />
                    <Input.DetailAddress />
                </AddressContainer>
                <CountContainer>
                    <CountTextContainer>
                        <span>{`주문 수량 : ${count}`}</span>
                        <CountExplainText>* 주문은 최대 2개까지 가능합니다.</CountExplainText>
                    </CountTextContainer>
                    <CountButtonContainer>
                        <Button.Circle title='+' onClick={onClickAddButton} />
                        <Button.Circle title='-' onClick={onClickMinusButton} />
                    </CountButtonContainer>
                </CountContainer>
                <DividedLine />
                <ButtonContainer>
                    <Button.Default title='주문서 제출하기' theme={{ size : 'mobile' }} />
                </ButtonContainer>
            </FormContainer>
        </Container>
    );
}
