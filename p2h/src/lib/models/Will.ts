export default class Will {
	stealthAddress: {
		oneTimeValue: string;
		R: string;
	};
	senderPublicKey: string;
	containerHash: string;
	hmac: string;
	nonce: number;

	constructor(willInfo: {
		stealthAddress: {
			oneTimeValue: string;
			R: string;
		};
		senderPublicKey: string;
		containerHash: string;
		hmac: string;
		nonce: number;
	}) {
		this.stealthAddress = willInfo.stealthAddress;
		this.senderPublicKey = willInfo.senderPublicKey;
		this.containerHash = willInfo.containerHash;
		this.hmac = willInfo.hmac;
		this.nonce = willInfo.nonce;
	}
}
