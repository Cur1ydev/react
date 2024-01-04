import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {deleteUser} from "../../../services/apiService";
import {toast} from "react-toastify";

const ModalDeleteUser = (props) => {
    const {show, setShow, id,currentPage} = props;
    const handleClose = () => setShow(false);
    const handleDelete = async () => {
        let response = await deleteUser(id);
        if (response.EC === 0) {
            toast.success(response.EM)
            await props.getList(currentPage);
        }else{
            toast.error(response.EM)
        }
        handleClose();
    }
    return (<>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Xoá</Modal.Title>
            </Modal.Header>
            <Modal.Body>Bạn có chắc muốn xoá dữ liệu này không ?</Modal.Body>
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

export default ModalDeleteUser;