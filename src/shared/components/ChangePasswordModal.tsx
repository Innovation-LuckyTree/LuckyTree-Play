import { EyeInvisibleOutlined, EyeTwoTone, LockOutlined } from "@ant-design/icons";
import { Button, Form, Input, message, Modal, Space } from "antd";
import { FC, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { cancellationModal } from "../../utils/helpers";

interface ChangePasswordModalProps{
  open: boolean;
  onClose: ()=>void;
}

export const ChangePasswordModal: FC<ChangePasswordModalProps> = ({open, onClose}) => {
  const [form] = Form.useForm();
  const {changePassword, loading, error} = useAuth();
  const [isEmpty, setIsEmpty] = useState(true);

  const handleChangePassword = async () => {
    const values = await form.validateFields();
    try{
      await changePassword(values);
      onClose();
      message.success("Changed password successfully");
    }
    catch(e){
      message.error(error);
    }
  }
  
  const checkIfEmpty = () => {
    const values = form.getFieldsValue();
    const hasValue = Object.values(values).some(val => val !== undefined && val !== '');
    setIsEmpty(!hasValue);
  };

  const handleCancel = ()=>{
    if(isEmpty){
      onClose();
      return;
    }
    cancellationModal(onClose);
  }


  return (
    <Modal
      open={open}
      onClose={handleCancel}
      onCancel={handleCancel}
      title={
        <span><LockOutlined/> Change Password</span>
      }
      styles={{footer:{display:"flex",justifyContent:"center"}}}
      footer={
        <Button type="primary" loading={loading} onClick={handleChangePassword} disabled={isEmpty}>Change Password</Button>
      }
    >
      <Form form={form} layout="vertical" style={{display:"flex", justifyContent:"center"}} onChange={checkIfEmpty}>
        <Space direction="vertical" >
          <Form.Item
            name="oldPassword"
            rules={[{ required: true, message: 'Please input your old password' }]}
            style={{marginBottom:0}}
          >
            <Input.Password size="large" placeholder="Old Password" prefix={<LockOutlined/>} iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}/>
          </Form.Item>
          <Form.Item
            name="newPassword"
            rules={[{ required: true, message: 'Please input your new password' }]}
            style={{marginBottom:0}}
          >
            <Input.Password size="large" placeholder="New Password" prefix={<LockOutlined/>} iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}/>
          </Form.Item>
          <Form.Item
            name="confirmPassword"
            dependencies={['newPassword']}
            rules={[{ required: true, message: 'Please input your confirm password' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('newPassword') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('The two passwords do not match!'));
                },
              }),
            ]}
            style={{marginBottom:0}}
          >
            <Input.Password size="large" placeholder="Confirm Password" prefix={<LockOutlined/>} iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}/>
          </Form.Item>
        </Space>
      </Form>
    </Modal>
  )
}