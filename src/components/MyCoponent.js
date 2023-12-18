import React from 'react';
import UserInfo from './UserInfo';
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

    render() {
        return (<div>
            <UserInfo/>
            <DisplayInfo listUsers={this.state.listUsers}/>
        </div>);
    }
}

export default MyCoponent;