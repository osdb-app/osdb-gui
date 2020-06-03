import React from "react";
import { RouteComponentProps, StaticContext } from "react-router";

/** Defines the state variable used in React Router */
export class RouterState {
	/** Whether the Settings dialog is open */
	public settings: boolean;
	public constructor() {
		this.settings = false;
	}
}

export interface ComponentBaseProps {
	isDev?: boolean;
	verbose?: boolean;
}

/** The Base Class for All Components */
export abstract class ComponentBase<PropsType = ComponentBaseProps, StateType = {}> extends React.Component<PropsType, StateType> {
	public constructor(props: PropsType) {
		super(props);
		this.BindSubclassMembers();
	}

	private BindSubclassMembers(): void {
		Object.getOwnPropertyNames(Object.getPrototypeOf(this)).forEach((method) => {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			(this as any)[method] = (this as any)[method].bind(this);
		});
	}
}

export type OsdbRouteComponentProps = RouteComponentProps<{}, StaticContext, RouterState> & ComponentBaseProps;

/** The Base Class for All Routed Components. That is, components that use `withRouter()` */
export abstract class OsdbRoutedComponentBase<PropsType extends OsdbRouteComponentProps = OsdbRouteComponentProps, StateType = {}> extends ComponentBase<PropsType, StateType> {
	public constructor(props: PropsType) {
		super(props);
	}
}
