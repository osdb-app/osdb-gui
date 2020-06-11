import { configureStore, ThunkAction, Action, ConfigureStoreOptions, combineReducers } from "@reduxjs/toolkit";
import { DrawerReducer } from "./Shell/Reducers";
import { UserReducer } from "./User/Reducers";

const rootReducer = combineReducers({
	shell: DrawerReducer,
	user: UserReducer,
});

const configureStoreOptions: ConfigureStoreOptions = {
	reducer: rootReducer,
};

export const store = configureStore(configureStoreOptions);

export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
