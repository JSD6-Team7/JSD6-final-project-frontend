import React from "react";
import { Menu, Button } from "antd";

function Navbarja() {
  return (
    <div>
      <Menu
        mode="horizontal"
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          background: "white",
          // Ensure background is set on Menu too
        }}
        key="logo"
      >
        {/* <Menu.Item key="logo">
          <img
            // src="https://i.ibb.co/0ZMXTgJ/logo-corgifit.png"
            src="https://i.ibb.co/nqKzJwrv/il-570x-N-4168481284-7sv6.jpg"
            alt="CorgiFit Logo"
            style={{ height: "35px", paddingTop: "5px" }}
          />
        </Menu.Item> */}
        <Menu.Item key="home" style={{ color: "#45AE3A", paddingTop: "5px" }}>
          <a href="">Home</a>
        </Menu.Item>
        <Menu.Item
          key="features"
          style={{ color: "#45AE3A", paddingTop: "5px" }}
        >
          <a href="#Features">Features</a>
        </Menu.Item>
        <Menu.Item
          key="testimonials"
          style={{ color: "#45AE3A", paddingTop: "5px" }}
        >
          <a href="#Testimonials">Testimonials</a>
        </Menu.Item>
        <Menu.Item
          key="contact"
          style={{ color: "#45AE3A", paddingTop: "5px" }}
        >
          <a href="#FAQ">FAQ</a>
        </Menu.Item>
        <Menu.Item key="free-trial">
          <Button
            type="primary"
            style={{
              backgroundColor: "#45AE3A",
              color: "white",
              borderColor: "#45AE3A",
              marginTop: "10px",
            }}
          >
            <a href="/signup">Free Access</a>
          </Button>
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default Navbarja;
