import React from "react";
import "./DisplayInfo.scss";
import logo from "../logo.svg"

class DisplayInfo extends React.Component {
    state = {
        showList: true
    }
    handleShowHide = () => {
        this.setState({
            showList: !this.state.showList
        })
    }

    render() {
        // console.log(this.props)
        const {listUsers} = this.props;

        return (<div className={`display-info-container`}>
            {/*<img src={logo} alt=""/>*/}
                <div>
                    <button onClick={() => {
                        this.handleShowHide()
                    }}>{this.state.showList ? 'Hide' : 'Show'} List
                    </button>
                </div>
                {this.state.showList && <div>
                    {listUsers.map((user) => {
                        return (<div key={user.id} className={user.age < 21 ? 'green' : 'red'}>
                            <div>My name is {user.name}</div>
                            <div>My age is {user.age}</div>
                            <button>delete</button>
                            <hr/>
                        </div>)
                    })}
                </div>}
            </div>);
    }
}

export default DisplayInfo;