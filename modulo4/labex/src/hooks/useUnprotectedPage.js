import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToAdminHomePage } from "../routes/navigation";

const useUnprotectedPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      goToAdminHomePage(navigate);
    }
  }, [navigate]);
};

export default useUnprotectedPage;
