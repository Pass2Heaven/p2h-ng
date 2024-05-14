import { v4 as uuidv4 } from 'uuid';

function constructAuthString() {
	return `Basic ${Buffer.from(
		`${process.env.APILLON_API_KEY}:${process.env.APILLON_API_SECRET_KEY}`
	).toString('base64')}`;
}

export async function listBuckets() {
	const response = await fetch(`${process.env.APILLON_BASE_URL}/storage/buckets`, {
		headers: {
			Authorization: constructAuthString()
		}
	});
	return await response.json();
}

export async function upload() {
	const { uploadUrl, sessionUuid } = await getUploadParams();

	await fetch(uploadUrl, {
		method: 'PUT',
		body: constructFormData('testData')
	});

	return await endUploadSession(sessionUuid);
}

async function getUploadParams() {
	const urlResponse = await fetch(
		`${process.env.APILLON_BASE_URL}/storage/buckets/${process.env.APILLON_BUCKET_UUID}/upload`,
		{
			method: 'POST',
			headers: {
				Authorization: constructAuthString(),
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				files: {
					fileName: `${uuidv4()}`,
					contentType: 'text/plain'
				}
			})
		}
	);
	const urlResponseJson = await urlResponse.json();
	const uploadUrl = urlResponseJson.data.files[0].url;
	const sessionUuid = urlResponseJson.data.sessionUuid;
	return { uploadUrl, sessionUuid };
}

async function endUploadSession(sessionUuid: string) {
	const response = await fetch(
		`${process.env.APILLON_BASE_URL}/storage/buckets/${process.env.APILLON_BUCKET_UUID}/upload/${sessionUuid}/end`,
		{
			method: 'POST',
			headers: {
				Authorization: constructAuthString(),
				'Content-Type': 'application/json'
			}
		}
	);
	return await response.json();
}

function constructFormData(blobContents: string) {
	const blob = new Blob([blobContents], { type: 'text/plain' });
	const bodyFormData = new FormData();
	bodyFormData.append('file', blob);

	return bodyFormData;
}
