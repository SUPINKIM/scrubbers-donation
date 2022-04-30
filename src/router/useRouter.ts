import { useNavigate } from 'react-router';

export const useRouter = () => {
    const navigation = useNavigate();

    const movePage = (path: string) => {
        navigation(path);
    };

    return { movePage };
};
