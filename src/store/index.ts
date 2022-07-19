import { configureStore, createAction, createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import { getUahToEur, getUahToPln, getUahToUsd } from "../api/api";
import { ConvertorResponseType } from "../react-app-env";

export interface State {
  query: string,
  uahToUsdCourse: ConvertorResponseType | null,
  uahToEurCourse: ConvertorResponseType | null,
  uahToPlnCourse: ConvertorResponseType | null,
  loadingUSD: boolean,
  loadingEUR: boolean,
  loadingPln: boolean
}

const initialState: State = {
  query: '',
  uahToUsdCourse: null,
  uahToEurCourse: null,
  uahToPlnCourse: null,
  loadingUSD: true,
  loadingEUR: true,
  loadingPln: true
};

export const setUahToUsd = createAsyncThunk('SET_USD', async () => {
  const courseUahToUsd = await getUahToUsd();

  return courseUahToUsd;
});

export const setUahToEur = createAsyncThunk('SET_EUR',async () => {
  const eurCourse = await getUahToEur();

  return eurCourse;
});

export const setUahToPln = createAsyncThunk('SET_PLN', async () => {
  const plnCourse = await getUahToPln();

  return plnCourse;
});

export const setQuery = createAction<string>('SET_QUERY');

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(setUahToUsd.fulfilled, (state, action) => {
    state.loadingUSD = false;
    state.uahToUsdCourse = action.payload;
  });

  builder.addCase(setUahToEur.fulfilled, (state, action) => {
    state.loadingEUR = false;
    state.uahToEurCourse = action.payload;
  });

  builder.addCase(setUahToPln.fulfilled, (state, action) => {
    state.loadingPln = false;
    state.uahToPlnCourse = action.payload
  });

  builder.addCase(setQuery, (state, action) => {
    if (!isNaN(Number(action.payload))) {
      state.query = action.payload;
    }
  });
});

export const store = configureStore({
  reducer
});

export type AppDispatch = typeof store.dispatch;
