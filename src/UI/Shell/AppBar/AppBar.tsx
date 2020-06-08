import * as Mui from "@material-ui/core";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import clsx from "clsx";
import React from "react";

import { ComponentBase, ComponentBaseProps } from "../../../Base/ComponentBase";
import { AppBarStyles } from "./AppBar.styles";

interface OwnProps {
	drawerIsOpen: boolean;
	onOpenDrawer: () => void;
}

type AppBarProps = ComponentBaseProps & Mui.WithStyles<typeof AppBarStyles> & OwnProps;

export class NonStyledAppBar extends ComponentBase<AppBarProps> {
	public constructor(props: AppBarProps) {
		super(props);
	}

	public render(): React.ReactNode {
		return (
			<Mui.AppBar
				position="fixed"
				className={clsx(this.props.classes.appBar, {
					[this.props.classes.appBarShift]: this.props.drawerIsOpen,
				})}
			>
				<Mui.Toolbar>
					<Mui.IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={this.props.onOpenDrawer}
						edge="start"
						className={clsx(this.props.classes.menuButton, {
							[this.props.classes.hide]: this.props.drawerIsOpen,
						})}
					>
						<AccountBoxIcon />
					</Mui.IconButton>
					<Mui.Typography variant="h6" noWrap>
						Mini variant drawer
					</Mui.Typography>
				</Mui.Toolbar>
			</Mui.AppBar>
		);
	}
}

export const AppBar = Mui.withStyles(AppBarStyles)(NonStyledAppBar);
