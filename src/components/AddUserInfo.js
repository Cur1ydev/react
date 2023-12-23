import React from "react";

class AddUserInfo extends React.Component {
    state = {
        name: 'Lợi', age: 20, address: 'Hải hậu'
    }
    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleOnChangeAge = (event) => {
        this.setState({
            age: event.target.value
        })
    }
    handleOnSubmit = (event) => {
        event.preventDefault();
        // console.log(this.state);
        this.props.handleAddNewUser({
            id: Math.random(), name: this.state.name, age: this.state.age
        });
    }

    render() {
        return (<>
            My name is {this.state.name} and i'm from {this.state.address} <br/>
            <form onSubmit={(event) => this.handleOnSubmit(event)}>
                <input type="text" onChange={(event) => this.handleOnChangeInput(event)}/><br/>
                <input type="number" onChange={(event) => this.handleOnChangeAge(event)}/>
                <button>Submit</button>
            </form>
        </>);
    }
}

export default AddUserInfo;