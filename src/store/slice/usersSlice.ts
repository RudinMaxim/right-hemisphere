import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../types/User';

interface UsersState {
    users: IUser[];
    isLoading: boolean;
    error: string | null;
}

const initialState: UsersState = {
    users: [],
    isLoading: false,
    error: null,
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers: (state, action: PayloadAction<IUser[]>) => {
            state.users = action.payload;
            state.isLoading = false;
            state.error = null;
        },
        setUsersLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        setUsersError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload;
            state.isLoading = false;
        },
    },
});

export const { setUsers, setUsersLoading, setUsersError } = usersSlice.actions;
export default usersSlice.reducer;