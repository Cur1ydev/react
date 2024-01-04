import {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./ModalCreateUser.scss"
import {FcPlus} from "react-icons/fc";
import {toast} from "react-toastify";
import {putUpdateUser} from "../../../services/apiService";
import _ from "lodash"

function ModalView(props) {
    const {show, setShow, dataUpdate} = props;
    const handleClose = () => {
        setShow(false);
    };
    const handleShow = () => setShow(true);
    const [email, SetEmail] = useState(dataUpdate.email);
    const [password, SetPassword] = useState(dataUpdate.password);
    const [username, SetUsername] = useState(dataUpdate.username);
    const [role, SetRole] = useState(dataUpdate.role);
    const [img, SetImg] = useState(``);
    const [previewImg, setPreviewImg] = useState("")
    const handleUploadImage = (event) => {
        if (event.target.files[0]) {
            setPreviewImg(URL.createObjectURL(event.target.files[0]))
            SetImg(event.target.files[0]);
        }
    }
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    };
    const createUser = async () => {
        let res = await putUpdateUser(dataUpdate.id, username, role, img)
        if (res.EC === 0) {
            toast.success(res.EM);
            handleClose();
            await props.getList();
        } else {
            toast.error(res.EM);
        }
    }
    useEffect(() => {
        if (!_.isEmpty(dataUpdate)) {
            SetEmail(dataUpdate.email)
            SetPassword(dataUpdate.password)
            SetUsername(dataUpdate.username)
            SetRole(dataUpdate.role)
            if (dataUpdate.image) setPreviewImg(`data:image/jpeg;base64,${dataUpdate.image}`)
        }
    }, [dataUpdate]);

    return (<>

        <Modal className="modal-add-user" size="xl" show={show} onHide={handleClose} backdrop={"static"}>
            <Modal.Header closeButton>
                <Modal.Title>Thông tin chi tiết</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form className="row g-3">
                    <div className="col-md-6">
                        <label htmlFor="inputEmail4" className="form-label">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" value={email} disabled
                               onChange={(event) => SetEmail(event.target.value)}/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputPassword4" className="form-label">Password</label>
                        <input type="password" className="form-control" id="inputPassword4" value={password} disabled
                               onChange={(event) => SetPassword(event.target.value)}/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputCity" className="form-label">UserName</label>
                        <input type="text" className="form-control" id="inputCity" value={username} disabled
                               onChange={(event) => SetUsername(event.target.value)}/>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="inputState" className="form-label">State</label>
                        <select id="inputState" className="form-select" disabled
                                onChange={(event) => SetRole(event.target.value)}>
                            <option value="USER" selected={role === "USER"}>User</option>
                            <option value="ADMIN" selected={role === "ADMIN"}>Admin</option>
                        </select>
                    </div>

                    <div className="col-md-12" align={"center"}>
                        <label className="form-label label-upload">Ảnh</label>
                    </div>
                    <div className="col-md-12 img-preview">
                        {previewImg ? <img src={previewImg} alt=""/> : <span>Preview Image</span>}
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Đóng
                </Button>
                <Button variant="primary" onClick={() => createUser()}>
                    Luư
                </Button>
            </Modal.Footer>
        </Modal>
    </>);
}

export default ModalView
