import './App.scss';
import Header from "./components/Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, Outlet} from "react-router-dom";

const App = () => {
    return (<div className="app-container">
            <div className={`header-container`}>
                <Header/>
            </div>
            <div className={`main-container`}>
                <div className={`sidenav-container`}>
                    <Outlet/>
                </div>
            </div>
        </div>

    )
}

export default App;
