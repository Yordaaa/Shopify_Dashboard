import { apiSlice2 } from "./apiSlice2";
import { UserInputProps, UserResponseProps } from "./types";

export const authApiSlice = apiSlice2.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<UserResponseProps, UserInputProps>({
      query: (data) => {
        return {
          url: "/auth/login",
          method: "POST",
          body: data,
        };
      },
    }),
    logout: builder.mutation({
      query: () => {
        return {
          url: "/auth/logout",
          method: "POST",
        };
      },
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation } = authApiSlice;
