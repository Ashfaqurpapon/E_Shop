import { Button, Row } from "antd";
import PHForm from "../../PHForm/PHForm";
import PHInput from "../../PHForm/PHInput";
import { FieldValues } from "react-hook-form";

import { useAddaCarMutation } from "../../redux/api/CarManagemntApi/carManagementApi";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const CreateCar = () => {
  const [addCar] = useAddaCarMutation();
  const navigate = useNavigate();
  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Car adding");
    try {
      const userInfo = {
        name: data.carName,
        description: data.description,
        color: data.color,
        isElectric: true,
        features: ["AC", "Bluetooth", "Long Range Battery"],
        pricePerHour: Number(data.pricePerHour),
      };
      const res = await addCar(userInfo);
      console.log(res);
      toast.success("Car successfully added", { id: toastId, duration: 2000 });
      navigate("/cars");
    } catch (err) {
      toast.error("Something went wrong", { id: toastId, duration: 2000 });
    }
  };
  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <PHForm onSubmit={onSubmit}>
        <PHInput type="text" name="carName" label="Car Name" />
        <PHInput type="text" name="description" label="Car Description" />
        <PHInput type="text" name="color" label="Car Color" />
        <PHInput type="number" name="pricePerHour" label="Price Per Hour" />
        <Button htmlType="submit">Submit</Button>
      </PHForm>
    </Row>
  );
};

export default CreateCar;
