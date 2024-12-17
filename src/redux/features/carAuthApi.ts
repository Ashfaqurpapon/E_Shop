import { baseApi } from "../api/baseApi";

const carAuthApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    carLogin: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/signin",
        method: "POST",
        body: userInfo,
      }),
    }),
    carSignUp: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/signup",
        method: "POST",
        body: userInfo,
      }),
    }),
  }),
});

export const { useCarLoginMutation, useCarSignUpMutation } = carAuthApi;
