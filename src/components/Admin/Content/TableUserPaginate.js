import {useEffect, useState} from "react";
import {listUser} from "../../../services/apiService";
import ReactPaginate from "react-paginate";
const TableUserPaginate = (props) => {
    const {list,pageCount,setCurrentPage} = props;
    const handlePageClick = (event) => {
        props.getListPaginate(+event.selected + 1);
        setCurrentPage(+event.selected + 1)
        console.log(`User requested page number ${event.selected}`);
    };
    return (<>
        <table className="table table-hover table-bordered">
            <thead>
            <tr>
                <th scope="col">Id</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Role</th>
                <th scope="col">Action</th>
            </tr>
            </thead>
            <tbody>
            {list && list.length > 0 && list.map((item, index) => {
                return (<tr key={`table-${index}`}>
                    <td>{item.id}</td>
                    <td>{item.username}</td>
                    <td>{item.email}</td>
                    <td>{item.role}</td>
                    <td>
                        <button className="btn btn-secondary" onClick={() => props.handleClickShowView(item)}>View
                        </button>
                        <button className="btn btn-warning mx-3" onClick={() => props.handleClickUpdate(item)}>Update
                        </button>
                        <button className="btn btn-danger" onClick={() => props.handleClickDelete(item.id)}>Delete
                        </button>
                    </td>
                </tr>)
            })}
            {list && list.length === 0 && <tr>
                <td colSpan={4}>Not Found Data</td>
            </tr>}

            </tbody>
        </table>
        <div className="d-flex justify-content-center align-items-center">
            <ReactPaginate
                nextLabel="Next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={pageCount}
                previousLabel="< Pre"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
                renderOnZeroPageCount={null}
            />
        </div>
    </>)
}
export default TableUserPaginate;