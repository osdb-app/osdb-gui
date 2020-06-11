export interface UserStoreState {
	loggingIn: boolean;
	loggingOut: boolean;
	isLoggedIn: boolean;
	error: boolean;
}

export enum UserActions {
	RequestLogin = "User.RequestLogin",
	UpdateInfo = "User.UpdateInfo",
	RequestLogout = "User.RequestLogout",
	Error = "User.Error",
}

interface RequestLoginUserAction {
	type: UserActions.RequestLogin;
}

interface UpdateInfoUserAction {
	type: UserActions.UpdateInfo;
}

interface RequestLogoutUserAction {
	type: UserActions.RequestLogout;
}

interface ErrorUserAction {
	type: UserActions.Error;
}

export type UserActionTypes = RequestLoginUserAction | UpdateInfoUserAction | RequestLogoutUserAction | ErrorUserAction;
