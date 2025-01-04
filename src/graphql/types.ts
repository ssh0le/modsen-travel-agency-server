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
	Single = 'single',
}

export interface RoomBenefit {
	id: number;
	name: string;
}

export interface Room {
	id: number;
	roomsAvailable: number;
	benefits: string[];
	imageSrcId?: number;
	type: RoomType;
	priceInUsd: number;
	name: string;
	description: string;
}

export interface DetailedRoom extends Room {
	price: {
		usd: number;
		ngn: number;
	};
	reviewsCount: number;
	rating: number | null;
}

interface RoomsFilter {
	filter: {
		type: RoomType;
		amount: number;
	};
}

interface DetailedRoomFilter {
	filter: {
		id: number;
	};
}

export interface Testimony {
	id: number;
	author: string;
	authorImageId: number;
	testimony: string;
	date: string;
	rating: number;
	roomId: number;
}

export interface QueryResolvers {
	[index: string]: any;
	Query: {
		countries: (parent, args: { lang: string }) => Promise<Country[]>;
		rooms: (parent, args: RoomsFilter) => Room[];
		room: (parent, args: DetailedRoomFilter) => DetailedRoom | null;
		testimonies: () => Testimony[];
	};
}
