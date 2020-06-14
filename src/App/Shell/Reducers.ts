import { ShellState, DrawerActionTypes, DrawerActions } from "./Types";

const initialState: ShellState = {
	drawerIsOpen: false,
};

export function DrawerReducer(state = initialState, action: DrawerActionTypes): ShellState {
	switch (action.type) {
		case DrawerActions.Open:
			return { drawerIsOpen: true };
		case DrawerActions.Close:
			return { drawerIsOpen: false };
		default:
			return state;
	}
}
