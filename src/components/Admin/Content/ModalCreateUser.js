import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./ModalCreateUser.scss"
import {FcPlus} from "react-icons/fc";
import axios from "axios";
import {toast} from "react-toastify";
import {postCreateUser} from "../../../services/apiService";


function ModalCreateUser(props) {
    const {show, setShow} = props;

    const handleClose = () => {
        setShow(false);
        SetEmail(null)
        SetPassword(null)
        SetUsername(null)
        SetRole("User")
        SetImg(null)
        setPreviewImg(null)
    };
    const handleShow = () => setShow(true);
    const [email, SetEmail] = useState("");
    const [password, SetPassword] = useState("");
    const [username, SetUsername] = useState("");
    const [role, SetRole] = useState("User");
    const [img, SetImg] = useState("");
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
        if (!validateEmail(email)) {
            toast.error("Email k hợp lệ")
            return;
        }
        let res = await postCreateUser(email, password, username, role, img)
        if (res.EC === 0) {
            toast.success(res.EM);
            handleClose();
            await props.getList(1);
        } else {
            toast.error(res.EM);
        }
    }

    return (<>

        <Modal className="modal-add-user" size="xl" show={show} onHide={handleClose} backdrop={"static"}>
            <Modal.Header closeButton>
                <Modal.Title>Thêm mới người dùng</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form className="row g-3">
                    <div className="col-md-6">
                        <label htmlFor="inputEmail4" className="form-label">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" value={email}
                               onChange={(event) => SetEmail(event.target.value)}/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputPassword4" className="form-label">Password</label>
                        <input type="password" className="form-control" id="inputPassword4" value={password}
                               onChange={(event) => SetPassword(event.target.value)}/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputCity" className="form-label">UserName</label>
                        <input type="text" className="form-control" id="inputCity" value={username}
                               onChange={(event) => SetUsername(event.target.value)}/>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="inputState" className="form-label">State</label>
                        <select id="inputState" className="form-select"
                                onChange={(event) => SetRole(event.target.value)}>
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>
                    <div className="col-md-12">
                        <label className="form-label label-upload" htmlFor="label-upload"><FcPlus/> img</label>
                        <input type="file" id="label-upload" hidden onChange={(event) => handleUploadImage(event)}/>
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

export default ModalCreateUser
