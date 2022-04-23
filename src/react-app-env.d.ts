/* eslint-disable no-unused-vars */
type DaumPostcodeProperty = {
    zonecode: string | number;
    address: string;
    addressEnglish: string;
    addresstype: 'R' | 'J'; // R: 도로명, J : 지번
    userSelectedType : 'R' | 'J';
    noSelected: 'Y' | 'N'; // Y : Yes, N : No
    userLanguageType: 'K' | 'E'; // K : korean, E : English
    roadAddress: string;
    roadAddressEnglish: string;
    jibunAddress: string;
    autoRoadAddress: string;
    jibunAddressEnglish: string;
    autoJibunAddress: string;
    autoRoadAddressEnglish: string;
    buildingCode: string
    autoJibunAddressEnglish: string;
    apartment : 'Y' | 'N'
    buildingName: string
    sido: string;
    sidoEnglish: string;
    sigungu: string;
    sigunguEnglish: string;
    sigunguCode: string | number;
    roadnameCode: string | number;
    bcode: string | number;
    roadname: string;
    roadnameEnglish: string;
    bname: string;
    bnameEnglish: string;
    bname1: string;
    bname1English: string;
    bname2: string;
    bname2English: string;
    hname: string;
    query: string; // 사용자 검색어
};

type DaumPostcodeSearchData = {
    q?: string;
    count?: number;
}

type PostCodeOperator = {
    open: () => void;
    embed: (wrap: Element, options: { q: string; autoClose: boolean }) => void;
}

type PostCodeProperty = {
    oncomplete: (data: DaumPostcodeProperty) => any;
    onclose?: (state: 'FORCE_CLOSE' | 'COMPLETE_COLOSE') => any;
    onresize?: () => void;
    onsearch?: (data: DaumPostcodeSearchData) => void;
    width?: number | string;
    height?: number | string;
    animation?: boolean;
    focusInput?: boolean;
    autoMapping?: boolean;
};

// eslint-disable-next-line no-unused-vars
interface Window {
    daum: {
        Postcode: new (options?: PostCodeProperty) => PostCodeOperator;
        postcode: {
            load: (fn: () => void) => void;
        }
    }
}
