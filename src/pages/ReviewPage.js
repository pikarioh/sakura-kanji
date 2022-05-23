import React, { useState, useEffect } from 'react'
import './ReviewPage.css'
import KanjiCard from '../components/KanjiCard';
import Kanji from '../models/kanji';

function ReviewPage() {
  const [kanji, setKanji] = useState(null);

  const API_ENDPOINT = 'https://sakura-kanji-backend.herokuapp.com';

  const sentence = `
  一二三四五六七八九十
  `;

  useEffect(() => {
    (async () => {
      const parts = sentence.match(/\p{Script=Hani}/ug);
      console.log(parts);
      const kanjiResults = await Promise.all(parts.map(k => 
        (async () => {
          const response = await fetch(`${API_ENDPOINT}/${k}`)
          const json = await response.json();
          return Kanji.fromJishoJson(json);
        })()
      ));
      console.log(kanjiResults);
      setKanji(kanjiResults);
    })();
  }, []);

  return (
    <div className="page__review">
        <div className="page__rp-header">
            <h1>N1 漢字</h1>
            {kanji && kanji.map((k, i) => <KanjiCard key={i} kanji={k}/>)}
        </div>
    </div>
  );
}

export default ReviewPage;