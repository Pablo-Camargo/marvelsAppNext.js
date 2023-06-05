import { Md5 } from 'ts-md5';
const publicKey = 'f7510a718981f05627e927bade600d32';
const privatKey = '23da8a214eb598b90f25cfd72cf651c86fd4d133';
const baseUrl = 'http://gateway.marvel.com/v1/public';

import { MarvelCharacter } from '../../interface/MarvelsCharacter';
interface ListCharactersInterface {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: MarvelCharacter[];
}
const time = Number(new Date(Date.now()));
const hash = Md5.hashStr(time + privatKey + publicKey);

export async function getHeroes<T = ListCharactersInterface>() {
  const endPoint = `${baseUrl}/characters?ts=${time}&apikey=${publicKey}&hash=${hash}&limit=20&offset=0`;
  const data = await fetch(endPoint);

  const resp = await data.json();

  return resp.data as T;
}
