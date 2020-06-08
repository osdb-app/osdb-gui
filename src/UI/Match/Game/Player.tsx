import React from "react";

import { ComponentBase } from "../../../Base/ComponentBase";
import { CanvasComponentProps } from "../../Canvas/CanvasComponent";
import { Circle } from "../../Canvas/Circle";

export interface PlayerProps extends CanvasComponentProps {
	/** How many pixels per meter. */
	scale: number;
	name: string;
	number: number;
	stamina: number;
}

export class Player extends ComponentBase<PlayerProps> {
	/** In meters. */
	private readonly PLAYER_DIAMETER = 1;
	private get renderDiameter(): number {
		return this.PLAYER_DIAMETER * this.props.scale;
	}
	public constructor(props: PlayerProps) {
		super(props);
	}

	public render(): React.ReactNode {
		return this.props.canvas ?
			<Circle canvas={this.props.canvas} fill="Red" backgroundColor="Green" left={100} top={100} width={this.renderDiameter} height={this.renderDiameter} />
			:
			null;
	}
}
