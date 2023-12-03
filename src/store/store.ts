import { configureStore } from '@reduxjs/toolkit';

import { countriesReducer } from './countries-slice';

const store = configureStore({
  reducer: {
    countries: countriesReducer,
  },
});

export { store };
export type RootState = ReturnType<typeof store.getState>;
