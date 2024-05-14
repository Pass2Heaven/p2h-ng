import { json } from '@sveltejs/kit';

import { upload } from '$lib/apillon';

export function POST() {
	return json(upload());
}
