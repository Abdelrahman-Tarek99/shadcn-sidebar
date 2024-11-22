import { AppRoutes } from "@/components/Routes";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { HTTPCookies } from "@/constants";

interface LoginFormInputs {
  email: string;
  password: string;
}

export const useLoginForm = () => {
  const navigate = useNavigate();
  const { handleSubmit, formState, control } = useForm<LoginFormInputs>({
    mode: "onTouched",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginFormInputs) => {
    console.log(data);
    Cookies.set(HTTPCookies.token, "123456789");
    navigate(AppRoutes.home);
  };

  return {
    handleSubmit,
    formState,
    onSubmit,
    control,
  };
};
