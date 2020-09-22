import React from "react";
import { Redirect } from "react-router-dom";
import { ComponentBaseProps, ComponentBase } from "../../Base/ComponentBase";
import { RouteUrls } from "../../Base/Router";

interface SplashState {
	doneSplashing: boolean;
}

export class Splash extends ComponentBase<ComponentBaseProps, SplashState> {
	private readonly TIME_OUT_MS = 1500;
	public constructor(props: ComponentBaseProps) {
		super(props);
		this.state = {
			doneSplashing: false,
		};
	}

	public componentDidMount(): void {
		setTimeout(() => {
			this.setState({ doneSplashing: true });
		}, this.TIME_OUT_MS);
	}

	public render(): React.ReactNode {
		return this.state.doneSplashing ?
			<Redirect to={RouteUrls.Home} />
			:
			"Swish";
	}
}
