import { fabric } from "fabric";

import { ComponentBase, ComponentBaseProps } from "../../Base/ComponentBase";

export interface CanvasComponentProps extends ComponentBaseProps {
	children?: React.ComponentClass<CanvasComponentProps>;
	canvas?: fabric.Canvas;
}

export abstract class CanvasComponent<Props extends CanvasComponentProps = CanvasComponentProps> extends ComponentBase<Props> {
	public constructor(props: Props) {
		super(props);
	}

	protected abstract fabricShape(): fabric.Object;

	protected draw(): void {
		this.props.canvas && this.props.canvas.add(this.fabricShape());
	}

	protected erase(): void {
		this.props.canvas && this.props.canvas.remove(this.fabricShape());
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
