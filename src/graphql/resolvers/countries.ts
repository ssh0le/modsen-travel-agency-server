import { fetchCountries } from '../services/fetchCountries.js';
import { QueryResolvers } from '../types.js';

export const resolvers: QueryResolvers = {
	Query: {
		countries: async (parent, args) => {
			return await fetchCountries(args.lang);
		},
	},
};
