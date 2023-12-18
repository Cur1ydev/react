import React from "react";

class UserInfo extends React.Component {
    state = {
        name: 'Lợi', age: 20, address: 'Hải hậu'
    }
    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        return (<div>
            My name is {this.state.name} and i'm from {this.state.address} <br/>
            <form onSubmit={(event) => this.handleOnSubmit(event)}>
                <input type="text" onChange={(event) => this.handleOnChangeInput(event)} value={this.state.name}/>
                <button>Submit</button>
            </form>
        </div>);
    }
}

export default UserInfo;