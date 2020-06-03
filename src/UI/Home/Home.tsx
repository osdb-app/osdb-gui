import React from "react";
import { withRouter } from "react-router-dom";
import logo from "../../logo.svg";

import { OsdbRoutedComponentBase, OsdbRouteComponentProps } from "../../Base/ComponentBase";
import { withStyles, Theme, createStyles } from "@material-ui/core";

const styles = (theme: Theme) => createStyles({
});

class Home extends OsdbRoutedComponentBase<OsdbRouteComponentProps> {
	public render(): React.ReactNode {
		return (
			<img src={logo} className="App-logo" alt="logo" />
		);
	}
}

export default withStyles(styles)(withRouter(Home));
