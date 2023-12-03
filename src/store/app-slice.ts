import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getNames } from 'country-list';

const countries = getNames();

const initialState = {
  countryList: countries,
  uncontrolledFormData: {},
  reactHookFormData: {},
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setUncontrolledFormData(state, action: PayloadAction<Record<string, unknown>>) {
      state.uncontrolledFormData = action.payload;
    },
    setReactHookFormData(state, action: PayloadAction<Record<string, unknown>>) {
      state.reactHookFormData = action.payload;
    },
  },
});

export const { reducer: appReducer } = appSlice;
export const { setUncontrolledFormData, setReactHookFormData } = appSlice.actions;
export { countries };
