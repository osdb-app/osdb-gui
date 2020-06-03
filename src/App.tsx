import { CssBaseline, MuiThemeProvider } from "@material-ui/core";
import { map } from "lodash";
import React from "react";
import * as Router from "react-router-dom";

import { Counter } from "./features/counter/Counter";
import Shell from "./UI/Shell/Shell";
import OsdbTheme from "./Base/Theme";
import { OsdbRouteComponentProps } from "./Base/ComponentBase";

type AppProps = OsdbRouteComponentProps;

class App extends React.Component<AppProps, {}> {
	public render(): React.ReactNode {
		return (
			<MuiThemeProvider theme={OsdbTheme}>
				<CssBaseline />
				<Shell>
					<Counter />
				</Shell>
			</MuiThemeProvider>
		);
	}
}

export default Router.withRouter(App);
