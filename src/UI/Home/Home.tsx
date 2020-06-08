import React from "react";

import { Game } from "../Match/Game/Game";
import { Stats } from "../Match/Stats";
import { ComponentBase, ComponentBaseProps } from "../../Base/ComponentBase";

export class Home extends ComponentBase<ComponentBaseProps> {
	public render(): React.ReactNode {
		return (
			<React.Fragment>
				<Game multiplier={10} />
				<Stats />
			</React.Fragment>
		);
	}
}
