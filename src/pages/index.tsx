"use client";
import { Feed, Header, Sidebar } from "@/components";
import { motion } from "framer-motion";
import { Layout, Menu, MenuProps, theme } from "antd";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
  CloudOutlined,
  AppstoreOutlined,
  TeamOutlined,
  ShopOutlined,
} from "@ant-design/icons";
import React from "react";

const { Header: Head, Content, Footer, Sider } = Layout;

const items: MenuProps["items"] = [
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
  CloudOutlined,
  AppstoreOutlined,
  TeamOutlined,
  ShopOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `nav ${index + 1}`,
}));

export default function Home() {
  return (
    <motion.div
      initial={{ y: 300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 300, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 50,
      }}
    >
      <Layout hasSider>
        <Sider
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            right: 0,
            top: 0,
            bottom: 0,
          }}
        >
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["4"]}
            items={items}
          />
        </Sider>

        <Layout>
          <Head
            style={{
              position: "sticky",
              top: 0,
              zIndex: "1",
              width: "100%",
            }}
          >
            <Header />
          </Head>
          <Content>
            <Feed />
          </Content>
          <Footer style={{ textAlign: "center" }}>
            All Rights Reserved 2023 ©
          </Footer>
        </Layout>
      </Layout>
    </motion.div>
  );

  // return (
  //   <motion.div
  //     initial={{ y: 300, opacity: 0 }}
  //     animate={{ y: 0, opacity: 1 }}
  //     exit={{ y: 300, opacity: 0 }}
  //     transition={{
  //       type: "spring",
  //       stiffness: 500,
  //       damping: 50,
  //     }}
  //   >
  //     <div className="flex h-full">
  //       <div className="flex flex-1 flex-col">
  //         <Header />
  //         <Feed />
  //       </div>
  //       <Sidebar />
  //     </div>
  //   </motion.div>
  // );
}
