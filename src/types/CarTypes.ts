export type CarTypes = {
  _id: string;
  name: string;
  description: string;
  color: string;
  isElectric: boolean;
  features: string[];
  pricePerHour: number;
  status: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
};

type UserType = {
  _id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
};

export type TCarUser = {
  _id: string;
  name: string;
  email: string;
  role: string;
  password: string;
  phone: string;
  address: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type BookingType = {
  _id: string;
  date: string;
  startTime: string;
  endTime: string;
  user: UserType;
  carId: CarTypes;
  totalCost: number;
  createdAt: string;
  updatedAt: string;
};
