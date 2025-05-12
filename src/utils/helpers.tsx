import { Modal } from "antd";

export const getPageTitle = (path: string) => {
    const parts = path.split('/').filter(Boolean);
    if (parts.length === 0) return 'Home';
    return parts.map(part => part.replace(/-/g, ' '))
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' / ');
  };

  
export const cancellationModal = ( handleOkay:()=>void, title?: string, content?: string) => {
    Modal.confirm({
      title: title ?? 'Confirmation!',
      content:content?? 'Are you sure you want to cancel this entry?',
      okText: "Yes",
      cancelText: "No",
      onOk: handleOkay,
      cancelButtonProps: {
        variant: 'outlined'
      },
      okButtonProps:{
        danger: true
      }
    });
  }