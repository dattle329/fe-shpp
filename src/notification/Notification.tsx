import { Bounce, toast, ToastContainer } from "react-toastify";

interface NotificationProps {
  status: 'success' | 'error' | 'warning' | 'info'; // Kiểu status
  message: string;
}

const toastTypes = {
  success: toast.success,
  error: toast.error,
  warning: toast.warning,
  info: toast.info
};

function Notification({ status, message }: NotificationProps) {
  // Sử dụng toastTypes để gọi đúng loại thông báo
  const ToastMessage = toastTypes[status];
  ToastMessage?.(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  });

  return (
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition={Bounce}
    />
  );
}

export default Notification;
