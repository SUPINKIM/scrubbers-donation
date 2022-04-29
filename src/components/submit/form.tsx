import { Button } from 'components/ui/button';
import { Input } from 'components/ui/input';
import useSubmitForm from 'frameworks/firebase/useSubmitForm';
import { OrderList } from 'frameworks/types';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
    AddressContainer, Container, FormContainer, DividedLine,
    FormTitleContainer, Title, SubTitle, CountContainer, PrivateInfoContainer,
    CountExplainText, CountTextContainer, CountButtonContainer, ButtonContainer, ErrorText,
} from './formStyles';

const id = 'postcode-frame';
const src = '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';

export function Form() {
    const [ count, setCount ] = useState(1);
    const [ zonecode, setZoneCode ] = useState('');
    const [ address, setAddress ] = useState('');

    const {
        register, handleSubmit, setValue, formState : { errors },
    } = useForm();

    const { saveUserInfo } = useSubmitForm();

    const onClickAddressButton = () => {
        window.daum.postcode.load(() => {
            new window.daum.Postcode({
                oncomplete : (data) => {
                    const { zonecode : code, address : ad } = data;
                    setZoneCode(code as string);
                    setAddress(ad);
                },
            }).open();
        });
    };

    const onClickAddButton = () => {
        setCount(count === 2 ? 2 : count + 1);
    };

    const onClickMinusButton = () => {
        setCount(count === 1 ? 1 : count - 1);
    };

    const onHandleSubmit = (formdata: Omit<OrderList, 'count'>) => {
        saveUserInfo(formdata);
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
        if (zonecode && address) {
            setValue('addressNumber', zonecode);
            setValue('address', address);
        }
    }, [ zonecode, address ]);

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
                <PrivateInfoContainer>
                    <Input.Name onChange={async (e: React.ChangeEvent) => setValue('name', (e.target as HTMLInputElement).value)} />
                    <ErrorText>{errors.name?.message}</ErrorText>
                    <Input.PhoneNumber onChange={async (e: React.ChangeEvent) => setValue('phoneNumber', (e.target as HTMLInputElement).value)} />
                </PrivateInfoContainer>
                <AddressContainer>
                    <Button.Default title='우편 번호 찾기' onClick={onClickAddressButton} theme={{ size : 'small' }} />
                    <Input.AddressNumber readonly value={zonecode} onChange={() => {}} />
                    <Input.Address readonly value={address} onChange={() => {}} />
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
