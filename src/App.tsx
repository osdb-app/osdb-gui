import { CssBaseline, MuiThemeProvider } from "@material-ui/core";
import React from "react";
import * as Router from "react-router-dom";
import { Provider } from "react-redux";

import Shell from "./UI/Shell/Shell";
import OsdbTheme from "./Base/Theme";
import { OsdbRouteComponentProps } from "./Base/ComponentBase";
import Home from "./UI/Home/Home";
import { store } from "./App/Store";

type AppProps = OsdbRouteComponentProps;

class App extends React.Component<AppProps, {}> {
	public render(): React.ReactNode {
		return (
			<Provider store={store}>
				<MuiThemeProvider theme={OsdbTheme}>
					<CssBaseline />
					<Shell>
						<Home />
					</Shell>
				</MuiThemeProvider>
			</Provider>
		);
	}
}

export default Router.withRouter(App);
