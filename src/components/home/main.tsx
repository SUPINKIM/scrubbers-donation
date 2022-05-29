import React, { useEffect, useRef, useState } from 'react';
import { CardItem } from 'components/ui/cardItems';
import { Button } from 'components/ui/button';
import ModalProvider from 'components/ui/modal/modalProvider';
import Background from 'components/ui/modal/background';
import Alert from 'components/ui/modal/alert';
import {
    Container, Card, ContentsContainer, ImageContainer, ButtonLink,
    Title, TitleContainer, Img, ButtonContainer, SubTitle,
} from './mainStyles';

const contents = [
    {
        title : '🤔 수세미 프로젝트란?',
        content : '직접 만든 수세미를 판 수익금을 동물 보호 단체에 기부하는 프로젝트입니다. 수량 소진 시 이벤트가 조기 종료 될 수 있습니다!',
    },
    {
        title : '😎 어떻게 참여하나요?',
        content : '아래 [주문서 작성하기] 버튼을 누르시면 주문서를 작성하실 수 있습니다. 주문서가 들어온 순서대로 개별 연락을 드릴 예정입니다!',
    },
    {
        title : '🧽  수세미는 어떻게 생겼나요?',
        content : '스마일 모양을 한 원형 수세미입니다. 기본 색상은 [버터밀크], 눈과 입은 [블랙]이에요. 지름은 대략 12cm 내외 입니다. 이미지를 참고해주세요.',
    },
    {
        title : '💰 수세미의 가격은요?',
        content : '수세미는 개당 3,000원입니다. 최대 2개까지 구매 가능하며 배송료는 별도입니다. (기본 배송비 : 3,000원, 제주도 및 도서 지역 : 4,000원)',
    },
    {
        title : '📌 참고 사항',
        content : '핸드메이드이기 때문에 개별 상품마다 사이즈에 약간의 오차가 있을 수 있습니다. 이로 인한 환불/교환 처리는 불가하다는 점 양해 부탁드립니다.🙇‍♀️',
    },
];

export function Main() {
    const imageRefs = Array(4).fill(0).map(() => useRef<HTMLImageElement>());
    const [ isShowModal, setShowModal ] = useState(true);

    const loadImage = (imageRef: React.MutableRefObject<HTMLImageElement>) => new Promise<string>(
        (resolve, reject) => {
            const imgObj = new Image();
            imgObj.src = imageRef.current.dataset.src;
            imgObj.onload = () => resolve(imgObj.src);
            imgObj.onerror = () => reject(Error('fail to load image'));
        },
    );

    useEffect(() => {
        Promise.all(imageRefs.map((ref) => loadImage(ref)))
            .then((res) => res.forEach((url, index) => {
                imageRefs[index].current.src = url;
            }))
            .catch((error) => console.error(error)); // 추후 에러 핸들링 수정 필요
    }, []);

    return (
        <Container>
            <TitleContainer>
                <Title>🧽 수세미 프로젝트에 오신 걸 환영합니다!</Title>
                <SubTitle>판매 수익금은 동물 보호 단체에 기부됩니다.</SubTitle>
            </TitleContainer>
            <ContentsContainer>
                <ImageContainer>
                    <Img>
                        <img
                            ref={imageRefs[0]}
                            data-src='assets/smile111.jpeg'
                            src='https://via.placeholder.com/300?text=scrubbers-image-loading'
                            alt='수세미 예시2'
                            loading='lazy'
                        />
                    </Img>

                    <Img>
                        <img
                            ref={imageRefs[1]}
                            data-src='assets/smile444.jpeg'
                            src='https://via.placeholder.com/300?text=scrubbers-image-loading'
                            alt='수세미 예시3'
                            loading='lazy'
                        />
                    </Img>
                    <Img>
                        <img
                            ref={imageRefs[2]}
                            data-src='assets/smile222.jpeg'
                            src='https://via.placeholder.com/300?text=scrubbers-image-loading'
                            alt='수세미 예시1'
                            loading='lazy'
                        />
                    </Img>
                    <Img>
                        <img
                            ref={imageRefs[3]}
                            data-src='assets/smile333.jpeg'
                            src='https://via.placeholder.com/300?text=scrubbers-image-loading'
                            alt='수세미 예시4'
                            loading='lazy'
                        />
                    </Img>
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
            {isShowModal && (
                <ModalProvider>
                    <Background>
                        <Alert
                            message={'1차 이벤트가 종료되었습니다. \n 리오프닝 준비 중이니 조금만 기다려주세요!! 🙇‍♀️'}
                            confirmText='확인'
                            confirmFunction={() => {
                                setShowModal(false);
                            }}
                        />
                    </Background>
                </ModalProvider>
            )}
        </Container>
    );
}
