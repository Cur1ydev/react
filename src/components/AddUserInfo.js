import React, {useState} from "react";
const AddUserInfo = (props) => {
    const [state, setState] = useState({
        name: 'Lợi',
        age: 20,
        address: 'Hải hậu'
    })
    const handleOnSubmit = (event) => {
        event.preventDefault();
        props.handleAddNewUser({
            id: Math.random(), name: state.name, age: state.age
        });
    }
    const handleOnChangeInput = (event) => {
        setState({
            ...state,
            name : event.target.value,
        })
    }
    const handleOnChangeAge = (event) => {
        setState({
            ...state,
            age :  event.target.value,

        })
    }
    return (<>
        My name is {state.name} and i'm from {state.address} <br/>
        <form onSubmit={(event) => handleOnSubmit(event)}>
            <input type="text" onChange={(event) => handleOnChangeInput(event)}/><br/>
            <input type="number" onChange={(event) => handleOnChangeAge(event)}/><br/>
            <button>Submit</button>
        </form>
    </>)
}
export default AddUserInfo;