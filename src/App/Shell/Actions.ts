import { DrawerActionTypes, DrawerActions } from "./Types";

export const Open = (): DrawerActionTypes => ({
	type: DrawerActions.Open,
});

export const Close = (): DrawerActionTypes => ({
	type: DrawerActions.Close,
});
