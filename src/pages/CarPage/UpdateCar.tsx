import { Button, Row } from "antd";
import PHForm from "../../PHForm/PHForm";
import PHInput from "../../PHForm/PHInput";
import { FieldValues } from "react-hook-form";
import { CarTypes } from "../../types/CarTypes";
import { useNavigate, useParams } from "react-router-dom";

import {
  useGetSingleCarQuery,
  useUpdateCarMutation,
} from "../../redux/api/CarManagemntApi/carManagementApi";
import { toast } from "sonner";

const UpdateCar = () => {
  const { carId } = useParams();
  const navigate = useNavigate();

  const [updateCar] = useUpdateCarMutation();

  const { data, error, isLoading } = useGetSingleCarQuery(carId as string);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading car data</div>;
  }
  const fetchedCar = data?.data as CarTypes;

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Car adding");
    try {
      const userInfo = {
        name: data.name,
        description: data.description,
        color: data.color,
        isElectric: true,
        features: ["AC", "Bluetooth", "Long Range Battery"],
        pricePerHour: Number(data.pricePerHour),
      };

      const res = await updateCar({
        id: fetchedCar._id,
        payload: userInfo,
      });

      console.log(res);

      toast.success("Car successfully updated", {
        id: toastId,
        duration: 2000,
      });
      navigate(`/cars`);
    } catch (err) {
      toast.error("Something went wrong", { id: toastId, duration: 2000 });
    }
  };

  const defaultValues = fetchedCar;
  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <PHForm onSubmit={onSubmit} defaultValues={defaultValues}>
        <PHInput type="text" name="name" label="Car Name" />
        <PHInput type="text" name="description" label="Car Description" />
        <PHInput type="text" name="color" label="Car Color" />
        <PHInput type="number" name="pricePerHour" label="Price Per Hour" />
        <Button htmlType="submit">Submit</Button>
      </PHForm>
    </Row>
  );
};

export default UpdateCar;
