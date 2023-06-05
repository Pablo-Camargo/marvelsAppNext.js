import { getHeroById } from 'app/api/services/getHeroById';

import { InerChar } from '../../../interface/InerChar';

export default async function HeroDetailsPage({
  params
}: {
  params: { heroId: string };
}) {
  const hero = await getHeroById<{ results: InerChar[] }>(params.heroId);
  return (
    <>
      <h2>Hero page</h2>
      {hero.results.map((item) => {
        return (
          <li key={item.id}>
            <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} />
            <h6>{item.name}</h6>
          </li>
        );
      })}
    </>
  );
}
