import ReactModal from 'react-modal';
import './Modal.scss';
import { ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children}) => {
  return (
    <ReactModal
    isOpen= {isOpen}
    onRequestClose={onClose}
    contentLabel='Modal'
    >
      {children}
    </ReactModal>
  );
}

export default Modal;