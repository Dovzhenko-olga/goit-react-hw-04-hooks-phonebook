import { useEffect } from 'react';
import {createPortal} from 'react-dom';
import styles from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({onClose, children}) {

  const handleKeyDown = e => {
       if (e.code === 'Escape') {
         onClose();
       }
   }
   
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  
  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  }

   return createPortal(
      <div className={styles.backdrop} onClick={handleBackdropClick}>
        <div className={styles.content}>{children}</div>
      </div>, modalRoot
    );
  }