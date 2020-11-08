import * as R from 'ramda';

import { client } from './skynet-service';
import { keyPairFromSeed } from 'skynet-js';

const { publicKey, privateKey } = keyPairFromSeed(
  'this seed is just a testing seed for testing',
);
const appPrefix = 'VideoWhale';
const userId = 'TODO: unique ID obtained from login 2';

const generateUniqueKey = (key: string) => appPrefix + userId + key;

export const getAtPath = async (key: string, path: string[] = []) => {
  const data = (await client.db.getJSON(publicKey, generateUniqueKey(key)))
    ?.data;
  return R.path(path, data);
};

export const setAtPath = async (
  key: string,
  path: string[],
  item: any,
  record?: any,
) => {
  if (!record) {
    record = (await client.db.getJSON(publicKey, generateUniqueKey(key)))?.data;
    if (!record) record = {};
  }

  return client.db.setJSON(
    privateKey,
    generateUniqueKey(key),
    R.assocPath(path, item, record),
  );
  //  const resp = await client.db.getJSON(publicKey, generateUniqueKey(key));
  // console.log(resp);
};

export const pushItemToField = async (
  key: string,
  path: string[],
  itemToPush: any,
) => {
  let item = (await getAtPath(key, path)) as any[];
  if (item && !(item instanceof Array))
    throw new Error('item exists and is not an array');
  if (!item) item = [];
  item.push(itemToPush);
  return setAtPath(key, path, item);
};
