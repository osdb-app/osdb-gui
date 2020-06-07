import { CounterActionTypes, COUNT } from "./Types";

export const Increment = (): CounterActionTypes => ({
	type: COUNT.Increment,
});

export const Decrement = (): CounterActionTypes => ({
	type: COUNT.Decrement,
});
