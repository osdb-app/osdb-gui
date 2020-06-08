import { configureStore, ThunkAction, Action, ConfigureStoreOptions, combineReducers } from "@reduxjs/toolkit";
import { DrawerReducer } from "./Shell/Reducers";

const rootReducer = combineReducers({
	shell: DrawerReducer,
});

const configureStoreOptions: ConfigureStoreOptions = {
	reducer: rootReducer,
};

export const store = configureStore(configureStoreOptions);

export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
