import React, { useEffect, useState } from 'react';
import Alert from 'components/ui/modal/alert';
import Background from 'components/ui/modal/background';
import ModalProvider from 'components/ui/modal/modalProvider';
import { Button } from 'components/ui/button';
import { Input } from 'components/ui/input';
import useSubmitForm from 'frameworks/firebase/useSubmitForm';
import { OrderList } from 'frameworks/types';
import { useForm } from 'react-hook-form';

import { useRouter } from 'router/useRouter';
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

    const { saveUserInfo, isSuccess, isError } = useSubmitForm();
    const { movePage } = useRouter();

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
        saveUserInfo({ ...formdata, count });
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
        register('name', { required : '????????? ????????? ??????????????????.' });
        register('phoneNumber', { required : '????????? ????????? ??? ?????? ??????????????? ???????????????.' });
        register('addressNumber', { required : '?????? ????????? ???????????????.' });
        register('address', { required : '????????? ???????????????.' });
        register('detailAddress', { required : '?????? ????????? ????????? ???????????????.' });
    }, [ register ]);

    return (
        <Container>
            <FormContainer onSubmit={handleSubmit(onHandleSubmit)}>
                <FormTitleContainer>
                    <Title>?????????</Title>
                    <SubTitle>
                            ???????????? ?????? ?????? ???, ???????????? ???????????? ??????/?????? ?????? ????????? ?????? ???????????? ????????? ?????? ?????? ??????????????????. ?????????????
                    </SubTitle>
                </FormTitleContainer>
                <PrivateInfoContainer>
                    <Input.Name onChange={async (e: React.ChangeEvent) => setValue('name', (e.target as HTMLInputElement).value)} />
                    <ErrorText>{errors.name?.message}</ErrorText>
                    <Input.PhoneNumber onChange={async (e: React.ChangeEvent) => setValue('phoneNumber', (e.target as HTMLInputElement).value)} />
                    <ErrorText>{errors.phoneNumber?.message}</ErrorText>
                </PrivateInfoContainer>
                <AddressContainer>
                    <Button.Default title='?????? ?????? ??????' onClick={onClickAddressButton} theme={{ size : 'small' }} />
                    <Input.AddressNumber readonly value={zonecode} onChange={() => {}} />
                    <Input.Address readonly value={address} onChange={() => {}} />
                    <ErrorText>{errors.address?.message}</ErrorText>
                    <Input.DetailAddress onChange={async (e: React.ChangeEvent) => setValue('detailAddress', (e.target as HTMLInputElement).value)} />
                    <ErrorText>{errors.detailAddress?.message}</ErrorText>
                </AddressContainer>
                <CountContainer>
                    <CountTextContainer>
                        <span>{`?????? ?????? : ${count}`}</span>
                        <CountExplainText>* ????????? ?????? 2????????? ???????????????.</CountExplainText>
                    </CountTextContainer>
                    <CountButtonContainer>
                        <Button.Circle title='-' onClick={onClickMinusButton} />
                        <Button.Circle title='+' onClick={onClickAddButton} />
                    </CountButtonContainer>
                </CountContainer>
                <DividedLine />
                <ButtonContainer>
                    <Button.Default type='submit' title='????????? ????????????' theme={{ size : 'mobile', variant : 'disabled' }} isDisabled />
                </ButtonContainer>
            </FormContainer>
            {isSuccess && (
                <ModalProvider>
                    <Background>
                        <Alert
                            message={'????????? ?????? ?????? ???? \n ?????? ?????? ??? ?????? ??????????????????.'}
                            confirmText='??????'
                            confirmFunction={() => { movePage('/'); }}
                        />
                    </Background>
                </ModalProvider>
            )}
            {isError && (
                <ModalProvider>
                    <Background>
                        <Alert
                            message={'?????? ??? ?????? ?????? ???? \n ?????? ??? ?????? ??????????????????.'}
                            confirmText='??????'
                            confirmFunction={() => { movePage('/'); }}
                        />
                    </Background>
                </ModalProvider>
            )}
        </Container>
    );
}
