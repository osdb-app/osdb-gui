export interface PlayerOptions {
	id: number;
	name: string;
}

export class PlayerDescriptor {
	constructor(private options: PlayerOptions) {
	}
}
