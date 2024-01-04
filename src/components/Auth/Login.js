import "./Login.scss"
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {login} from "../../services/apiService";
import {toast} from "react-toastify";
import __ from "lodash";

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleLogin = async () => {
        if (__.isEmpty(email)) {
            toast.error("Email phải được nhập");
            return ;
        }
        if (__.isEmpty(password)) {
            toast.error("Mật khẩu phải được nhập");
            return ;
        }
        let response = await login(email, password);
        if (response && response.EC === 0) {
            toast.success(response.EM)
            navigate('/')
        } else {
            toast.error(response.EM)
        }

    }
    return (<div className="login-container">
        <div className="header">
            <span>Don't have an account yet?</span>
            <button>Sign up</button>
        </div>
        <div className="title col-4 mx-auto">
            Hỏi dân It
        </div>
        <div className="welcome col-4 mx-auto">Hello, who’s this?</div>
        <div className="content-form col-4 mx-auto">
            <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" value={email}
                       onChange={(event) => setEmail(event.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="">Password</label>
                <input type="password" className="form-control" value={password}
                       onChange={(event) => setPassword(event.target.value)}/>
            </div>
            <span className="forgot-password">Forgot Password?</span>
            <div>
                <button className="btn-submit" onClick={() => handleLogin()}>Login</button>
            </div>
            <div className="text-center back">
                <span onClick={() => navigate('/')}>&#60;&#60; Go to Home Page</span>
            </div>
        </div>
    </div>)
}
export default Login;