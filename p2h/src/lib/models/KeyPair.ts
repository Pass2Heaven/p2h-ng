import { ed25519 } from '@noble/curves/ed25519';
import { bytesToHex } from '@noble/curves/abstract/utils';

export default class KeyPair {
	_privateKey: Uint8Array;
	_publicKey: Uint8Array;

	constructor() {
		this._privateKey = ed25519.utils.randomPrivateKey();
		this._publicKey = ed25519.getPublicKey(this._privateKey);
	}

	privateKey() {
		return this._privateKey;
	}

	privateKeyHex() {
		return bytesToHex(this._privateKey);
	}

	publicKey() {
		return this._publicKey;
	}

	publicKeyHex() {
		return bytesToHex(this._publicKey);
	}

	toJson() {
		return JSON.stringify({
			privateKey: this.privateKeyHex(),
			publicKey: this.publicKeyHex()
		});
	}
}
