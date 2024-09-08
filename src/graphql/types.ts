export interface Country {
	name: string;
	code: string;
}

export interface CountriesResponse {
	data: {
		countries: Country[];
	};
}

export enum RoomType {
	Luxury = 'luxury',
}

export interface Room {
	id: number;
	roomsAvailable: number;
	benefits: string[];
	imageSrcId?: number;
	type: RoomType;
}

interface RoomsFilter {
	filter: {
		type: RoomType;
		amount: number;
	};
}

export interface QueryResolvers {
	[index: string]: any;
	Query: {
		countries: (parent, args: { lang: string }) => Promise<Country[]>;
		rooms: (parent, args: RoomsFilter) => Room[];
	};
}
