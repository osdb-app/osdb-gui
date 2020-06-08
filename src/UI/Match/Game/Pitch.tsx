import { fabric } from "fabric";
import React from "react";

import { ComponentBase, ComponentBaseProps } from "../../../Base/ComponentBase";
import { Rectangle } from "../../Canvas/Rectangle";

export interface PitchProps extends ComponentBaseProps {
	width: number;
	height: number;
	canvas?: fabric.Canvas;
}

export class Pitch extends ComponentBase<PitchProps> {
	public constructor(props: PitchProps) {
		super(props);
	}

	public render(): React.ReactNode {
		if (!this.props.canvas) return null;
		return <Rectangle canvas={this.props.canvas} fill="Green" width={this.props.width} height={this.props.height} />;
	}
}
