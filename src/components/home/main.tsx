import React, { useEffect, useRef, useState } from 'react';
import { CardItem } from 'components/ui/cardItems';
import { Button } from 'components/ui/button';
import ModalProvider from 'components/ui/modal/modalProvider';
import Background from 'components/ui/modal/background';
import Alert from 'components/ui/modal/alert';
import {
    Container, Card, ContentsContainer, ButtonLink, ImageContainer,
    Title, TitleContainer, Img, ButtonContainer, SubTitle,
} from './mainStyles';

const contents = [
    {
        title : 'π€ μμΈλ―Έ νλ‘μ νΈλ?',
        content : 'μ§μ  λ§λ  μμΈλ―Έλ₯Ό ν μμ΅κΈμ λλ¬Ό λ³΄νΈ λ¨μ²΄μ κΈ°λΆνλ νλ‘μ νΈμλλ€.\nμλ μμ§ μ μ΄λ²€νΈκ° μ‘°κΈ° μ’λ£ λ  μ μμ΅λλ€!',
    },
    {
        title : 'π μ΄λ»κ² μ°Έμ¬νλμ?',
        content : 'μλ [μ£Όλ¬Έμ μμ±νκΈ°] λ²νΌμ λλ₯΄μλ©΄ μ£Όλ¬Έμλ₯Ό μμ±νμ€ μ μμ΅λλ€.\nμ£Όλ¬Έμκ° λ€μ΄μ¨ μμλλ‘ κ°λ³ μ°λ½μ λλ¦΄ μμ μλλ€!',
    },
    {
        title : 'π§½  μμΈλ―Έλ μ΄λ»κ² μκ²Όλμ?',
        content : 'μ€λ§μΌ λͺ¨μμ ν μν μμΈλ―Έμλλ€. κΈ°λ³Έ μμμ [λ²ν°λ°ν¬], λκ³Ό μμ [λΈλ]μ΄μμ.\nμ§λ¦μ λλ΅ 12cm λ΄μΈ μλλ€. μ΄λ―Έμ§λ₯Ό μ°Έκ³ ν΄μ£ΌμΈμ.',
    },
    {
        title : 'π° μμΈλ―Έμ κ°κ²©μμ?',
        content : 'μμΈλ―Έλ κ°λΉ 3,000μμλλ€. μ΅λ 2κ°κΉμ§ κ΅¬λ§€ κ°λ₯νλ©° λ°°μ‘λ£λ λ³λμλλ€.\n(κΈ°λ³Έ λ°°μ‘λΉ : 3,000μ, μ μ£Όλ λ° λμ μ§μ­ : 4,000μ)',
    },
    {
        title : 'π μ°Έκ³  μ¬ν­',
        content : 'νΈλλ©μ΄λμ΄κΈ° λλ¬Έμ κ°λ³ μνλ§λ€ μ¬μ΄μ¦μ μ½κ°μ μ€μ°¨κ° μμ μ μμ΅λλ€.\nμ΄λ‘ μΈν νλΆ/κ΅ν μ²λ¦¬λ λΆκ°νλ€λ μ  μν΄ λΆνλλ¦½λλ€.πββοΈ',
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
            })); // μΆν μλ¬ νΈλ€λ§ μΆκ° μμ νμ
    }, []);

    return (
        <Container>
            <TitleContainer>
                <Title>π§½ μμΈλ―Έ νλ‘μ νΈμ μ€μ  κ±Έ νμν©λλ€!</Title>
                <SubTitle>νλ§€ μμ΅κΈμ λλ¬Ό λ³΄νΈ λ¨μ²΄μ κΈ°λΆλ©λλ€.</SubTitle>
            </TitleContainer>
            <ContentsContainer>
                <ImageContainer>
                    <Img>
                        <img
                            ref={imageRefs[0]}
                            data-src='assets/smile111.jpeg'
                            src='https://via.placeholder.com/300?text=scrubbers-image-loading'
                            alt='μμΈλ―Έ μμ2'
                            loading='lazy'
                        />
                    </Img>
                    <Img>
                        <img
                            ref={imageRefs[1]}
                            data-src='assets/smile444.jpeg'
                            src='https://via.placeholder.com/300?text=scrubbers-image-loading'
                            alt='μμΈλ―Έ μμ3'
                            loading='lazy'
                        />
                    </Img>
                    <Img>
                        <img
                            ref={imageRefs[2]}
                            data-src='assets/smile222.jpeg'
                            src='https://via.placeholder.com/300?text=scrubbers-image-loading'
                            alt='μμΈλ―Έ μμ1'
                            loading='lazy'
                        />
                    </Img>
                    <Img>
                        <img
                            ref={imageRefs[3]}
                            data-src='assets/smile333.jpeg'
                            src='https://via.placeholder.com/300?text=scrubbers-image-loading'
                            alt='μμΈλ―Έ μμ4'
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
                            <Button.Default title='μ£Όλ¬Έμ μμ±νκΈ°  π ' theme={{ size : 'full', 'font-size' : 'md' }} />
                        </ButtonLink>
                    </ButtonContainer>
                </Card>
            </ContentsContainer>
            {/* <div>
                1μ°¨ μ΄λ²€νΈ νκΈ° λ³΄λ¬ κ°κΈ° π
                    </div> */}
            {isShowModal && (
                <ModalProvider>
                    <Background>
                        <Alert
                            message={'1μ°¨ μ΄λ²€νΈκ° μ’λ£λμμ΅λλ€. \n λ¦¬μ€νλ μ€λΉ μ€μ΄λ μ‘°κΈλ§ κΈ°λ€λ €μ£ΌμΈμ!! πββοΈ'}
                            confirmText='νμΈ'
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
