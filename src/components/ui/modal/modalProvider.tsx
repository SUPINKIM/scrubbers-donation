import { useRef } from 'react';
import { createPortal } from 'react-dom';

export default function ModalProvider({ children }) {
    const container = useRef(document.getElementById('root'));
    return createPortal(children, container.current);
}
