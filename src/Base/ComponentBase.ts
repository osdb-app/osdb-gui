import React from "react";
import { RouteComponentProps } from "react-router-dom";

/** Defines the state variable used in React Router */
export class RouterState {
	/** Whether the Settings dialog is open */
	public settings: boolean;
	public constructor() {
		this.settings = false;
	}
}

export interface ComponentBaseProps {
	/** Development flag */
	isDev?: boolean;
	/** The verbosity of the warnings */
	verbose?: boolean;
}

/** The Base Class for All Components */
export abstract class ComponentBase<Props = ComponentBaseProps, State = {}> extends React.Component<Props, State> {
	public constructor(props: Props) {
		super(props);
		this.BindSubclassMembers();
	}

	private BindSubclassMembers(): void {
		Object.getOwnPropertyNames(Object.getPrototypeOf(this)).forEach((method) => {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			if ((this as any)[method].bind) {
				(this as any)[method] = (this as any)[method].bind(this);
			}
		});
	}
}

export type RoutedComponentBaseProps = ComponentBaseProps & RouteComponentProps;

export abstract class RoutedComponentBase<Props extends RoutedComponentBaseProps = RouteComponentProps, State = {}> extends ComponentBase<Props, State> {

}
