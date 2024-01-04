import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import {Link} from "react-router-dom";
const SideBar = () =>
{
    return (
        <>
            <Sidebar>
                <Menu>
                    <SubMenu label="Charts">
                        <Link to={`/admin/user/list`}><MenuItem>Người dùng</MenuItem></Link>
                        <MenuItem> Line charts </MenuItem>
                    </SubMenu>
                    <MenuItem> Documentation </MenuItem>
                    <MenuItem> Calendar </MenuItem>
                </Menu>
            </Sidebar>
        </>
    );
}
export default SideBar;