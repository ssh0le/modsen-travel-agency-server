import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { config } from './config.js';
import { resolvers } from './resolvers/index.js';
import { typeDefs } from './typeDefs/index.js';

const { port } = config;

const server = new ApolloServer({
	typeDefs,
	resolvers,
});

export const startServer = async () => {
	const { url } = await startStandaloneServer(server, {
		listen: {
			port: port,
		},
	});

	console.log(`Server launched at ${port} port. URL: ${url}`);
};
