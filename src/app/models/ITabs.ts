export interface ITab {
	name: string;
	icon: string;
	path: string;
	isActive?: boolean;
}

export interface ITabs extends Array<ITab>{}