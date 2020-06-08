import * as Mui from "@material-ui/core";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import clsx from "clsx";
import React from "react";

import { ComponentBase, ComponentBaseProps } from "../../../Base/ComponentBase";
import { DrawerStyles } from "./Drawer.styles";

interface OwnProps {
	isOpen: boolean;
	onCloseDrawer: () => void;
}

type DrawerProps = ComponentBaseProps & Mui.WithStyles<typeof DrawerStyles> & OwnProps;

class NonStyledDrawer extends ComponentBase<DrawerProps> {
	public constructor(props: DrawerProps) {
		super(props);
	}

	public render(): React.ReactNode {
		return (
			<Mui.Drawer
				variant="permanent"
				className={clsx(this.props.classes.drawer, {
					[this.props.classes.drawerOpen]: this.props.isOpen,
					[this.props.classes.drawerClose]: !this.props.isOpen,
				})}
				classes={{
					paper: clsx({
						[this.props.classes.drawerOpen]: this.props.isOpen,
						[this.props.classes.drawerClose]: !this.props.isOpen,
					}),
				}}
			>
				<div className={this.props.classes.toolbar}>
					<Mui.IconButton onClick={this.props.onCloseDrawer}>
						<ChevronLeftIcon />
					</Mui.IconButton>
				</div>
				<Mui.Divider />
				<Mui.List>
					{["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
						<Mui.ListItem button key={text}>
							<Mui.ListItemIcon><AccountBoxIcon /></Mui.ListItemIcon>
							<Mui.ListItemText primary={text} />
						</Mui.ListItem>
					))}
				</Mui.List>
				<Mui.Divider />
				<Mui.List>
					{["All mail", "Trash", "Spam"].map((text, index) => (
						<Mui.ListItem button key={text}>
							<Mui.ListItemIcon><AccountBoxIcon /></Mui.ListItemIcon>
							<Mui.ListItemText primary={text} />
						</Mui.ListItem>
					))}
				</Mui.List>
			</Mui.Drawer>
		);
	}
}

export const Drawer = Mui.withStyles(DrawerStyles)(NonStyledDrawer);
