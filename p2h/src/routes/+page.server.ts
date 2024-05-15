import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

import type { PageServerLoad } from './$types';

import { willFormSchema } from '$lib/models/Form';

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(zod(willFormSchema))
	};
};
