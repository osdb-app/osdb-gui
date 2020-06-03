import { fabric } from "fabric";

import { CanvasComponent, CanvasComponentProps } from "./CanvasComponent";

export type RectangleProps = CanvasComponentProps & fabric.IRectOptions;

export class Rectangle extends CanvasComponent<RectangleProps> {
	private _shape!: fabric.Rect;

	protected fabricShape(): fabric.Object {
		if (!this._shape) {
			this._shape = new fabric.Rect(this.props);
		}
		return this._shape;
	}

	public constructor(props: RectangleProps) {
		super(props);
	}
}
