export const TableQuiz = (props) => {
    const {list, handleClickDelete, handleClickUpdate} = props;
    return (<>
        <table className="table table-bordered table-hover" align="center">
            <thead>
            <tr>
                <th scope="col">Id</th>
                <th scope="col">Tên</th>
                <th scope="col">Mô tả</th>
                <th scope="col">Độ khó</th>
                <th scope="col">Ảnh</th>
                <th scope="col">Action</th>
            </tr>
            </thead>
            <tbody>
            {list && list.length > 0 && list.map((item, key) => {
                return (<tr align="center" key={key}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td>{item.difficulty}</td>
                    <td><img src={`data:image/jpeg;base64,${item.image}`} alt="" width="150px"/></td>
                    <td>
                        <button className="btn btn-warning" style={{marginRight: "15px"}}
                                onClick={() => handleClickUpdate(item.id)}>Sửa
                        </button>
                        <button className="btn btn-danger" onClick={() => handleClickDelete(item.id)}>Xoá</button>
                    </td>
                </tr>)
            })}

            </tbody>
        </table>
    </>)
}