import { Button, Row } from "antd";
import { FieldValues } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useCarSignUpMutation } from "../redux/features/carAuthApi";
import PHForm from "../PHForm/PHForm";
import PHInput from "../PHForm/PHInput";
import PHSelect from "../PHForm/PHSelect";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [signUp] = useCarSignUpMutation();

  const userOptions = [
    {
      value: "user",
      label: "User",
    },
    {
      value: "admin",
      label: "Admin",
    },
  ];

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Signing in");

    if (!data.user) {
      console.log("User is not given");
      data.user = "user";
    }
    console.log(data);
    try {
      const userInfo = {
        name: data.name,
        email: data.email,
        role: data.user,
        password: data.password,
        phone: data.phoneNo,
        address: "123444 Main St, City, Country",
      };

      const res = await signUp(userInfo);
      console.log("Papon result : ");
      console.log(res);

      toast.success("Logged in", { id: toastId, duration: 2000 });
      if (res.error) {
        toast.error("Something went wrong. Try again", {
          id: toastId,
          duration: 2000,
        });
      } else {
        navigate(`/carSignIn`, {
          state: {
            email: userInfo.email,
            password: userInfo.password,
          },
        });
      }
    } catch (err) {
      toast.error("Something went wrong. Try again", {
        id: toastId,
        duration: 2000,
      });
    }
  };

  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <PHForm onSubmit={onSubmit}>
        <PHInput type="text" name="name" label="Name" required={true} />
        <PHInput type="email" name="email" label="Email" required={true} />
        <PHInput type="text" name="password" label="Password" required={true} />
        <PHInput
          type="text"
          name="ConfirmPassword"
          label="Confirm Password"
          required={true}
        />
        <PHInput
          type="text"
          name="phoneNo"
          label="Phone Number"
          required={true}
        />
        <PHSelect label="Register as : " name="user" options={userOptions} />
        <Button htmlType="submit">SignUp</Button>
      </PHForm>
    </Row>
  );
};

export default SignUpPage;
