import { fabric } from "fabric";

import { ComponentBase, ComponentBaseProps } from "../../Base/ComponentBase";

export interface CanvasComponentProps extends ComponentBaseProps {
	canvas: fabric.Canvas;
	children?: undefined;
}

export abstract class CanvasComponent<Props extends CanvasComponentProps = CanvasComponentProps> extends ComponentBase<Props> {
	public constructor(props: Props) {
		super(props);
	}

	protected abstract fabricShape(): fabric.Object;

	protected draw(): void {
		if (this.props.canvas) {
			const shape = this.fabricShape();
			this.props.canvas.add(shape);
		}
	}

	protected erase(): void {
		if (this.props.canvas) {
			this.props.canvas.remove(this.fabricShape());
		}
	}

	public componentDidUpdate(): void {
		this.draw();
	}

	public componentDidMount(): void {
		this.draw();
	}

	public componentWillUnmount(): void {
		this.erase();
	}

	public render(): null {
		return null;
	}
}
