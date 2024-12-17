import { TResponseRedux } from "../../../types";
import { BookingType } from "../../../types/CarTypes";
import { baseApi } from "../baseApi";

const userManagemntsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMyBookings: builder.query({
      query: () => ({
        url: "/bookings/my-bookings",
        method: "GET",
      }),
      transformResponse: (response: TResponseRedux<BookingType[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    // addAcademicSemester: builder.mutation({
    //   query: (data) => ({
    //     url: "/academic-semesters/create-academic-semester",
    //     method: "POST",
    //     body: data,
    //   }),
    // }),
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

export const { useGetMyBookingsQuery } = userManagemntsApi;
