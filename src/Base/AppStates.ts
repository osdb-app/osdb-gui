import React from "react";
import { RouteComponentProps, StaticContext } from "react-router";

export interface ComponentBaseProps {
	isDev?: boolean;
	verbose?: boolean;
}

export type OsdbRouteComponentProps = RouteComponentProps<{}, StaticContext, RouterState> & ComponentBaseProps;

export interface Hashes {
	[key: string]: string;
}

/** Defines the state variable used in React Router */
export class RouterState {
	/** Whether the Settings dialog is open */
	public settings: boolean;
	public constructor() {
		this.settings = false;
	}
}

export enum RouterUrls {
	Home = "home",
}

export interface StateDefinition {
	/** The component to be rendered for this state */
	component: React.ComponentType<ComponentBaseProps>;
	parent?: RouterUrls;
}
