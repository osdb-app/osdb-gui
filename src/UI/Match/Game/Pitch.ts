import Match from "../../../Model/Match";
import { ComponentBase } from "../../../Base/ComponentBase";

export interface PitchProps {
	match?: Match;
}

export class Pitch extends ComponentBase<PitchProps> {
	public constructor(props: PitchProps) {
		super(props);
	}

	public render(): React.ReactNode {
		return "Hello";
	}
}
