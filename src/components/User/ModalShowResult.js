import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const ModalShowResult = (props) => {
    const {show, setShow, result} = props;
    const handleClose = () => setShow(false);
    return (<>
        <Modal show={show} onHide={handleClose} backdrop="static">
            <Modal.Header closeButton>
                <Modal.Title>Kết quả ...</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>Tổng số câu hỏi: {result.countTotal}</div>
                <div>Số câu trả lời đúng: {result.countCorrect}</div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Đóng
                </Button>
                <Button variant="primary" onClick={() => handleClose()}>
                    Xem kết quả
                </Button>
            </Modal.Footer>
        </Modal>
    </>);
}

