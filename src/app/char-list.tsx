'use client';
import React, { useEffect, useState } from 'react';

import { GET, getChars } from './api/hello/route';
import { MarvelCharacter } from './interface/MarvelsCharacter';

export default function CharList() {
  const [data, setData] = useState<MarvelCharacter[]>([]);

  useEffect(() => {
    getChars().then((resp) => setData(resp.data.results));
  }, []);

  console.log(data);

  return (
    <div>
      {data?.map((item) => {
        return (
          <div key={item.id}>
            <ul>
              <li>
                <img
                  src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                  alt=""
                />
              </li>
              <li>{item.name}</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}
