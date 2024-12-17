import { TQueryParam, TResponseRedux } from "../../../types";
import { BookingType } from "../../../types/CarTypes";
import { baseApi } from "../baseApi";

const BookingManagmentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    returnACar: builder.mutation({
      query: (data) => ({
        url: "/cars/return",
        method: "PUT",
        body: data.value,
      }),
    }),

    searchBookingsByCarIDandDate: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/bookings",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response: TResponseRedux<BookingType[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
  }),
});

export const { useReturnACarMutation, useSearchBookingsByCarIDandDateQuery } =
  BookingManagmentApi;
