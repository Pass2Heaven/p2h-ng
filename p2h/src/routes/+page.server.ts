import { fail } from '@sveltejs/kit';

import { message, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { secp256k1 } from '@noble/curves/secp256k1';
import { xchacha20poly1305 } from '@noble/ciphers/chacha';
import { managedNonce } from '@noble/ciphers/webcrypto';

import { willFormSchema } from '$lib/models/Form';
import type { PageServerLoad } from './$types';
import { bytesToUtf8, utf8ToBytes } from '@noble/ciphers/utils';

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(zod(willFormSchema))
	};
};

export const actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, zod(willFormSchema));

		if (!form.valid) {
			return fail(400, { form });
		}

		const sharedKeyDH = secp256k1
			.getSharedSecret(form.data.senderPrivateKey, form.data.recipientPublicKey)
			.slice(1);
		const chacha = managedNonce(xchacha20poly1305)(sharedKeyDH);
		const data = utf8ToBytes(form.data.contents);
		const ciphertext = chacha.encrypt(data);
		const data_ = chacha.decrypt(ciphertext);

		console.log(bytesToUtf8(data_));

		return message(form, 'Will submitted');
	}
};
