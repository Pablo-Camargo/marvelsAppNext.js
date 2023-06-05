import Link from 'next/link';

import { getHeroes } from './api/services/getHeroes';
import { InerChar } from './interface/InerChar';
import { MarvelCharacter } from './interface/MarvelsCharacter';

export default async function Home() {
  const data = await getHeroes<{ results: MarvelCharacter[] }>();

  const resp = data;

  return (
    <div>
      <ul>
        {resp?.results.map((item) => {
          return (
            <Link key={item.id} href={`./api/hero/${item.id}`}>
              <li>
                <img
                  src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                />
                <h6>{item.name}</h6>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
