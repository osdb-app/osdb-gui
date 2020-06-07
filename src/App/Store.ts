import { configureStore, ThunkAction, Action, ConfigureStoreOptions } from "@reduxjs/toolkit";
import { CounterReducer } from "./Reducer";

const configureStoreOptions: ConfigureStoreOptions = {
	reducer: {
		counter: CounterReducer,
	},
};

export const store = configureStore(configureStoreOptions);

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
