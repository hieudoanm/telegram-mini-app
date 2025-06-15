import { privateProcedure } from '@telegram/server/trpc';

export const app = {
	authenticated: privateProcedure.query((options) => {
		const { ctx } = options;
		const { user } = ctx;
		if (!user) return { isAuthenticated: false };
		return { isAuthenticated: true };
	}),
};
