import { Room, RoomType } from '../types.js';

export const allRooms: Array<Room> = [
	{
		id: 1,
		imageSrcId: 0,
		benefits: ['Television set', 'Extra sheets', 'Breakfast'],
		roomsAvailable: 2,
		type: RoomType.Luxury,
		name: 'Luxury Room',
		priceInUsd: 140,
		description: `This cozy furnished room with fresh renovation consists of a separate entrance hall with mirror, a bedroom with a large double bed and closet, a kitchen combined with the living room. There is also a shower cubicle and an area with sink and toilet cabinet.
		The windows are large so there is plenty of light in the apartment, but there are also curtains to block out unwanted light if needed.
		The area is very calm and quiet, in walking distance is everything you need: supermarket, bus stop, park, cinema, school, city hall.`,
	},
	{
		id: 2,
		imageSrcId: 1,
		benefits: ['Television set', 'Extra sheets', 'Breakfast', 'Fireplace'],
		roomsAvailable: 4,
		type: RoomType.Luxury,
		name: 'Luxury Room',
		priceInUsd: 160,
		description: `This cozy furnished room with fresh renovation consists of a separate entrance hall with mirror, a bedroom with a large double bed and closet, a kitchen combined with the living room. There is also a shower cubicle and an area with sink and toilet cabinet.
		The windows are large so there is plenty of light in the apartment, but there are also curtains to block out unwanted light if needed.
		The area is very calm and quiet, in walking distance is everything you need: supermarket, bus stop, park, cinema, school, city hall.`,
	},
	{
		id: 3,
		imageSrcId: 2,
		benefits: [
			'Television set',
			'Extra sheets',
			'Breakfast',
			'Fireplace',
			'Console',
			'Bed rest',
		],
		roomsAvailable: 8,
		type: RoomType.Luxury,
		name: 'Luxury Room',
		priceInUsd: 190,
		description: `This cozy furnished room with fresh renovation consists of a separate entrance hall with mirror, a bedroom with a large double bed and closet, a kitchen combined with the living room. There is also a shower cubicle and an area with sink and toilet cabinet.
		The windows are large so there is plenty of light in the apartment, but there are also curtains to block out unwanted light if needed.
		The area is very calm and quiet, in walking distance is everything you need: supermarket, bus stop, park, cinema, school, city hall.`,
	},
	{
		id: 4,
		imageSrcId: 2,
		benefits: ['Television set', 'Wi-fi'],
		roomsAvailable: 4,
		type: RoomType.Single,
		name: 'The Royal Room',
		priceInUsd: 100,
		description: `This cozy furnished room with fresh renovation consists of a separate entrance hall with mirror, a bedroom with a large double bed and closet, a kitchen combined with the living room. There is also a shower cubicle and an area with sink and toilet cabinet.
		The windows are large so there is plenty of light in the apartment, but there are also curtains to block out unwanted light if needed.
		The area is very calm and quiet, in walking distance is everything you need: supermarket, bus stop, park, cinema, school, city hall.`,
	},
	{
		id: 5,
		imageSrcId: 2,
		benefits: ['Television set', 'Wi-fi', 'Shower'],
		roomsAvailable: 5,
		type: RoomType.Single,
		name: 'The Royal Room',
		priceInUsd: 100,
		description: `This cozy furnished room with fresh renovation consists of a separate entrance hall with mirror, a bedroom with a large double bed and closet, a kitchen combined with the living room. There is also a shower cubicle and an area with sink and toilet cabinet.
		The windows are large so there is plenty of light in the apartment, but there are also curtains to block out unwanted light if needed.
		The area is very calm and quiet, in walking distance is everything you need: supermarket, bus stop, park, cinema, school, city hall.`,
	},
	{
		id: 6,
		imageSrcId: 2,
		benefits: ['Television set', 'Wi-fi', 'Shower'],
		roomsAvailable: 0,
		type: RoomType.Single,
		name: 'The Royal Room',
		priceInUsd: 100,
		description: `This cozy furnished room with fresh renovation consists of a separate entrance hall with mirror, a bedroom with a large double bed and closet, a kitchen combined with the living room. There is also a shower cubicle and an area with sink and toilet cabinet.
		The windows are large so there is plenty of light in the apartment, but there are also curtains to block out unwanted light if needed.
		The area is very calm and quiet, in walking distance is everything you need: supermarket, bus stop, park, cinema, school, city hall.`,
	},
	{
		id: 7,
		imageSrcId: 2,
		benefits: ['Television set', 'Wi-fi', 'Shower'],
		roomsAvailable: 0,
		type: RoomType.Single,
		name: 'The Royal Room',
		priceInUsd: 100,
		description: `This cozy furnished room with fresh renovation consists of a separate entrance hall with mirror, a bedroom with a large double bed and closet, a kitchen combined with the living room. There is also a shower cubicle and an area with sink and toilet cabinet.
		The windows are large so there is plenty of light in the apartment, but there are also curtains to block out unwanted light if needed.
		The area is very calm and quiet, in walking distance is everything you need: supermarket, bus stop, park, cinema, school, city hall.`,
	},
];
