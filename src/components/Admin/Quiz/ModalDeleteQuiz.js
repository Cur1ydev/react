import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {deleteQuiz} from "../../../services/apiService";
import {toast} from "react-toastify";

export const ModalDeleteQuiz = (props) => {
    const {show, setShow, id, getQuiz} = props;
    const handleClose = () => setShow(false);
    const handleDelete = async () => {
        let response = await deleteQuiz(id);
        if (response.EC === 0) {
            toast.success(response.EM)
            getQuiz()
        } else {
            toast.error(response.EM)
        }
        handleClose();
    }
    return (<>
        <Modal show={show} onHide={handleClose} backdrop={"static"}>
            <Modal.Header closeButton>
                <Modal.Title>Xoá</Modal.Title>
            </Modal.Header>
            <Modal.Body>Bạn có chắc muốn xoá dữ liệu có id là {id} ?</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Đóng
                </Button>
                <Button variant="primary" onClick={() => handleDelete()}>
                    Có
                </Button>
            </Modal.Footer>
        </Modal>
    </>);
}

