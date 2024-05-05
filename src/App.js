import "./App.css";
import { Drawer, Menu } from "antd";
import React, { useState } from "react";
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import PhotoGallery from "./components/PhotoGallery";

function App() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div style={{ height: "100vh", backgroundColor: "rgb(0,150,255)" }}>
      <AppHeader openMenu={openMenu} setOpenMenu={setOpenMenu} />

      <span className="headerMenu">
        <AppMenu />
      </span>
      <Drawer
        placement="left"
        open={openMenu}
        onClose={() => {
          setOpenMenu(false);
        }}
        closable={false}
        bodyStyle={{ backgroundColor: "darkorange" }}
      >
        <AppMenu isInline />
      </Drawer>

      <PhotoGallery />

      <AppFooter />
    </div>
  );
}

function AppMenu({ isInline = false }) {
  return (
    <Menu
      style={{
        backgroundColor: "darkorange",
        color: "white",
        fontSize: 24,
        fontWeight: "bold",
        border: "none",
      }}
      mode={isInline ? "inline" : "horizontal"}
      items={[
        {
          label: "Home",
          key: "home",
        },
        {
          label: "Contact Us",
          key: "contact",
        },
        {
          label: "About Us",
          key: "about",
        },
        {
          label: "Login",
          key: "login",
        },
      ]}
    />
  );
}

export default App;
