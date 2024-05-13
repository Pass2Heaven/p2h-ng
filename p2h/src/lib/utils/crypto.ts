import type KeyPair from '$lib/models/KeyPair';

function exportKeyPairToFile(kp: KeyPair) {
	const blob = new Blob([kp.toJson()], { type: 'application/json' });

	const url = URL.createObjectURL(blob);
	const link = document.createElement('a');

	link.href = url;
	link.download = 'p2h_keys.json';
	link.click();
	URL.revokeObjectURL(url);
}

export { exportKeyPairToFile };
