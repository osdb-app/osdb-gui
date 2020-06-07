import { fabric } from "fabric";
import React from "react";
import { isNumber } from "lodash";

import { ComponentBase, ComponentBaseProps } from "../../../Base/ComponentBase";
import { Pitch } from "./Pitch";

export interface GameProps extends ComponentBaseProps {
	height: number;
	width: number;
	multiplier?: number;
}

interface State {
	canvas?: fabric.Canvas;
}

export class Game extends ComponentBase<GameProps, State> {
	private readonly CANVAS_ID = "game";
	private readonly DEFAULT_SIZE_MULTIPLIER: number;

	private renderWidth(): number {
		return this.props.width * this.DEFAULT_SIZE_MULTIPLIER;
	}

	private renderHeight(): number {
		return this.props.height * this.DEFAULT_SIZE_MULTIPLIER;
	}

	public constructor(props: GameProps) {
		super(props);
		this.DEFAULT_SIZE_MULTIPLIER =  isNumber(props.multiplier) ? props.multiplier : 5;
		this.state = {
			canvas: undefined,
		};
	}

	private updateCanvasDimensions(): void {
		if (this.state.canvas) {
			this.state.canvas.setHeight(this.renderHeight());
			this.state.canvas.setWidth(this.renderWidth());
		}
	}

	public componentDidUpdate(): void {
		this.updateCanvasDimensions();
	}

	public componentDidMount(): void {
		const canvas = new fabric.Canvas(this.CANVAS_ID);
		canvas.selection = false;
		this.updateCanvasDimensions();
		this.setState({ canvas });
	}

	public render(): React.ReactNode {
		return (
			<div>
				<canvas id={this.CANVAS_ID} />
				<Pitch />
			</div>
		);
	}
}
