import React from "react";
import { withRouter } from "react-router-dom";

import { OsdbRoutedComponentBase, OsdbRouteComponentProps } from "../../Base/ComponentBase";
import { Counter } from "../../Features/counter/Counter";

class Home extends OsdbRoutedComponentBase<OsdbRouteComponentProps> {
	public render(): React.ReactNode {
		return (
			<Counter />
		);
	}
}

export default withRouter(Home);
