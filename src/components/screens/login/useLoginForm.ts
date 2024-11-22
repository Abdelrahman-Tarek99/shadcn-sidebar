import { AppRoutes } from "@/components/Routes";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

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
    navigate(AppRoutes.home);
  };

  return {
    handleSubmit,
    formState,
    onSubmit,
    control,
  };
};
