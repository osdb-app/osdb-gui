import { CssBaseline, MuiThemeProvider } from "@material-ui/core";
import React from "react";
import { Provider } from "react-redux";
import { Switch, withRouter, Route } from "react-router-dom";
import { map } from "lodash";

import { Shell } from "./UI/Shell/Shell";
import OsdbTheme from "./Base/Theme";
import { RoutedComponentBaseProps } from "./Base/ComponentBase";
import { store } from "./App/Store";
import { RouteDefinitions } from "./Base/Router";

type AppProps = RoutedComponentBaseProps;

class PrivateApp extends React.Component<AppProps, {}> {
	public render(): React.ReactNode {
		return (
			<React.Fragment>
				<Provider store={store}>
					<MuiThemeProvider theme={OsdbTheme}>
						<CssBaseline />
						<Shell>
							<Switch>
								{map(RouteDefinitions, (component, url) => <Route exact={true} path={url} component={component} />)}
							</Switch>
						</Shell>
					</MuiThemeProvider>
				</Provider>
			</React.Fragment>
		);
	}
}

export const App = withRouter(PrivateApp);
