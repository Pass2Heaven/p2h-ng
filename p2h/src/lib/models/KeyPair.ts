import { secp256k1 } from '@noble/curves/secp256k1';
import { bytesToHex, hexToBytes } from '@noble/curves/abstract/utils';

export default class KeyPair {
	_privateKey: Uint8Array;
	_publicKey: Uint8Array;

	constructor(privateKeyHex?: string) {
		this._privateKey = !privateKeyHex
			? secp256k1.utils.randomPrivateKey()
			: hexToBytes(privateKeyHex);
		this._publicKey = secp256k1.getPublicKey(this._privateKey);
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
