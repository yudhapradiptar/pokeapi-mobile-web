import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const Notifications = (type, name) => {
  switch (type) {
    case "catch-success":
      toast.success(`${name} has been caught, enter nickname`, {
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
      });
      break;
    case "catch-failed":
      toast.error(`You missed, try again!`, {
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
      });
      break;
    case "release":
      toast.warning(`${name} has been released`, {
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
      });
      break;
    case "catch-submit":
      toast.success(`${name} has been saved`, {
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
      });
      break;
    case "nickname-exist":
      toast.error(`Nickname already used`, {
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
      });
      break;
    default:
      break;
  }
};

export default Notifications;
