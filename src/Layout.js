import {Route, Routes} from "react-router-dom";
import App from "./App";
import HomePage from "./components/Home/HomePage";
import User from "./components/User/User";
import Admin from "./components/Admin/Admin";
import ManagerUser from "./components/Admin/Content/ManagerUser";
import Login from "./components/Auth/Login";
import React from "react";
import {ToastContainer} from "react-toastify";
import Register from "./components/Auth/Register";
import {DetailQuiz} from "./components/User/DetailQuiz";
import {ManagerQuiz} from "./components/Admin/Quiz/ManagerQuiz";
const NotFound = () => {
    return (<div>
        Not Found
    </div>)
}

const Layout = () => {
    return (<>
        <Routes>
            <Route path="/" element={<App/>}>
                <Route index element={<HomePage/>}/>
                <Route path="user" element={<User/>}/>
            </Route>
            <Route path="admin" element={<Admin/>}>
                <Route path="user/list" element={<ManagerUser/>}/>
                <Route path="quiz/list" element={<ManagerQuiz/>}/>
            </Route>
            <Route path="quiz/:id" element={<DetailQuiz/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="register" element={<Register/>}/>
            <Route path="*" element={<NotFound/>} />
        </Routes>
        <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
        />
    </>)
}
export default Layout