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
        name: String
        description: String
        priceInUsd: Int
        hasWiFi: Boolean
	    hasShower: Boolean
	    hasTv: Boolean
    }

    type RoomPrice {
        usd: Float
        ngn: Float
    }

    type DetailedRoom {
        id: ID!
        roomsAvailable: Int
        benefits: [String!]
        imageSrcId: Int
        description: String
        type: String
        name: String
        price: RoomPrice
        reviewsCount: Int,
        rating: Float
    }

    input RoomsFilters {
        type: String,
        amount: Int
    }

    input DetailedRoomFilters {
        id: Int
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
        room(filter: DetailedRoomFilters): DetailedRoom
        testimonies: [Testimony!]
    }
`;
