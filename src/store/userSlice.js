import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

export const userSlice = createSlice({
	name: 'user',
	initialState: {
		user: {},
	},
	reducers: {
		toSecondPage: (state, action) => {
			state.user = { ...state.user, ...action.payload };
		},
		toThirdPage: (state, action) => {
			state.user = { ...state.user, ...action.payload };
		},
		toFinalPage: (state, action) => {
			state.user = { ...state.user, ...action.payload };
		},
		backToFirstPage: (state) => {
			state.user = {};
		},
	},
});

export const { toSecondPage, toThirdPage, toFinalPage, backToFirstPage } = userSlice.actions;
export const selectUser = (state) => state.user.user;

// export const getData = createSelector((state) => state.user.user);

export default userSlice.reducer;
