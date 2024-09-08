import { Room, RoomType } from '../types.js';

export const allRooms: Array<Room> = [
	{
		id: 1,
		imageSrcId: 0,
		benefits: ['Television set', 'Extra sheets', 'Breakfast'],
		roomsAvailable: 2,
		type: RoomType.Luxury,
	},
	{
		id: 2,
		imageSrcId: 1,
		benefits: ['Television set', 'Extra sheets', 'Breakfast', 'Fireplace'],
		roomsAvailable: 4,
		type: RoomType.Luxury,
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
	},
];
