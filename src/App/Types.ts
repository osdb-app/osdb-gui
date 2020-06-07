export interface CounterStoreState {
	count: number;
}

export enum COUNT {
	Increment = 1,
	Decrement = 2,
}

interface CountUpAction {
	type: COUNT.Increment;
}

interface CountDownAction {
	type: COUNT.Decrement;
}

export type CounterActionTypes = CountUpAction | CountDownAction;
