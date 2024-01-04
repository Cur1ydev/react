import ModalCreateUser from "./ModalCreateUser";
import {FcPlus} from "react-icons/fc";
import {useEffect, useState} from "react";
import TableUser from "./TableUser";
import {getUserPaginate, listUser} from "../../../services/apiService";
import ModalUpdate from "./ModalUpdate";
import ModalView from "./ModalView";
import ModalDeleteUser from "./ModalDeleteUser";
import TableUserPaginate from "./TableUserPaginate";

const ManagerUser = () => {
    const limit_user = 2;
    const [pageCount, setPageCount] = useState(0);
    const [show, setShow] = useState(false);
    const [showUpdate, setShowUpdate] = useState(false);
    const [showView, setShowView] = useState(false);
    const [dataUpdate, setDataUpdate] = useState({});
    const [list, setList] = useState([]);
    const [showDelete, setShowDelete] = useState(false);
    const [id, setId] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const handleClickDelete = (id) => {
        setId(id)
        setShowDelete(true)
    }
    const handleClickShowView = (user) => {
        setDataUpdate(user);
        setShowView(true);
    }
    useEffect(() => {
        getList(currentPage);
    }, []);
    const getList = async (page) => {
        // const response = await listUser();
        // if (response.EC === 0) {
        //     setList(response.DT);
        // }
        const response = await getUserPaginate(page, limit_user);
        if (response.EC === 0) {
            setList(response.DT.users);
            setPageCount(response.DT.totalPages)
        }
    }
    const getListPaginate = async (page) => {
        const response = await getUserPaginate(page, limit_user);
        if (response.EC === 0) {
            setList(response.DT.users);
            setPageCount(response.DT.totalPages)
        }
    }
    const handleClickUpdate = (user) => {
        setDataUpdate(user)
        setShowUpdate(true)
    }
    return (<>
        <div className="manager-user-container">
            <div className="title">Quản lý người dùng</div>

            <div className="users-content">
                <div className="btn-addnew">
                    <button className="btn btn-primary" onClick={() => setShow(true)}><FcPlus/>thêm mới</button>
                </div>
                <div className="table-users-container">
                    {/*<TableUser list={list} setList={setList} handleClickUpdate={handleClickUpdate}*/}
                    {/*           handleClickShowView={handleClickShowView}*/}
                    {/*           handleClickDelete={handleClickDelete}*/}
                    {/*/>*/}
                    <TableUserPaginate
                        list={list}
                        setList={setList}
                        handleClickUpdate={handleClickUpdate}
                        handleClickShowView={handleClickShowView}
                        handleClickDelete={handleClickDelete}
                        getListPaginate={getListPaginate}
                        pageCount={pageCount}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    />
                </div>
                <ModalCreateUser
                    show={show}
                    setShow={setShow}
                    getList={getList}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
                <ModalUpdate
                    show={showUpdate}
                    setShow={setShowUpdate}
                    dataUpdate={dataUpdate}
                    getList={getList}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
                <ModalView
                    show={showView}
                    setShow={setShowView}
                    dataUpdate={dataUpdate}
                />
                <ModalDeleteUser
                    show={showDelete}
                    setShow={setShowDelete}
                    id={id}
                    getList={getList}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            </div>
        </div>
    </>)
}
export default ManagerUser;