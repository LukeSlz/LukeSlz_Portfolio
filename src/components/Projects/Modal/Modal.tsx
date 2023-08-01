import { ReactNode } from 'react';
import './Modal.scss';

interface ModalProps {
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  return (
    <div className="modal__overlay">
      <div className="modal">
        <div className="modal__content">
          {children}
        </div>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Modal;