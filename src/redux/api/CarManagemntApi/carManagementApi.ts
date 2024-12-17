import { TResponseRedux } from "../../../types";
import { CarTypes } from "../../../types/CarTypes";
import { baseApi } from "../baseApi";

const carManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCars: builder.query({
      query: () => ({
        url: "/product",
        method: "GET",
      }),
      providesTags: ["cars"],
      transformResponse: (response: TResponseRedux<CarTypes[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    addaCar: builder.mutation({
      query: (data) => ({
        url: "/cars",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["cars"],
    }),
    updateCar: builder.mutation({
      query: (data) => ({
        url: `/cars/${data.id}`,
        method: "PUT",
        body: data.payload,
      }),
      invalidatesTags: ["cars"],
    }),
    deleteCar: builder.mutation({
      query: (data) => ({
        url: `/cars/${data.id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["cars"],
    }),

    bookACar: builder.mutation({
      query: (data) => ({
        url: "/bookings",
        method: "POST",
        body: data,
      }),
    }),

    getSingleCar: builder.query({
      query: (carId: string) => ({
        url: `/cars/${carId}`,
        method: "GET",
      }),
      transformResponse: (response: TResponseRedux<CarTypes>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),

    // getAcademicDepartments: builder.query({
    //   query: () => {
    //     return { url: "/academic-departments", method: "GET" };
    //   },
    //   transformResponse: (response: TResponseRedux<TAcademicDepartment[]>) => {
    //     return {
    //       data: response.data,
    //       meta: response.meta,
    //     };
    //   },
    // }),
    // addAcademicDepartment: builder.mutation({
    //   query: (data) => ({
    //     url: "/academic-departments/create-academic-department",
    //     method: "POST",
    //     body: data,
    //   }),
    // }),
  }),
});

export const {
  useAddaCarMutation,
  useDeleteCarMutation,
  useBookACarMutation,
  useGetSingleCarQuery,
  useUpdateCarMutation,
  useGetAllCarsQuery,
} = carManagementApi;
