const DEFAULT_LANG = 'en';

export const typeDefs = `#graphql
    type Country {
        name: String
        code: ID!
        currency: String
    }

    type Rooms {
        id: ID!
        roomsAvailable: Int
        benefits: [String!]
        imageSrcId: Int
        type: String
    }

    input RoomsFilters {
        type: String,
        amount: Int
    }

    type Query {
        countries(lang: String = ${DEFAULT_LANG}): [Country!]
        rooms(filter: RoomsFilters): [Rooms!]
    }
`;
