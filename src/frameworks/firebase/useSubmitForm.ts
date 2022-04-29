import { useState } from 'react';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { db } from './initialize';
import { UserType } from './types';

function useSubmitForm() {
    const [ isLoading, setLoading ] = useState(true);
    const [ isSuccess, setSuccess ] = useState(false);
    const [ isError, setError ] = useState(false);

    const saveUserInfo = async (data: UserType) => {
        try {
            await addDoc(collection(db, 'users'), {
                ...data,
                date : Timestamp.fromDate(new Date()),
            });
            setSuccess(true);
        } catch {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    return {
        isLoading, isSuccess, isError, saveUserInfo,
    };
}

export default useSubmitForm;
