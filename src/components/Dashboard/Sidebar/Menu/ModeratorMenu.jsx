import React from "react";
import MenuItem from "./MenuItem";
import { MdOutlineManageHistory } from "react-icons/md";

const ModeratorMenu = () => {
  return (
    <div>
      <MenuItem
        icon={MdOutlineManageHistory}
        label="Manage Applications"
        address="manage-applications"
      />
    </div>
  );
};

export default ModeratorMenu;
