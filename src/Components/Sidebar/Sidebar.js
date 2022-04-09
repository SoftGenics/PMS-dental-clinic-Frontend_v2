import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
    SubMenu
  } from "react-pro-sidebar";
  //import icons from react icons
  import {ImNewspaper} from "react-icons/im";
  import {
    FiHome,
    FiLogOut,
    FiArrowLeftCircle,
    FiArrowRightCircle
  } from "react-icons/fi";
  import {FaUserMd, FaUserAlt, FaUserCircle} from 'react-icons/fa'
  import {BsListOl, BsFillStopwatchFill} from 'react-icons/bs'
  import {GrList} from 'react-icons/gr'
  import {MdPersonAddAlt1} from 'react-icons/md';
  import { BiCog, BiCommentAdd} from "react-icons/bi";
  import {FcCalendar} from 'react-icons/fc'
  import {RiFileAddLine} from 'react-icons/ri'
  import 'react-pro-sidebar/dist/css/styles.css';
  
  import './Sidebar.css'
const Sidebar = () => {
    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(true);

    //create a custom function that will change menucollapse state from false to true and true to false
    const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
        };
  return (
    <>
    <div id="header">
        {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <div className="logotext">
              {/* small and big change using menucollapse state */}
              <p>{menuCollapse ? <FaUserCircle /> : "Admin Panel"}</p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
              {/* changing menu collapse icon on click */}
              {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem active={true} icon={<FiHome />}>
               <Link to='/'>Dashborad</Link> 
              </MenuItem>
              <SubMenu icon={<FaUserMd />} title="Doctors">
              <MenuItem icon={<MdPersonAddAlt1/>}><Link to='/Add_Doctor'>Add Doctors</Link></MenuItem>
              <MenuItem icon={<BsListOl />}><Link to='/List_Of_Doctors'>Doctors List</Link></MenuItem>
              </SubMenu>
              <SubMenu icon={<FaUserAlt />} title="Patients">
              <MenuItem icon={<MdPersonAddAlt1/>}><Link to='/Add_Patient'>Add Patients</Link></MenuItem>
              <MenuItem icon={<BsListOl />}><Link to='/Patients_List'>Patients List</Link></MenuItem>
              <MenuItem icon={<FcCalendar />}>Today's Patients List</MenuItem>
              </SubMenu>
              <SubMenu icon={<BsFillStopwatchFill />} title="Appoitments">
              <MenuItem icon={<BiCommentAdd />}>New Appoitment</MenuItem>
              <MenuItem icon={<GrList />}>All Appoitment</MenuItem>
              </SubMenu>
              <SubMenu icon={<ImNewspaper/>} title="Generate Report">
              <MenuItem icon={<RiFileAddLine />}>New Reports</MenuItem>
              <MenuItem icon={<GrList />}>All Reports</MenuItem>
              </SubMenu>
              <MenuItem icon={<BiCog />}>Settings</MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
             <MenuItem icon={<FiLogOut />}><Link  to='/logout'>Logout</Link></MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  )
}

export default Sidebar