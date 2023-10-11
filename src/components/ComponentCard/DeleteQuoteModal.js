import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import CloseIcon from '@mui/icons-material/Close';
import './ComponentCard.css'

const DeleteQuoteModal = ({ show, onHide, title, recordID }) => {

    const handleConfirmDelete = async () => {
        fetch(`/delete-record/${recordID}`, {
            method: 'DELETE',
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Message', data.message);
                alert('Quote deleted successfully');
            })
            .catch((error) => {
                console.error('Error deleting quote:', error);
            });
    }

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header className="custom-modal-header">
                <Modal.Title>Delete Quote</Modal.Title>
                <button className="close-button" onClick={onHide}><CloseIcon /></button>
            </Modal.Header>
            <Modal.Body>
                <div >
                    <p>Are you sure you want to delete quote "{title}"?</p>
                </div>
            </Modal.Body>
            <Modal.Footer className="custom-modal-footer">
                <Button variant="secondary" onClick={onHide}>
                    No
                </Button>
                <Button variant="primary" onClick={handleConfirmDelete}>
                    Yes
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default DeleteQuoteModal;
