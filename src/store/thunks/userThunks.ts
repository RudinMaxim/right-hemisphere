import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from '../../constants/url';
import { IUser, userSchema } from '../../types/User';

export const fetchUsers = createAsyncThunk<IUser[], void>(
    'users/fetchUsers',
    async () => {
        const response = await axios.get<IUser[]>('/users', {
            baseURL: API_URL,
        });
        const users = response.data.map((user) => userSchema.parse(user));
        return users;
    }
);

export const fetchUserById = createAsyncThunk<IUser, number>(
    'users/fetchUserById',
    async (userId) => {
        const response = await axios.get<IUser>(`/users/${userId}`, {
            baseURL: API_URL,
        });
        const user = userSchema.parse(response.data);
        return user;
    }
);
