
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Initialize toast configuration


const ToastService = {
    success: (message) => {
        toast.success(message,{
            position:"bottom-center",
            autoClose:2000
        });
    },
    error: (message) => {
        toast.error(message,
            {
                position:"bottom-center",
                autoClose:2000
            }
        );
    },
    warning: (message) => {
        toast.warning(message,
            {
                position:"bottom-center",
                autoClose:2000
            }
        );
    },
    info: (message) => {
        toast.info(message,
            {
                position:"bottom-center",
                autoClose:2000
            }
        );
    },
    
};

export default ToastService;
