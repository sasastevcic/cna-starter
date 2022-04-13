import { ZodString } from 'zod';

export type LoginSchema = {
	email: ZodString;
	password: ZodString;
};
