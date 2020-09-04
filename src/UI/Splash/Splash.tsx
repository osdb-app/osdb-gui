import { ComponentBaseProps, ComponentBase } from "../../Base/ComponentBase";

export class Splash extends ComponentBase {
	public constructor(props: ComponentBaseProps) {
		super(props);
	}

	public render(): React.ReactNode {
		return "Swish";
	}
}
