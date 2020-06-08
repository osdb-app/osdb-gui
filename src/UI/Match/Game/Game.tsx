import { fabric } from "fabric";
import React from "react";
import { isNumber } from "lodash";

import { ComponentBase, ComponentBaseProps } from "../../../Base/ComponentBase";
import { Pitch } from "./Pitch";
import { Team } from "./Team";

export interface GameProps extends ComponentBaseProps {
	multiplier?: number;
}

interface State {
	canvas?: fabric.Canvas;
}

export class Game extends ComponentBase<GameProps, State> {
	private readonly CANVAS_ID = "game";
	private readonly DEFAULT_SIZE_MULTIPLIER: number;
	private readonly PITCH_WIDTH = 110;
	private readonly PITCH_HEIGHT = 70;

	private renderWidth(): number {
		return this.PITCH_WIDTH * this.DEFAULT_SIZE_MULTIPLIER;
	}

	private renderHeight(): number {
		return this.PITCH_HEIGHT * this.DEFAULT_SIZE_MULTIPLIER;
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
		canvas.renderOnAddRemove = true;
		this.updateCanvasDimensions();
		this.setState({ canvas });
	}

	public render(): React.ReactNode {
		return (
			<div>
				<canvas id={this.CANVAS_ID} />
				{this.state.canvas && <Pitch canvas={this.state.canvas} height={this.renderHeight()} width={this.renderWidth()} />}
				{this.state.canvas && <Team canvas={this.state.canvas} scale={this.DEFAULT_SIZE_MULTIPLIER} />}
			</div>
		);
	}
}
