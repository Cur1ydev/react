import {FcPlus} from "react-icons/fc";
import {useEffect, useState} from "react";
import {ModalCreateQuiz} from "./ModalCreateQuiz";
import {TableQuiz} from "./TableQuiz";
import {getAllQuiz, getQuiz as getQuizFromId} from "../../../services/apiService";
import {ModalDeleteQuiz} from "./ModalDeleteQuiz";
import {ModalUpdateQuiz} from "./ModalUpdateQuiz";
import {toast} from "react-toastify";

export const ManagerQuiz = () => {
    const [show, setShow] = useState(false);
    const [list, setList] = useState([]);
    const [showModalDelete, setShowModalDelete] = useState(false);
    const [showModalUpdate, setShowModalUpdate] = useState(false);
    const [dataUpdate, setDataUpdate] = useState(null);
    const [idDelete, setIdDelete] = useState(0);
    useEffect(() => {
        getQuiz();
    }, []);
    const getQuiz = async () => {
        let response = await getAllQuiz();
        if (response.EC === 0) {
            setList(response.DT);
        }
    }
    const handleClickDelete = (id) => {
        setShowModalDelete(true);
        setIdDelete(id);
    }
    const handleClickUpdate = async (id) => {
        setShowModalUpdate(true);
        const response = await getQuizFromId(id);
        if (response.EC === 0) {
            setDataUpdate(response.DT);
        } else {
            toast.error(`${response.EM}`)
        }
    }
    return (<div className="quiz-container">
        <div className="btn-addnew">
            <button className="btn btn-primary" onClick={() => setShow(true)}><FcPlus/>thêm mới</button>
        </div>
        <br/>
        <div className="quiz-content">
            <TableQuiz
                list={list}
                handleClickDelete={handleClickDelete}
                handleClickUpdate={handleClickUpdate}
            />
        </div>
        <ModalCreateQuiz
            show={show}
            setShow={setShow}
            getQuiz={getQuiz}
        />
        <ModalDeleteQuiz
            show={showModalDelete}
            setShow={setShowModalDelete}
            id={idDelete}
            getQuiz={getQuiz}
        />
        <ModalUpdateQuiz
            show={showModalUpdate}
            setShow={setShowModalUpdate}
            getQuiz={getQuiz}
            dataUpdate={dataUpdate}
        />
    </div>)
}