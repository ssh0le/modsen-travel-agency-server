const DEFAULT_LANG = 'en';

export const typeDefs = `#graphql
    type Country {
        name: String
        code: ID!
        currency: String
    }

    type Room {
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

    type Testimony {
        id: ID!
        author: String
        authorImageId: Int
        testimony: String
        date: String
        rating: Float
    }

    type Query {
        countries(lang: String = ${DEFAULT_LANG}): [Country!]
        rooms(filter: RoomsFilters): [Room!]
        testimonies: [Testimony!]
    }
`;
