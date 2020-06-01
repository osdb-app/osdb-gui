import React from "react";
import * as Router from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

import { OsdbRoutedComponentBase, OsdbRouteComponentProps } from "./Base/ComponentBase";

interface AppProps extends OsdbRouteComponentProps {
	isDev: boolean;
	verbose: boolean;
}

class App extends OsdbRoutedComponentBase<AppProps, {}> {
	public render(): React.ReactNode {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						Edit <code>src/App.tsx</code> and save to reload.
					</p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
					</a>
					<button onClick={() => { console.log("YO"); }}>Test</button>
				</header>
			</div>
		);
	}
}

export default Router.withRouter(App);
