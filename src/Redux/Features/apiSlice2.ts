import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:3000/api',
    credentials: 'include'
});
export const apiSlice2 = createApi({
    reducerPath: 'api2',
    baseQuery,
    endpoints: () => ({})
});
