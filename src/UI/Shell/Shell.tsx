import * as Mui from "@material-ui/core";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import React from "react";
import * as Router from "react-router-dom";
import "./App.css";

import { OsdbRoutedComponentBase, OsdbRouteComponentProps } from "../../Base/ComponentBase";

const drawerWidth = 240;

const styles = (theme: Mui.Theme) => Mui.createStyles({
	root: {
		display: "flex",
	},
	appBar: {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: drawerWidth,
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerPaper: {
		width: drawerWidth,
	},
	// necessary for content to be below app bar
	toolbar: theme.mixins.toolbar,
	content: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.default,
		padding: theme.spacing(3),
	},
});

interface ShellProps extends OsdbRouteComponentProps, Mui.WithStyles<typeof styles> {
	isDev: boolean;
	verbose: boolean;
}

class Shell extends OsdbRoutedComponentBase<ShellProps, {}> {
	public render(): React.ReactNode {
		return (
			<Mui.Drawer
				className={this.props.classes.drawer}
				variant="permanent"
				classes={{
					paper: this.props.classes.drawerPaper,
				}}
				anchor="left"
			>
				<div className={this.props.classes.toolbar} />
				<Mui.Divider />
				<Mui.List>
					{["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
						<Mui.ListItem button key={text}>
							<Mui.ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</Mui.ListItemIcon>
							<Mui.ListItemText primary={text} />
						</Mui.ListItem>
					))}
				</Mui.List>
				<Mui.Divider />
				<Mui.List>
					{["All mail", "Trash", "Spam"].map((text, index) => (
						<Mui.ListItem button key={text}>
							<Mui.ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</Mui.ListItemIcon>
							<Mui.ListItemText primary={text} />
						</Mui.ListItem>
					))}
				</Mui.List>
			</Mui.Drawer>
		);
	}
}

export default Mui.withStyles(styles)(Router.withRouter(Shell));
