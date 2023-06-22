import {
  MenuFoldOutlined,
  PicRightOutlined,
  UserOutlined,
  VerticalAlignBottomOutlined,
  BorderInnerOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { useState } from "react";
import { MenuUnfoldOutlined } from "@ant-design/icons";
import logo from "../assets/logo.png";
import ContentSdb from "../content";
import ContentReport from "../contentReport";
import ContentDetail from "../contentDetail";
import ContentListMaintenance from "../contentListMaintenance";
import Clock from "../clock";
import CurrentDate from "../currentDate";

const { Header, Sider, Content } = Layout;
const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  //Fnction Menu
  const [activeKey, setActiveKey] = useState("1");

  const handleMenuClick = (e) => {
    setActiveKey(e.key);
  };

  let contentComponent = null;

  if (activeKey === "1") {
    contentComponent = <ContentSdb />;
  } else if (activeKey === "3") {
    contentComponent = <ContentReport />;
  } else if (activeKey === "2") {
    contentComponent = <ContentDetail />;
  } else if (activeKey === "4") {
    contentComponent = <ContentListMaintenance />;
  }

  const menuItems = [
    {
      key: "1",
      icon: <UserOutlined />,
      label: "User",
    },
    {
      key: "2",
      icon: <PicRightOutlined />,
      label: "Detail SDB",
    },
    {
      key: "3",
      icon: <VerticalAlignBottomOutlined />,
      label: "Report",
    },
    {
      key: "4",
      icon: <BorderInnerOutlined />,
      label: "List Maintenance",
    },
  ];

  return (
    <Layout style={{ width: "100%", height: "100vh" }}>
      <Sider
        trigger={null}
        collapsible
        // collapsedWidth="0" ini untuk ngilangin sider nya
        collapsed={collapsed}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          selectedKeys={[activeKey]}
          onClick={handleMenuClick}
          items={menuItems.map((item) => ({
            key: item.key,
            icon: item.icon,
            label: item.label,
          }))}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
                marginLeft: "16px", // Adjust the margin as per your requirement
              }}
            />
            <img
              src={logo}
              alt=""
              style={{
                width: 150, // Adjust the width as per your requirement
                height: 40, // Adjust the height as per your requirement
              }}
            />
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              paddingRight: "30px",
            }}
          >
            <CurrentDate />
            <span style={{ marginLeft: "10px" }}>
              <Clock />
            </span>
          </div>
        </Header>

        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          {contentComponent}
        </Content>
      </Layout>
    </Layout>
  );
};
export default Sidebar;
