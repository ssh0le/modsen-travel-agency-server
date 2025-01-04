import { fetchCountries } from '../services/fetchCountries.js';
import { QueryResolvers } from '../types.js';
import { exchangeRates } from './exchangeRates.js';
import { allRooms } from './rooms.js';
import { allTestimonies } from './testimonies.js';

export const resolvers: QueryResolvers = {
	Query: {
		countries: async (parent, args) => {
			return await fetchCountries(args.lang);
		},
		rooms: (parent, { filter }) => {
			console.log('rooms');
			const filteredByTypeRooms = filter.type
				? allRooms.filter((room) => room.type === filter.type)
				: allRooms;

			const filteredByAmountRooms =
				filter.amount && filter.amount < filteredByTypeRooms.length
					? filteredByTypeRooms.slice(0, filter.amount)
					: filteredByTypeRooms;

			return filteredByAmountRooms;
		},
		room: (parent, { filter: { id } }) => {
			console.log('room');
			const filteredByIdRooms = allRooms.find((room) => room.id === id);

			if (!filteredByIdRooms) {
				return null;
			}

			const filteredTestimonials = allTestimonies.filter(
				(testimony) => testimony.roomId === id
			);

			const priceInUsed = filteredByIdRooms.priceInUsd;

			const detailedRoom = {
				...filteredByIdRooms,
				price: {
					usd: priceInUsed,
					ngn: priceInUsed * exchangeRates.usdToNgn,
				},
				reviewsCount: filteredTestimonials.length,
				rating: filteredTestimonials.length
					? filteredTestimonials.reduce(
							(acc, testimony) => acc + testimony.rating,
							0
						) / filteredTestimonials.length
					: null,
			};

			console.log(detailedRoom.price, id);

			return detailedRoom;
		},
		testimonies: () => {
			console.log('testimonies');
			return allTestimonies;
		},
	},
};
