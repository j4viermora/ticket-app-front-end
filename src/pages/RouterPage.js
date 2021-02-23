import React, { useContext } from "react";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";

import { BrowserRouter as Router,
   Switch,
   Route,
   Link, 
   Redirect } from "react-router-dom";

import { IngresarPage } from "./IngresarPage";
import { ColaPage } from "./ColaPage";
import { CreateTicketPage } from "./CreateTicketPage";
import { DesktopPage } from "./DesktopPage";
import { UIContext } from "../context/UIcontext";

const { Sider, Content } = Layout;

export const RouterPage = () => {

  const { hide } =  useContext( UIContext )
  
  return (
    <Router>
      <Layout 
      style={{ height: "100vh" }}
      >
        <Sider 
        collapsedWidth='0' 
        breakpoint='md'
        hidden={ hide }
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              <Link to='/ingresar'>
                Ingresar
              </Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            <Link to='/cola'>
                Cola
              </Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
            <Link to='/ticket'>
                Crear ticket
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          > 
            <Switch>
                
                <Route exact path='/ingresar' component={ IngresarPage } />
                <Route exact path='/cola' component={ ColaPage } />
                <Route exact path='/ticket' component={ CreateTicketPage } />

                <Route exact path='/escritorio' component={ DesktopPage } />

                <Redirect to='/ingresar'/>

            </Switch>

          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};
