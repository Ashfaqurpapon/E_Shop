/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  //   BaseQueryApi,
  //   BaseQueryFn,
  createApi,
  //   DefinitionType,
  //   FetchArgs,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
// import { setUser } from "../feathers/auth/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://productsweb.vercel.app/api",
  //baseUrl: "https://productsweb.vercel.app/api",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).carAuth.token;

    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

// const baseQueryWithRefreshToken: BaseQueryFn<
//   FetchArgs,
//   BaseQueryApi,
//   DefinitionType
// > = async (args, api, extraOptions): Promise<any> => {
//   let result = await baseQuery(args, api, extraOptions);

//   if (result?.error?.status === 401) {
//     //* Send Refresh
//     console.log("Sending refresh token");

//     const res = await fetch("http://localhost:4444/api/v1/auth/refresh-token", {
//       method: "POST",
//       credentials: "include",
//     });

//     const data = await res.json();

//     if (data?.data?.accessToken) {
//       const user = (api.getState() as RootState).auth.user;

//       api.dispatch(
//         setUser({
//           user,
//           token: data.data.accessToken,
//         })
//       );

//       result = await baseQuery(args, api, extraOptions);
//     } else {
//       api.dispatch(logout());
//     }
//   }

//   return result;
// };

// export const baseApi = createApi({
//   reducerPath: "baseApi",
//   baseQuery: baseQueryWithRefreshToken,
//   endpoints: () => ({}),
// });

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQuery,
  tagTypes: ["cars", "bookings", "users"],
  endpoints: () => ({}),
});
