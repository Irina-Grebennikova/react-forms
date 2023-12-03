import { createSlice } from '@reduxjs/toolkit';
import { getNames } from 'country-list';

const countries = getNames();

const initialState = {
  countryList: countries,
};

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
});

export const { reducer: countriesReducer } = countriesSlice;
export { countries };
