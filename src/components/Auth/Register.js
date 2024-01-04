import "./Register.scss"
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {login, register} from "../../services/apiService";
import {toast} from "react-toastify";
import __ from "lodash";

const Register = (props) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword,setShowPassword] = useState(false)
    const navigate = useNavigate();
    const buttonLogin = () => {
        navigate('/login')
    }
    const handleShowHidePassword = () => {
        setShowPassword(!showPassword)
    }
    const handleRegister = async () => {
        if (__.isEmpty(email)) {
            toast.error("Email phải được nhập");
            return;
        }
        if (__.isEmpty(password)) {
            toast.error("Mật khẩu phải được nhập");
            return;
        }
        let response = await register(email, password,username);
        if (response && response.EC === 0) {
            toast.success(response.EM)
            navigate('/login')
        } else {
            toast.error(response.EM)
        }

    }
    return (<div className="login-container">
        <div className="header">
            <span>Have an account?</span>
            <button onClick={() => buttonLogin()}>Sign in</button>
        </div>
        <div className="title col-4 mx-auto">
            Hỏi dân It
        </div>
        <div className="welcome col-4 mx-auto">Hello, who’s this?</div>
        <div className="content-form col-4 mx-auto">
            <div className="form-group">
                <label>Username</label>
                <input type="text" className="form-control" value={username}
                       onChange={(event) => setUsername(event.target.value)}/>
            </div>
            <div className="form-group">
                <label>Email (*)</label>
                <input type="email" className="form-control" value={email}
                       onChange={(event) => setEmail(event.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="">Password (*)</label>
                <input type={showPassword ? "text" : "password"} className="form-control" value={password}
                       onChange={(event) => setPassword(event.target.value)}/>
                <input type="checkbox" onClick={()=> handleShowHidePassword()}/> <span>{showPassword ? "Hide" : "Show"} password</span>
            </div>
            <div>
                <button className="btn-submit" onClick={() => handleRegister()}>Register</button>
            </div>
            <div className="text-center back">
                <span onClick={() => navigate('/')}>&#60;&#60; Go to Home Page</span>
            </div>
        </div>
    </div>)
}
export default Register;