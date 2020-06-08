import React from "react";
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
			if ((this as any)[method].bind) {
				(this as any)[method] = (this as any)[method].bind(this);
			}
		});
	}
}
