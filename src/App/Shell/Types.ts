export interface ShellStoreState {
	drawerIsOpen: boolean;
}

export enum DrawerActions {
	Open = "DrawerActions.Open",
	Close = "DrawerActions.Close",
}

interface OpenDrawerAction {
	type: DrawerActions.Open;
}

interface CloseDrawerAction {
	type: DrawerActions.Close;
}

export type DrawerActionTypes = OpenDrawerAction | CloseDrawerAction;
