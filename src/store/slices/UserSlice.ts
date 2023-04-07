import {createSlice} from '@reduxjs/toolkit';

interface Users {
  Id?: string;
  Name: UsersName | null;
  Gender?: string;
  Email?: string;
  Loading: boolean;
}

interface UsersName {
  title: string;
  first: string;
  last: string;
}

interface UsersPageStates {
  Loading: boolean;
  TotalUser?: number;
  Data?: Users[];
}

const initialState: UsersPageStates = {
  TotalUser: undefined,
  Data: undefined,
  Loading: false,
};

export const UsersSlice = createSlice({
  name: 'USERS',
  initialState,
  reducers: {
    setUsers: (state, action) => {
      return {
        ...state,
        Data: action.payload.Data,
        Loading: false,
        TotalUser: action.payload.TotalUser,
      };
    },
    setLoading: (state, action) => {
      return {
        ...state,
        Loading: action.payload,
      };
    },
  },
});

export const {setUsers, setLoading} = UsersSlice.actions;

export default UsersSlice.reducer;
