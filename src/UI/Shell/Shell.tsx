import * as Mui from "@material-ui/core";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import clsx from "clsx";
import React from "react";
import * as Router from "react-router-dom";

import { OsdbRoutedComponentBase, OsdbRouteComponentProps } from "../../Base/ComponentBase";

const drawerWidth = 240;

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
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
		whiteSpace: "nowrap",
	},
	drawerPaper: {
		width: drawerWidth,
	},
	drawerHeader: {
		display: "flex",
		alignItems: "center",
		padding: theme.spacing(0, 2),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
		justifyContent: "flex-start",
	},
	drawerOpen: {
		width: drawerWidth,
		transition: theme.transitions.create("width", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	drawerClose: {
		transition: theme.transitions.create("width", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		overflowX: "hidden",
		width: theme.spacing(7) + 1,
		[theme.breakpoints.up("sm")]: {
			width: theme.spacing(9) + 1,
		},
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	content: {
		padding: theme.spacing(3),
	},
});

interface ShellState {
	drawerIsOpen: boolean;
}

type ShellProps = OsdbRouteComponentProps & Mui.WithStyles<typeof styles>;

class Shell extends OsdbRoutedComponentBase<ShellProps, ShellState> {
	constructor(props: ShellProps) {
		super(props);
		this.state = {
			drawerIsOpen: false,
		};
	}

	private click(): void {
		this.setState({ drawerIsOpen: !this.state.drawerIsOpen });
	}

	public render(): React.ReactNode {
		return (
			<div className={this.props.classes.root}>
				<Mui.Drawer
					variant="permanent"
					className={clsx(this.props.classes.drawer, {
						[this.props.classes.drawerOpen]: this.state.drawerIsOpen,
						[this.props.classes.drawerClose]: !this.state.drawerIsOpen,
					})}
					classes={{
						paper: clsx({
							[this.props.classes.drawerOpen]: this.state.drawerIsOpen,
							[this.props.classes.drawerClose]: !this.state.drawerIsOpen,
						}),
					}}
					anchor="left"
					open={this.state.drawerIsOpen}
				>
					<Mui.List>
						<Mui.ListItem button={true} onClick={this.click}>
							<Mui.ListItemIcon>{this.state.drawerIsOpen ? <ChevronLeftIcon /> : <MenuIcon />}</Mui.ListItemIcon>
						</Mui.ListItem>
					</Mui.List>
					<Mui.Divider />
					<Mui.List>
						<Mui.ListItem button={true}>
							<Mui.ListItemIcon><InboxIcon /></Mui.ListItemIcon>
							<Mui.ListItemText primary="Yo" />
						</Mui.ListItem>
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
				<main className={this.props.classes.content}>
					{this.props.children}
				</main>
			</div>
		);
	}
}

export default Mui.withStyles(styles)(Router.withRouter(Shell));
