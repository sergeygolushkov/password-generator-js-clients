import { NotificationContext } from 'shared';
import { PropsWithChildren } from 'react';
import { toast, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export type NotificationProviderProps = PropsWithChildren;

export const NotificationProvider = ({
  children,
}: NotificationProviderProps) => {
  return (
    <NotificationContext.Provider
      value={{
        warning: toast.warning,
        info: toast.info,
        error: toast.error,
        success: toast.success,
      }}
    >
      {children}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        limit={2}
      />
    </NotificationContext.Provider>
  );
};
