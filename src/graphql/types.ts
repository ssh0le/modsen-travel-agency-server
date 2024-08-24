export interface Country {
	name: string;
	code: string;
}

export interface CountriesResponse {
	data: {
		countries: Country[];
	};
}

export interface QueryResolvers {
	[index: string]: any;
	Query: {
		countries: (parent, args: { lang?: string }) => Promise<Country[]>;
	};
}
