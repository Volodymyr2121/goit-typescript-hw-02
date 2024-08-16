
import Modal from 'react-modal';
import css from './ImageModal.module.css';

export default function ImageModal({ isOpen, closeModal, imageUrl, altDescription }) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            className={css.content}
            overlayClassName={css.overlay}
            contentLabel="Image Modal"
            shouldCloseOnEsc={true}
            shouldCloseOnOverlayClick={true}
        >
            <img src={imageUrl} alt={altDescription} className={css.image} />
        </Modal>
    );
}