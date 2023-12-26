import React, {useState} from 'react';
import AddUserInfo from './AddUserInfo';
import DisplayInfo from "./DisplayInfo";
import button from "bootstrap/js/src/button";

const MyCoponent = () => {
    const [state, setState] = useState({
        listUsers: [{
            id: 1, name: 'Phạm Lợi', age: 20
        }, {
            id: 2, name: 'Phạm Lợi 1', age: 21
        }, {
            id: 3, name: 'Phạm Lợi 2', age: 22
        }]
    })
    const handleAddNewUser = (userObj) => {
        setState({
            listUsers: [userObj, ...state.listUsers]
        })
    }
    const handleDeleteUser = (userId) => {
        setState({
            listUsers: state.listUsers.filter(item => item.id !== userId)
        })
    }
    return (<div className='app-container'>
        <AddUserInfo handleAddNewUser={handleAddNewUser}/>
        <DisplayInfo listUsers={state.listUsers} handleDeleteUser={handleDeleteUser}/>
        <button>Test</button>
    </div>);
}
export default MyCoponent;