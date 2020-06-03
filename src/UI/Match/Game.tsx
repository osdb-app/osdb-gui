import { fabric } from "fabric";
import React from "react";

import { ComponentBase } from "../../Base/ComponentBase";
import { CanvasComponentProps } from "../Canvas/CanvasComponent";
import { Rectangle } from "../Canvas/Rectangle";

interface State {
	canvas?: fabric.Canvas;
}

export default class Game extends ComponentBase<{}, State> {
	private readonly CANVAS_ID = "game";
	private readonly SIZE_MULTIPLIER = 5;

	public constructor(props: CanvasComponentProps) {
		super(props);
		this.state = {
			canvas: undefined,
		};
	}

	public componentWillMount(): void {
		// dispatch some actions if you use Redux
	}

	public componentDidMount(): void {
		this.setState({ canvas: new fabric.Canvas(this.CANVAS_ID) });
	}

	public render(): React.ReactNode {
		return (
			<div>
				<canvas id={this.CANVAS_ID} style={{ width: "840px", height: "544px" }} />
				<Rectangle canvas={this.state.canvas} fill="Green" width={105 * this.SIZE_MULTIPLIER} height={68 * this.SIZE_MULTIPLIER} />
			</div>
		);
	}
}
