import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import {Link, useNavigate} from "react-router-dom";
const SideBar = () =>
{
    const navigate = useNavigate();
    const redirect = (url) => {
        return navigate(url);
    }
    return (
        <>
            <Sidebar>
                <Menu>
                    <SubMenu label="Charts">
                        <MenuItem onClick={() => redirect('user/list')}>Người dùng</MenuItem>
                        <MenuItem onClick={() => redirect('quiz/list')}> Quiz </MenuItem>
                    </SubMenu>
                    <MenuItem> Documentation </MenuItem>
                    <MenuItem> Calendar </MenuItem>
                </Menu>
            </Sidebar>
        </>
    );
}
export default SideBar;