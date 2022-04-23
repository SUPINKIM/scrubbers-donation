import React from 'react';
import { CardItem } from 'components/ui/CardItems';
import { Button } from 'components/ui/button';
import {
    Container, Card, ContentsContainer, ImageContainer, ButtonLink,
    Title, TitleContainer, LeftImage, RightImage, ButtonContainer,
} from './mainStyles';

const contents = [
    {
        title : '🤔 수세미 프로젝트란?',
        content : '직접 만든 수세미를 판 수익금을 동물 보호 단체에 기부하는 프로젝트입니다.',
    },
    {
        title : '😎 어떻게 참여하나요?',
        content : '아래 [주문서 작성하기] 버튼을 누르시면 주문서를 작성하실 수 있습니다. 주문서가 들어온 순서대로 개별 연락을 드릴 예정입니다!',
    },
    {
        title : '🧽  수세미는 어떻게 생겼나요?',
        content : '스마일 모양을 한 원형 수세미입니다. 기본 색상은 [버터밀크], 눈과 입은 [블랙]이에요. 지름은 대략 12cm 내외 입니다. 왼쪽 이미지를 참고해주세요.',
    },
    {
        title : '💰 수세미의 가격은요?',
        content : '수세미는 한 개당 2,000원입니다. 배송료는 별도입니다. (배송비 : 2,500원)',
    },
    {
        title : '📌 참고 사항',
        content : '핸드메이드이기 때문에 개별 상품마다 사이즈에 약간의 오차가 있을 수 있습니다. 이로 인한 환불/교환 처리는 불가하다는 점 양해 부탁드립니다.🙇‍♀️',
    },
];

export function Main() {
    return (
        <Container>
            <TitleContainer>
                <Title> 🧽 수세미 프로젝트에 오신 걸 환영합니다! </Title>
            </TitleContainer>
            <ContentsContainer>
                <ImageContainer>
                    <LeftImage>
                        <img src='assets/scrubbers2.jpeg' alt='수세미 예시2' loading='lazy' />
                    </LeftImage>
                    <RightImage>
                        <img src='assets/scrubbers1.jpeg' alt='수세미 예시1' loading='lazy' />
                    </RightImage>
                </ImageContainer>
                <Card>
                    {contents.map((item) => (
                        <CardItem key={item.title} title={item.title} content={item.content} />
                    ))}
                    <ButtonContainer>
                        <ButtonLink to='/submit'>
                            <Button.Default title='주문서 작성하기  👉 ' theme={{ size : 'full', 'font-size' : 'md' }} />
                        </ButtonLink>
                    </ButtonContainer>
                </Card>
            </ContentsContainer>
        </Container>
    );
}
