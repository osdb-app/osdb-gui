import * as Mui from "@material-ui/core";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import React from "react";
import { connect, ConnectedProps } from "react-redux";

import { RootState } from "../../../App/Store";
import { ComponentBaseProps, ComponentBase } from "../../../Base/ComponentBase";
import { UserActions, UserAccountState } from "../../../App/User/Types";

type UserAccountProps = UserAccountState & ConnectedProps<typeof Connector> & ComponentBaseProps;

class NotConnectedUserAccount extends ComponentBase<UserAccountProps> {
	public constructor(props: UserAccountProps) {
		super(props);
	}

	public static MapState(state: RootState): UserAccountState {
		const newState = {
			loggingIn: state.user.loggingIn,
			loggingOut: state.user.loggingOut,
			isLoggedIn: state.user.isLoggedIn,
			error: state.user.error,
		};
		return newState;
	}

	public static readonly MapDispatch = {
		loginAction() {
			return { type: UserActions.RequestLogin };
		},
		loggedInAction() {
			return { type: UserActions.LoggedIn };
		},
		logoutAction() {
			return { type: UserActions.RequestLogout };
		},
	}

	private login(): void {
		FB.login(this.handleLoginResponse);
		this.props.loginAction();
	}

	private handleLoginResponse(response: fb.StatusResponse): void {
		if (response.status === "connected") {
			this.props.loggedInAction();
		}
	}

	public render(): React.ReactNode {
		return (
			<React.Fragment>
				<Mui.IconButton onClick={this.login}>
					<AccountBoxIcon />
				</Mui.IconButton>
			</React.Fragment>
		);
	}
}

const Connector = connect(NotConnectedUserAccount.MapState, NotConnectedUserAccount.MapDispatch);
export const UserAccount = Connector(NotConnectedUserAccount);
