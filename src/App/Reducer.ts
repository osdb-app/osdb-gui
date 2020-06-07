import { CounterStoreState, CounterActionTypes, COUNT } from "./Types";

const initialState: CounterStoreState = {
	count: 0,
};

export function CounterReducer(state = initialState, action: CounterActionTypes): CounterStoreState {
	switch (action.type) {
		case COUNT.Increment:
			return { count: state.count + 1 };
		case COUNT.Decrement:
			return { count: state.count - 1 };
		default:
			return state;
	}
}
