import { FC, useState } from "react"
import { Button,  Layout, Space } from "antd"
import { Navigate, Outlet, useLocation } from "react-router-dom"
import { DollarCircleOutlined, MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons"
import { Content, Header } from "antd/es/layout/layout"
import { useAuthStore } from "../../../app/store/useAuthStore"
import { DrawerMenu } from "./DrawerMenu"
import { getPageTitle } from "../../../utils/helpers"

// THis containains basic Layout for dashboard as well as AuthGuard for it.
export const DashWrapper: FC = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const location = useLocation();
  
  //  Auth check before rendering the layout
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <Layout className="w-screen h-screen overflow-hidden">
      <DrawerMenu openMenu={openMenu} onClose={()=>{setOpenMenu(false)}}/>
      <Layout>
          <Header className="bg-white" style={{background:"white", padding:0}}>
            <div className="w-full h-full flex justify-center items-center pr-4 relative">
              <Button type="text" style={{borderRadius:0, height:"64px", position:"absolute", left:0}} onClick={()=>{setOpenMenu(!openMenu)}}>
                {openMenu ? <MenuUnfoldOutlined/> : <MenuFoldOutlined />}
              </Button>
              <h2 className="text-md">{getPageTitle(location.pathname)}</h2>
              <Space className="absolute right-0 p-4">
                <DollarCircleOutlined/>
                <p className="font-bold">9,528</p>
              </Space>
            </div>
          </Header>
          <Content>
            <div className="p-4">
              <Outlet/>
            </div>
          </Content>
      </Layout>
    </Layout>
  )
}