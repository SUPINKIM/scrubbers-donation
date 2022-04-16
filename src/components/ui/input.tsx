import React from 'react';
import styled from 'styled-components';
import { colors } from 'styles/theme';

const InputContainer = styled.input`
    min-width: ${(props) => (props.className === 'width-md' ? '30%' : '70%')};
    height: 36px;
    line-height: 34px;
    border-color: ${colors.lightGray};
    border: 1.5px solid ${colors.lightGray};
    border-radius: 4px;
    font-size: 16px;
    padding-left: 8px;
    ::placeholder {
        color: ${colors.gray};
        font-size: 14px;
    }
    @media screen and (max-width: 500px) {
        width: 96%;
    }
`;

interface IInputProps {
    placeholder: string;
    type?: string;
    className?: string;
}

function InputTemplate({ placeholder, type = 'text', className = '' }: IInputProps) {
    return (
        <InputContainer placeholder={placeholder} type={type} className={className} />
    );
}

InputTemplate.defaultProps = {
    type : 'text',
    className : '',
};

export const Input = {
    Name : () => <InputTemplate placeholder='주문자 분 성함을 입력해주세요.' />,
    PhoneNumber : () => <InputTemplate placeholder='주문하시는 분의 연락처를 - 없이 적어주세요. 예) 01012345678' type='tel' />,
    AddressNumber : () => <InputTemplate placeholder='우편 번호' className='width-md' />,
    Address : () => <InputTemplate placeholder='받으실 주소' />,
    DetailAddress : () => <InputTemplate placeholder='배송받으실 곳의 상세 주소를 정확히 적어주세요.' />,
};
