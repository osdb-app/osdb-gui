export interface UserAccountState {
	loggingIn: boolean;
	loggingOut: boolean;
	isLoggedIn: boolean;
	error: boolean;
}

export enum UserActions {
	RequestLogin = "User.RequestLogin",
	LoggedIn = "User.LoggedIn",
	LoggedOut = "User.LoggedOut",
	RequestLogout = "User.RequestLogout",
	Error = "User.Error",
}

interface RequestLoginUserAction {
	type: UserActions.RequestLogin;
}

interface LoggedInUserAction {
	type: UserActions.LoggedIn;
}

interface LoggedOutUserAction {
	type: UserActions.LoggedOut;
}

interface RequestLogoutUserAction {
	type: UserActions.RequestLogout;
}

interface ErrorUserAction {
	type: UserActions.Error;
}

export type UserActionTypes = RequestLoginUserAction | LoggedInUserAction | LoggedOutUserAction | RequestLogoutUserAction | ErrorUserAction;
