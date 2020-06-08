import React from "react";

import { Counter } from "../../Features/counter/Counter";
import { ComponentBase } from "../../Base/ComponentBase";

export class Stats extends ComponentBase {
	public render(): React.ReactNode {
		return (
			<Counter />
		);
	}
}
