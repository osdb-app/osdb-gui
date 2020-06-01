import React from "react";
import { StaticContext } from "react-router";

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
}

export interface StateDefinition {
	/** The component to be rendered for this state */
	component: React.ComponentType<any>; // eslint-disable-line @typescript-eslint/no-explicit-any
	/** Whether or not this state should have a link in the main app sidebar (Shell component) */
	isMainModule: boolean;
	/**
	 * The icon to be used in the sidebar.
	 *
	 * This is only needed if `isMainModule === true`
	 */
	icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
	/**
	 * The label to be used in the sidebar.
	 *
	 * This is only needed if `isMainModule === true`
	 */
	label?: string;
	/**
	 * The parent state of this state. It's useful for adding a back/exit button.
	 *
	 * This property is ignored if `isMainModule === true` (main modules don't have a parent state)
	 */
	parent?: RouterUrls;
}

type AppStatesType = { [url in RouterUrls]: StateDefinition }

export const AppStates: AppStatesType = {
};
