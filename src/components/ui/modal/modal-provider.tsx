import { useRef } from 'react';
import { createPortal } from 'react-dom';

export default function ModalProvider({ children }) {
    const container = useRef(document.getElementById('modal'));
    return createPortal(children, container.current);
}
