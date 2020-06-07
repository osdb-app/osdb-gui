import React from "react";
import { withRouter } from "react-router-dom";

import { OsdbRoutedComponentBase, OsdbRouteComponentProps } from "../../Base/ComponentBase";
import { Game } from "../Match/Game/Game";
import Stats from "../Match/Stats";

class Home extends OsdbRoutedComponentBase<OsdbRouteComponentProps> {
	public render(): React.ReactNode {
		return (
			<React.Fragment>
				<Game height={68} width={105} multiplier={10} />
				<Stats />
			</React.Fragment>
		);
	}
}

export default withRouter(Home);
