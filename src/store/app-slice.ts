import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getNames } from 'country-list';

import { ReactHookFormData } from '@/pages/react-hook-form';

const countries = getNames();

const initialState = {
  countryList: countries,
  unconrolledFormData: {},
  reactHookFormData: {},
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setUnconrolledFormData(state, action: PayloadAction<Record<string, unknown>>) {
      state.unconrolledFormData = action.payload;
    },
    setReactHookFormData(state, action: PayloadAction<ReactHookFormData>) {
      state.reactHookFormData = action.payload;
    },
  },
});

export const { reducer: appReducer } = appSlice;
export const { setUnconrolledFormData, setReactHookFormData } = appSlice.actions;
export { countries };
