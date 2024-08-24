import axios from 'axios';
import { CountriesResponse } from '../types';

const countriesQuery = (lang: string) => `
	{
		countries {
			code
			name(lang: "${lang}")
			currency
		}
	}
`;
export const fetchCountries = async (lang = 'en') => {
	try {
		const { data } = await axios.get<CountriesResponse>(
			process.env.COUNTRIES_API_URL,
			{
				params: {
					query: countriesQuery(lang),
				},
				method: 'POST',
				headers: {
					'Content-Type': `application/json`,
				},
			}
		);

		return data.data.countries;
	} catch (error) {
		return [];
	}
};
