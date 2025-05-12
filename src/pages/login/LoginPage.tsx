import { FC } from "react"
import '../../App.css'
import { Button, Form, FormProps, Input, Layout, message, Space } from 'antd'
import { EyeInvisibleOutlined, EyeTwoTone, LockOutlined, UserOutlined } from "@ant-design/icons"
import { LoginRequest } from "./models/request"
import { useAuth } from "../../shared/hooks/useAuth"
import { useNavigate } from "react-router-dom"
import { Content, Header } from "antd/es/layout/layout"
import { useGameList } from "../home/hooks/useGameList"


export const LoginPage: FC =() => {
  const navigate = useNavigate();
  const {login,loading, error} = useAuth();
  const {getGameList} = useGameList();
  const [form] = Form.useForm();

  const handleLogin: FormProps<LoginRequest>['onFinish'] = async (formValues) => {
    try{
      const values = await form.validateFields();
      console.log(values);
      await login(formValues);
      navigate('/');
      getGameList();
    }
    catch(e){
      message.error(error);
    }
  };

  return (
    <Layout className="w-screen h-screen overflow-hidden">
      <Header className="flex justify-center items-center" style={{background:"black"}}>
        <h2 className="text-[#00ff00] text-2xl">888Bet</h2>
      </Header>
      <Content className="bg-zinc-900 flex flex-col justify-center items-center">
        <h2 className="text-lg text-white mb-6">- LOGIN -</h2>
        <Form form={form}  onFinish={handleLogin} layout="vertical">
          <Space direction="vertical" >
            <Form.Item name="username" rules={[{ required: true, message: 'Please input your username' }]} className="dark-input">
              <Input
                placeholder="Username"
                size="large"
                inputMode="numeric"
                pattern="[0-9]*" 
                prefix={<UserOutlined/>}
                count={{
                  max: 11,
                  strategy: (txt) => txt.length,
                  exceedFormatter: (txt) => txt.slice(0, 11),
                }}
                />
            </Form.Item>
            <Form.Item className="dark-input" name="password"  rules={[{ required: true, message: 'Please input your password' }]}>
              <Input.Password size="large" placeholder="Password" prefix={<LockOutlined/>} iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}/>
            </Form.Item>
            <Button block htmlType="submit" loading={loading} color="lime" variant="solid" style={{color:"black", background :"#00ff00"}}>LOG IN</Button>
          </Space>
        </Form>
        <div className="h-64"></div>
      </Content>
    </Layout>
  )
  }