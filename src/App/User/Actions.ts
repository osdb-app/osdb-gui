import { UserActionTypes, UserActions } from "./Types";

export const Login = (): UserActionTypes => ({
	type: UserActions.RequestLogin,
});

export const Logout = (): UserActionTypes => ({
	type: UserActions.RequestLogout,
});
