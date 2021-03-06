import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [currentKey, setCurrentKey] = React.useState("/");
  return (
    <Menu onClick={(e) => setCurrentKey(e.key)} selectedKeys={currentKey}>
      <Menu.Item key="About">
        <Link to="/about">About</Link>
      </Menu.Item>
      <Menu.Item key="DeveloperPortal">
        <Link to="/developer-portal">Developer Portal</Link>
      </Menu.Item>
      <Menu.Item key="Home">
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="LetsConnect">
        <Link to="/lets-connect">Let's Connect</Link>
      </Menu.Item>
      <Menu.Item key="Whitepaper">
        <Link to="/whitepaper">Whitepaper</Link>
      </Menu.Item>
    </Menu>
  );
};

export default Navigation;
