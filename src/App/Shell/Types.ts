export interface ShellStoreState {
	drawerIsOpen: boolean;
}

export enum DrawerActions {
	Open = "Shell.Drawer.Open",
	Close = "Shell.Drawer.Close",
}

interface OpenDrawerAction {
	type: DrawerActions.Open;
}

interface CloseDrawerAction {
	type: DrawerActions.Close;
}

export type DrawerActionTypes = OpenDrawerAction | CloseDrawerAction;
