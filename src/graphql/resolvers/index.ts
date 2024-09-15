import { fetchCountries } from '../services/fetchCountries.js';
import { QueryResolvers } from '../types.js';
import { allRooms } from './rooms.js';
import { allTestimonies } from './testimonies.js';

export const resolvers: QueryResolvers = {
	Query: {
		countries: async (parent, args) => {
			return await fetchCountries(args.lang);
		},
		rooms: (parent, { filter }) => {
			const selectedRooms =
				filter.amount && filter.amount < allRooms.length
					? allRooms.slice(0, filter.amount)
					: allRooms;

			if (filter.type) {
				return selectedRooms.filter((room) => room.type === filter.type);
			}

			return allRooms;
		},
		testimonies: () => {
			return allTestimonies;
		},
	},
};
