import { toast as toastify } from "react-toastify";

export default function useToast() {
  const toast = (
    message: string,
    type: "success" | "error" | "info" | "warn",
  ) => {
    switch (type) {
      case "success":
        toastify.success(message);
        break;
      case "error":
        toastify.error(message);
        break;
      case "warn":
        toastify.warn(message);
        break;
      case "info":
        toastify.info(message);
        break;
    }
  };

  return { toast };
}
