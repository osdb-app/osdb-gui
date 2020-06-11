import * as Mui from "@material-ui/core";
import React from "react";

import { RootState } from "../../../App/Store";
import { ComponentBaseProps, ComponentBase } from "../../../Base/ComponentBase";
import { UserActions } from "../../../App/User/Types";

type LoginProps = ComponentBaseProps;

interface LoginState {
	isLoggedIn: boolean;
}

export class Login extends ComponentBase<LoginProps, LoginState> {
	public componentDidMount(): void {
		(window as any).fbAsyncInit = function() {
			FB.init({
				appId: "279671129811346",
				autoLogAppEvents: true,
				xfbml: true,
				version: "v7.0",
			});
		};
	}

	public static MapState(state: RootState): LoginState {
		const newState = { isLoggedIn: state.user.isLoggedIn };
		return newState;
	}

	public static readonly MapDispatch = {
		login() {
			return { type: UserActions.RequestLogin };
		},
		logout() {
			return { type: UserActions.RequestLogout };
		},
	}

	public render(): React.ReactNode {
		return (
			<React.Fragment>
				<script async defer src="https://connect.facebook.net/en_US/sdk.js"></script>
			</React.Fragment>
		);
	}
}
