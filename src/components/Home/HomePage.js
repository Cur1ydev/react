import {useSelector} from "react-redux";

const HomePage = (props) => {
    const account = useSelector(state => state.user.account)
    const isAuthenticated = useSelector(state => state.user.isAuthenticated)
    console.log(account,isAuthenticated)
    return (
        <div className="homepage-container">
        </div>
    );
}
export default HomePage;