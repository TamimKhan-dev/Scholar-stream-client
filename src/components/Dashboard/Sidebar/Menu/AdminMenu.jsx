import { FaUserCog } from "react-icons/fa";
import { IoSchoolSharp } from "react-icons/io5";
import { FaUserGraduate } from "react-icons/fa6";
import { BsGraphUp } from 'react-icons/bs'
import MenuItem from "./MenuItem";

const AdminMenu = () => {
  return (
    <>
      <MenuItem icon={BsGraphUp} label="Statistics" address="/dashboard" />
      <MenuItem icon={FaUserCog} label="Manage Users" address="manage-users" />
      <MenuItem
        icon={IoSchoolSharp}
        label="Add Scholarship"
        address="add-scholarship"
      />
      <MenuItem
        icon={FaUserGraduate}
        label="Manage Scholarships"
        address="manage-scholarships"
      />
    </>
  );
};

export default AdminMenu;
