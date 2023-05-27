// API
import { api } from '../api';
// Types
import {  ResponseLoginData } from './auth.types';
import { UserData } from '@/types';

export const authApi = api.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<ResponseLoginData, UserData >({
            query: (userData) => ({
                url:  '/users/login',
                method: 'POST',
                body: userData,
            })
        }),
        register: builder.mutation<ResponseLoginData, UserData>({
            query: (userData) => ({
                url:  '/users/register',
                method: 'POST',
                body: userData,
            })
        }),
        current: builder.query<ResponseLoginData, void>({
            query: () => ({
                url:  '/users/current',
                method: 'GET',
            })
        }),
    }),
});

// Hooks
export const { useLoginMutation, useCurrentQuery, useRegisterMutation  } = authApi;
// Endpoints
export const { endpoints: { login, register, current} } = authApi;