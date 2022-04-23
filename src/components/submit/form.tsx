import { Button } from 'components/ui/button';
import { Input } from 'components/ui/input';
import { OrderList } from 'frameworks/types';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
    AddressContainer, Container, FormContainer, DividedLine,
    FormTitleContainer, Title, SubTitle, CountContainer,
    CountExplainText, CountTextContainer, CountButtonContainer, ButtonContainer,
} from './formStyles';

const id = 'postcode-frame';
const src = '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';

export function Form() {
    const [ count, setCount ] = useState(1);
    const {
        register, handleSubmit, setValue,
    } = useForm();

    const onClickAddressButton = () => {
        window.daum.postcode.load(() => {
            new window.daum.Postcode({
                oncomplete : (data) => {
                    console.log(data);
                },
            }).open();
        });
    };

    const onClickAddButton = () => {
        setCount(count === 2 ? 2 : count + 1);
    };

    const onClickMinusButton = () => {
        setCount(count === 0 ? 0 : count - 1);
    };

    const onHandleSubmit = (formdata: Omit<OrderList, 'count'>) => {
        console.log(formdata);
    };

    useEffect(() => {
        const isPostCodeScript = document.getElementById(id);

        if (!isPostCodeScript) {
            const script = document.createElement('script');
            script.id = id;
            script.src = src;

            document.body.append(script);
        }
    }, []);

    useEffect(() => {
        register('name', { required : '주문자 성함을 입력해주세요.' });
        register('phoneNumber', { required : '연락을 받으실 수 있는 전화번호를 적어주세요.' });
        register('addressNumber', { required : '우편 번호는 필수입니다.' });
        register('address', { required : '주소는 필수입니다.' });
        register('detailAddress', { required : '상세 주소를 정확히 적어주세요.' });
    }, [ register ]);

    return (
        <Container>
            <FormContainer onSubmit={handleSubmit(onHandleSubmit)}>
                <FormTitleContainer>
                    <Title>주문서</Title>
                    <SubTitle> * 적어주신 연락처로 물품 발송 시에 연락을 드릴 예정이니 정확한 정보 기재 부탁드립니다. 🙇‍♀️ </SubTitle>
                </FormTitleContainer>
                <Input.Name onChange={async (e: React.ChangeEvent) => setValue('name', (e.target as HTMLInputElement).value)} />
                <Input.PhoneNumber onChange={async (e: React.ChangeEvent) => setValue('phoneNumber', (e.target as HTMLInputElement).value)} />
                <AddressContainer>
                    <Button.Default title='우편 번호 찾기' onClick={onClickAddressButton} />
                    <Input.AddressNumber onChange={async (e: React.ChangeEvent) => setValue('addressNumber', (e.target as HTMLInputElement).value)} />
                    <Input.Address onChange={async (e: React.ChangeEvent) => setValue('address', (e.target as HTMLInputElement).value)} />
                    <Input.DetailAddress onChange={async (e: React.ChangeEvent) => setValue('detailAddress', (e.target as HTMLInputElement).value)} />
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
                    <Button.Default type='submit' title='주문서 제출하기' theme={{ size : 'mobile' }} />
                </ButtonContainer>
            </FormContainer>
        </Container>
    );
}
