import React from "react";
import { withRouter } from "react-router-dom";

import { OsdbRoutedComponentBase, OsdbRouteComponentProps } from "../../Base/ComponentBase";
import Game from "../Match/Game";
import Stats from "../Match/Stats";

class Home extends OsdbRoutedComponentBase<OsdbRouteComponentProps> {
	public render(): React.ReactNode {
		return (
			<React.Fragment>
				<Game />
				<Stats />
			</React.Fragment>
		);
	}
}

export default withRouter(Home);
