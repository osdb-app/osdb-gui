import { fabric } from "fabric";

import { CanvasComponent, CanvasComponentProps } from "./CanvasComponent";

export type CircleProps = CanvasComponentProps & fabric.IRectOptions;

export class Circle extends CanvasComponent<CircleProps> {
	private _shape!: fabric.Rect;

	protected fabricShape(): fabric.Object {
		if (!this._shape) {
			console.log("Circle");
			this._shape = new fabric.Rect(this.props);
			this._shape.selectable = false;
			this._shape.hoverCursor = this.props.hoverCursor || "default";
		}
		return this._shape;
	}

	public constructor(props: CircleProps) {
		super(props);
	}
}
