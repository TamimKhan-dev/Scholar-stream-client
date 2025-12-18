import React from "react";
import MenuItem from "./MenuItem";
import { MdOutlineManageHistory } from "react-icons/md";
import { FileSearchCorner } from "lucide-react";

const ModeratorMenu = () => {
  return (
    <div>
      <MenuItem
        icon={MdOutlineManageHistory}
        label="Manage Applications"
        address="manage-applications"
      />
      <MenuItem
        icon={FileSearchCorner}
        label="All Reviews"
        address="all-reviews"
      />
    </div>
  );
};

export default ModeratorMenu;
