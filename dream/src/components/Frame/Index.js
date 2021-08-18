import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import Icon, { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import {adminRouters}from"../../routes/index"
import { createFromIconfontCN } from '@ant-design/icons';
import { withRouter} from 'react-router-dom';//! 用于路由跳转不然push不能使用
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
const routes = adminRouters.filter(route=>route.isShow) //todo 需要显示的将它显示出来
function Index(props) {
    return (
        <Layout>
        <Header className="header" style={{background:"blue",width:"100"}}> 
          <div className="logo" />
        </Header>
        <Content style={{ padding: '0 50px' }}>
          {/* <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb> */}
          <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
            <Sider className="site-layout-background" width={200}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%' }}
              >
               {routes.map(route=>{
                   return(
                   <Menu.Item key={route.path} 
                   onClick={p=>props.history.push(p.key)}>
                       {route.title}
                       </Menu.Item>)
               })}   
              </Menu>
            </Sider>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>{props.children}</Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    )
}

export default withRouter(Index)
