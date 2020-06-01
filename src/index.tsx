import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import "typeface-roboto";

import "./index.css";
import App from "./App";
import { RouterUrls } from "./Base/AppStates";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
	<BrowserRouter>
		{/* <Route exact={true} path="/" render={() => {
			console.warn(`Redirecting from '/' to ${RouterUrls.TLine}`);
			// Default route
			return <Redirect to={{ pathname: RouterUrls.TLine }} />;
		}} /> */}
		<App isDev={true} verbose={false} />
	</BrowserRouter>,
	document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
