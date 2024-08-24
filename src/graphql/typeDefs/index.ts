const DEFAULT_LANG = "en";

export const typeDefs = `#graphql
    type Country {
        name: String
        code: ID!
        currency: String
    }

    type Query {
        countries(lang: String = ${DEFAULT_LANG}): [Country!]
    }
`;
