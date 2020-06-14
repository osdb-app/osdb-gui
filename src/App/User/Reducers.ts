import { UserAccountState, UserActionTypes, UserActions } from "./Types";

const initialState: UserAccountState = {
	loggingIn: false,
	loggingOut: false,
	isLoggedIn: false,
	error: false,
};

export function UserReducer(state = initialState, action: UserActionTypes): UserAccountState {
	switch (action.type) {
		case UserActions.RequestLogin:
			if (state.isLoggedIn) {
				return state;
			}
			return { loggingIn: true, loggingOut: false, isLoggedIn: state.isLoggedIn, error: false };
		case UserActions.RequestLogout:
			if (!state.isLoggedIn) {
				return state;
			}
			return { loggingIn: false, loggingOut: true, isLoggedIn: state.isLoggedIn, error: false };
		case UserActions.LoggedIn:
			return { loggingIn: false, loggingOut: false, isLoggedIn: true, error: false };
		case UserActions.LoggedOut:
			return { loggingIn: false, loggingOut: false, isLoggedIn: false, error: false };
		case UserActions.Error:
			return { ...state, error: true };
		default:
			return state;
	}
}
