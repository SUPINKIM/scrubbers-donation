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

interface IInputTemplateProps {
    placeholder: string;
    type?: string;
    className?: string;
    onChange?: React.ChangeEventHandler;
}

type IInput = Pick<IInputTemplateProps, 'onChange'>;

function InputTemplate({
    placeholder, type, className, onChange,
}: IInputTemplateProps) {
    return (
        <InputContainer
            type={type}
            className={className}
            onChange={onChange}
            placeholder={placeholder}
        />
    );
}

InputTemplate.defaultProps = {
    type : 'text',
    className : '',
};

export const Input = {
    Name : ({ onChange }: IInput) => <InputTemplate placeholder='주문자 분 성함을 입력해주세요.' onChange={onChange} />,
    PhoneNumber : ({ onChange }: IInput) => <InputTemplate placeholder='주문하시는 분의 연락처를 - 없이 적어주세요. 예) 01012345678' type='tel' onChange={onChange} />,
    AddressNumber : ({ onChange }: IInput) => <InputTemplate placeholder='우편 번호' className='width-md' onChange={onChange} />,
    Address : ({ onChange }: IInput) => <InputTemplate placeholder='받으실 주소' onChange={onChange} />,
    DetailAddress : ({ onChange }: IInput) => <InputTemplate placeholder='배송받으실 곳의 상세 주소를 정확히 적어주세요.' onChange={onChange} />,
};
