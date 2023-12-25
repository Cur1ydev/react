import React, {useEffect, useState} from "react";
import "./DisplayInfo.scss";

const DisplayInfo = (props) => {
    console.log(props)
    const {listUsers} = props;
    const [isShowHideListUser, setShowHideListUser] = useState(true);
    const handleShowHide = () => {
        setShowHideListUser(!isShowHideListUser);
    }
    useEffect(() => {
        // setTimeout(() => {
        //     document.title = 'Lợi'
        // }, 2000)
        if (listUsers.length === 0) {
            alert('Bạn đã xoá hết tất cả user')
        }
    }, [listUsers]);
    return (<div className={`display-info-container`}>
        <button onClick={handleShowHide}>{isShowHideListUser ? 'Hide' : 'Show'} List User</button>
        {<div>
            {listUsers.map((user) => {
                return (isShowHideListUser && <div key={user.id} className={user.age < 21 ? 'green' : 'red'}>
                    <div>My name is {user.name}</div>
                    <div>My age is {user.age}</div>
                    <button onClick={() => props.handleDeleteUser(user.id)}>delete</button>
                    <hr/>
                </div>)
            })}
        </div>}
    </div>);

}
export default DisplayInfo;