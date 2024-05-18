import { createSlice } from '@reduxjs/toolkit';
import { IUser } from '../../types/User';
import { fetchUserById, fetchUsers } from '../thunks/userThunks';

interface UserState {
    users: IUser[];
    currentUser: IUser | null;
    isLoading: boolean;
    error: string | null;
}

const initialState: UserState = {
    users: [],
    currentUser: null,
    isLoading: false,
    error: null,
};

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.users = action.payload;
        });
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message || 'Something went wrong';
        });

        builder.addCase(fetchUserById.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(fetchUserById.fulfilled, (state, action) => {
            state.isLoading = false;
            state.currentUser = action.payload;
        });
        builder.addCase(fetchUserById.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message || 'Something went wrong';
        });
    },
});

export default userSlice.reducer;
