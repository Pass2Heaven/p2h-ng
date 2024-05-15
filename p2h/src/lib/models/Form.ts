import { z } from 'zod';

export const willFormSchema = z.object({
	contents: z.string().min(1).max(5000),
	senderPrivateKey: z.string().min(62).max(65),
	recipientPublicKey: z.string().min(62).max(65)
});

export type WillFormSchema = typeof willFormSchema;
