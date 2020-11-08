import { SkynetClient } from 'skynet-js';

export const client = new SkynetClient('https://siasky.net');

export const uploadFile = async (file: File) => {
  const resp = await client.uploadFile(file);
  console.log(resp);
  return resp;
};
