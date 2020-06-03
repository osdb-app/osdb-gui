import { CssBaseline, MuiThemeProvider } from "@material-ui/core";
import React from "react";
import * as Router from "react-router-dom";

import { Counter } from "./Features/counter/Counter";
import Shell from "./UI/Shell/Shell";
import OsdbTheme from "./Base/Theme";
import { OsdbRouteComponentProps } from "./Base/ComponentBase";
import Home from "./UI/Home/Home";

type AppProps = OsdbRouteComponentProps;

class App extends React.Component<AppProps, {}> {
	public render(): React.ReactNode {
		return (
			<MuiThemeProvider theme={OsdbTheme}>
				<CssBaseline />
				<Shell>
					<Home />
				</Shell>
			</MuiThemeProvider>
		);
	}
}

export default Router.withRouter(App);
