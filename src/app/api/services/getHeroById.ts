import { Md5 } from 'ts-md5';
const publicKey = 'f7510a718981f05627e927bade600d32';
const privatKey = '23da8a214eb598b90f25cfd72cf651c86fd4d133';
const baseUrl = 'http://gateway.marvel.com/v1/public';

const time = Number(new Date(Date.now()));
const hash = Md5.hashStr(time + privatKey + publicKey);

import { InerChar } from '../../interface/InerChar';
interface ListCharactersInterface {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: InerChar[];
}
export async function getHeroById<T = ListCharactersInterface>(heroId: string) {
  const id = '1017297';
  const endPoint = `${baseUrl}/characters/${heroId}?ts=${time}&apikey=${publicKey}&hash=${hash}`;
  const data = await fetch(endPoint);
  const resp = await data.json();
  return resp.data as T;
}
