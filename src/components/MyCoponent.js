import React from 'react';
import AddUserInfo from './AddUserInfo';
import DisplayInfo from "./DisplayInfo";

class MyCoponent extends React.Component {
    state = {
        listUsers: [{
            id: 1, name: 'Phạm Lợi', age: 20
        }, {
            id: 2, name: 'Phạm Lợi 1', age: 21
        }, {
            id: 3, name: 'Phạm Lợi 2', age: 22
        }]
    }
    handleAddNewUser = (userObj) => {
        console.log(userObj)
        this.setState({
            listUsers: [userObj, ...this.state.listUsers]
        })
    }

    render() {
        return (<div className='app-container'>
            <AddUserInfo handleAddNewUser={this.handleAddNewUser}/>
            <DisplayInfo listUsers={this.state.listUsers}/>
        </div>);
    }
}

export default MyCoponent;