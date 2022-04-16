import React from 'react';
import { Link } from 'react-router-dom';

export function NotFoundComponent() {
    return (
        <div>
            <div>요청하신 페이지를 찾을 수 없습니다.</div>
            <Link to='/'>
                <button type='button'>홈으로 돌아가기</button>
            </Link>
        </div>
    );
}
