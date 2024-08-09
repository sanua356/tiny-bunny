import { createSlice } from '@reduxjs/toolkit';

export type TSoundSliceState = {
	isActivated: boolean;
}

const initialState: TSoundSliceState = {
	isActivated: localStorage.getItem('sound_is_activated') === 'true',
}

const soundSlice = createSlice({
	name: 'soundSlice',
	initialState,
	reducers: {
		setActivateSound(state, action) {
			state.isActivated = action.payload;
			localStorage.setItem('sound_is_activated', String(action.payload));
		},
	},
})

export const { setActivateSound } = soundSlice.actions;
export default soundSlice.reducer;
