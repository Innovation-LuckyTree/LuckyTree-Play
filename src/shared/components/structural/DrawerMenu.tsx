
import { Avatar, Button, Drawer, Flex,  Menu } from "antd"
import { Content} from "antd/es/layout/layout"
import { FC, useState } from "react"
import { getSideMenu } from "../../../app/appRoutes"
import { useLocation } from "react-router-dom"
import { DrawerStyles } from "antd/es/drawer/DrawerPanel"
import { useAuth } from "../../hooks/useAuth"
import { LockFilled, UserOutlined } from "@ant-design/icons"
import { ChangePasswordModal } from "../ChangePasswordModal"

interface DrawerMenuProps {
  openMenu: boolean;
  onClose: () => void;
}

export const DrawerMenu: FC<DrawerMenuProps> =({openMenu, onClose}) => {
  const location = useLocation();
  const {user, logout} = useAuth();
  const currentPath = location.pathname;
  const [openChangePass, setOpenChangePass] = useState(false);
  
  const drawerStyles: DrawerStyles = {
    body: {
      padding: 0,
    },
  };

  return (
    <>
      <Drawer
        width={250}
        open={openMenu}
        onClose={onClose}
        placement="left"
        closable={false}
        styles={drawerStyles}
        >
          <div style={{ background: "#171717", padding: "2dvh 0 2dvh 0" }}>
            <Flex vertical justify="center" align="center">
              <Avatar size={64} gap ={1} icon={<UserOutlined />} style={{backgroundColor: "#f5f5f540"}}/>
              <h2 className="text-white font-bold text-lg">{user?.name}</h2>
              <h2 className="text-white">{user?.mobileNumber}</h2>
            </Flex>
          </div>
          <Content className="bg-white">
            <Menu
              onClick={onClose}
              mode="inline"
              selectedKeys={[currentPath]}
              items={[...getSideMenu(),
                {
                  key: '/change-password',
                  icon: <LockFilled />,
                  label: <span className='font-[500]'>Change Password</span>,
                  onClick: ()=>{setOpenChangePass(true)}
                },]}
              />
          </Content>
          <div className="flex justify-center pt-16 px-8">
            <Button block onClick={logout}>Logout</Button>
          </div>
      </Drawer>
      { openChangePass &&
        <ChangePasswordModal open={openChangePass} onClose={()=>setOpenChangePass(false)}/>
      }
    </>
  )
}