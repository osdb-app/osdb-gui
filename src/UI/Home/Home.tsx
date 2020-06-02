import React from "react";
import { withRouter } from "react-router-dom";
import logo from "../../logo.svg";

import { OsdbRoutedComponentBase } from "../../Base/ComponentBase";
import { OsdbRouteComponentProps } from "../../Base/AppStates";

class Home extends OsdbRoutedComponentBase<OsdbRouteComponentProps> {
	public render(): React.ReactNode {
		return (
			<img src={logo} className="App-logo" alt="logo" />
		);
	}
}

export default withRouter(Home);
