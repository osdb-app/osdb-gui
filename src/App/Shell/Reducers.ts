import { ShellStoreState, DrawerActionTypes, DrawerActions } from "./Types";

const initialState: ShellStoreState = {
	drawerIsOpen: false,
};

export function DrawerReducer(state = initialState, action: DrawerActionTypes): ShellStoreState {
	switch (action.type) {
		case DrawerActions.Open:
			return { drawerIsOpen: true };
		case DrawerActions.Close:
			return { drawerIsOpen: false };
		default:
			return state;
	}
}
