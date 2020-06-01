import React from "react";
import { StaticContext } from "react-router";
import { RouteComponentProps } from "react-router-dom";

import { StateDefinition, AppStates, RouterUrls, RouterState } from "./AppStates";

/** The Base Class for All Components */
export abstract class ComponentBase<PropsType = {}, StateType = {}> extends React.Component<PropsType, StateType> {
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

export type OsdbRouteComponentProps = RouteComponentProps<{}, StaticContext, RouterState>;

/** The Base Class for All Routed Components. That is, components that use `withRouter()` */
export abstract class OsdbRoutedComponentBase<PropsType extends OsdbRouteComponentProps = OsdbRouteComponentProps, StateType = {}> extends ComponentBase<PropsType, StateType> {
	protected stateDefinition: StateDefinition;
	public constructor(props: PropsType) {
		super(props);
		this.stateDefinition = AppStates[this.props.match.url as unknown as RouterUrls];
	}
}
