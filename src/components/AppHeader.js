import React from "react";
import { MenuOutlined } from "@ant-design/icons";

function AppHeader({ openMenu, setOpenMenu }) {
  return (
    <div
      style={{
        backgroundColor: "darkorange",
        height: 60,
        paddingLeft: 12,
        paddingTop: 12,
      }}
      className="menuIcon"
    >
      <MenuOutlined
        style={{ color: "white", fontSize: 30 }}
        onClick={() => {
          setOpenMenu(true);
        }}
      />
    </div>
  );
}

export default AppHeader;
