import React from "react";

import { ComponentBase } from "../../../Base/ComponentBase";
import { CanvasComponentProps } from "../../Canvas/CanvasComponent";
import { TeamDescriptor } from "../../../Model/Team";
import { Player } from "./Player";

export interface TeamProps extends CanvasComponentProps {
	/** How many pixels per meter. */
	scale: number;
	team?: TeamDescriptor;
}

export class Team extends ComponentBase<TeamProps> {
	public constructor(props: TeamProps) {
		super(props);
	}

	public render(): React.ReactNode {
		return this.props.canvas ?
			<Player canvas={this.props.canvas} name="Reza" number={10} stamina={100} scale={this.props.scale} />
			:
			null;
	}
}
