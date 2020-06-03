import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "typeface-roboto";

import "./index.css";
import App from "./App";
// import * as serviceWorker from "./serviceWorker";
import { store } from "./App/Store";

ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<App isDev={true} verbose={false} />
		</Provider>
	</BrowserRouter>,
	document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
