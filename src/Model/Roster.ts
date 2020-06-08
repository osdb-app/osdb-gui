import { Player } from "../UI/Match/Game/Player";

export class Roster {
	public constructor(public gk: Player, public defense: Player[], public midfield: Player[], public offense: Player[]) {
	}
}
