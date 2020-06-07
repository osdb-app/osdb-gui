import React from "react";
import { connect, ConnectedProps } from "react-redux";
import styles from "./Counter.module.css";
import { ComponentBase } from "../../Base/ComponentBase";
import { COUNT, CounterStoreState } from "../../App/Types";
import { RootState } from "../../App/Store";

interface CounterState {
	count: number;
}

type CounterProps = CounterStoreState & ConnectedProps<typeof Connector> & CounterState;

class _Counter extends ComponentBase<CounterProps, CounterState> {
	public constructor(props: CounterProps) {
		super(props);
		this.state = {
			count: 0,
		};
	}

	public static MapState(state: RootState): CounterState {
		const newState = { count: state.counter.count };
		console.log(state);
		console.log(newState);
		return newState;
	}

	public static readonly MapDispatch = {
		countUp: () => ({ type: COUNT.Increment }),
		countDown: () => ({ type: COUNT.Decrement }),
	}

	public render(): React.ReactNode {
		return (
			<div>
				<div className={styles.row}>
					<button
						className={styles.button}
						aria-label="Increment value"
						onClick={this.props.countUp}
					>
						+
					</button>
					<span className={styles.value}>{this.props.count}</span>
					<button
						className={styles.button}
						aria-label="Decrement value"
						onClick={this.props.countDown}
					>
						-
					</button>
				</div>
				<div className={styles.row}>
				</div>
			</div>
		);
	}
}

const Connector = connect(_Counter.MapState, _Counter.MapDispatch);
export const Counter = Connector(_Counter);
