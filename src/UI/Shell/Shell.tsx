import * as Mui from "@material-ui/core";
import React from "react";
import { connect, ConnectedProps } from "react-redux";

import { ComponentBaseProps, ComponentBase } from "../../Base/ComponentBase";
import { AppBar } from "./AppBar/AppBar";
import { ShellStyles } from "./Shell.styles";
import { Drawer } from "./Drawer/Drawer";
import { RootState } from "../../App/Store";
import { DrawerActions, ShellState } from "../../App/Shell/Types";

type ShellProps = ShellState & ConnectedProps<typeof Connector> & ComponentBaseProps & Mui.WithStyles<typeof ShellStyles>;

class NonStyledShell extends ComponentBase<ShellProps> {
	constructor(props: ShellProps) {
		super(props);
	}

	public static MapState(state: RootState): ShellState {
		const newState = { drawerIsOpen: state.shell.drawerIsOpen };
		return newState;
	}

	public static readonly MapDispatch = {
		openDrawer: () => ({ type: DrawerActions.Open }),
		closeDrawer: () => ({ type: DrawerActions.Close }),
	}

	public render(): React.ReactNode {
		return (
			<div className={this.props.classes.root}>
				<Drawer isOpen={this.props.drawerIsOpen} onCloseDrawer={this.props.closeDrawer} />
				<AppBar drawerIsOpen={this.props.drawerIsOpen} onOpenDrawer={this.props.openDrawer} />
				<main className={this.props.classes.content}>
					<div className={this.props.classes.toolbar} />
					{this.props.children}
				</main>
			</div>
		);
	}
}

const StyledShell = Mui.withStyles(ShellStyles)(NonStyledShell);
const Connector = connect(NonStyledShell.MapState, NonStyledShell.MapDispatch);
export const Shell = Connector(StyledShell);
