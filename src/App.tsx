import { CssBaseline, MuiThemeProvider } from "@material-ui/core";
import React from "react";
import { Provider } from "react-redux";

import { Shell } from "./UI/Shell/Shell";
import OsdbTheme from "./Base/Theme";
import { ComponentBaseProps } from "./Base/ComponentBase";
import { Home } from "./UI/Home/Home";
import { store } from "./App/Store";

type AppProps = ComponentBaseProps;

export class App extends React.Component<AppProps, {}> {
	public render(): React.ReactNode {
		return (
			<React.Fragment>
				<Provider store={store}>
					<MuiThemeProvider theme={OsdbTheme}>
						<CssBaseline />
						<Shell />
						<Home />
					</MuiThemeProvider>
				</Provider>
			</React.Fragment>
		);
	}
}
