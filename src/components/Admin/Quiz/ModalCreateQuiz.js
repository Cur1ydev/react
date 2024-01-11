import {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./ModalCreateQuiz.scss"
import {FcPlus} from "react-icons/fc";
import axios from "axios";
import {toast} from "react-toastify";
import {postcreateQuiz} from "../../../services/apiService";
import _ from "lodash"
import __ from "lodash";

export const ModalCreateQuiz = (props) => {

    const {show, setShow,getQuiz} = props;
    const difficulty = [{
        key: "EASY", value: "EASY"
    }, {
        key: "MEDIUM", value: "MEDIUM"
    }, {
        key: "HARD", value: "HARD"
    }]
    const handleClose = () => {
        setShow(false);
        SetImg(null)
        setPreviewImg(null)
    };
    const [description, setDescription] = useState("");
    const [name, setName] = useState("");
    const [img, SetImg] = useState("");
    const [diff, setDiff] = useState("");
    const [previewImg, setPreviewImg] = useState("");
    const handleUploadImage = (event) => {
        if (event.target.files[0]) {
            setPreviewImg(URL.createObjectURL(event.target.files[0]));
            SetImg(event.target.files[0]);
        }
    }
    const createQuiz = async () => {
        if (_.isEmpty(description)) {
            toast.error("Mô tả phải được nhập");
            return;
        }
        if (_.isEmpty(name)) {
            toast.error("Tên phải được nhập");
            return;
        }
        if (!img) {
            toast.error("Ảnh phải được chọn");
            return;
        }
        if (_.isEmpty(diff)) {
            toast.error("Độ khó phải được chọn");
            return;
        }
        let res = await postcreateQuiz(description, name, img, diff)
        if (res.EC === 0) {
            toast.success(res.EM);
            handleClose();
            await getQuiz()
        } else {
            toast.error(res.EM);
        }
    }

    return (<>

        <Modal className="modal-add-user" size="xl" show={show} onHide={handleClose} backdrop={"static"}>
            <Modal.Header closeButton>
                <Modal.Title>Thêm mới bài quiz</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form className="row g-3">
                    <div className="col-md-6">
                        <label htmlFor="inputEmail4" className="form-label">Mô tả</label>
                        <input type="text" className="form-control" id="inputEmail4" value={description}
                               onChange={(event) => setDescription(event.target.value)}/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputPassword4" className="form-label">Tên bài quiz </label>
                        <input type="text" className="form-control" id="inputPassword4" value={name}
                               onChange={(event) => setName(event.target.value)}/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputCity" className="form-label">Độ khó</label>
                        <select value={diff} onChange={event => setDiff(event.target.value)} className="form-select"
                                aria-label="Default select example">
                            <option value=""></option>
                            {difficulty.length > 0 && difficulty.map((item, key) => {
                                return (<option key={key} value={item.key}>{item.value}</option>)

                            })}
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
                <Button variant="primary" onClick={() => createQuiz()}>
                    Luư
                </Button>
            </Modal.Footer>
        </Modal>
    </>);
}
