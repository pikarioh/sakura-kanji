import React, { useState, useEffect } from 'react'
import './JLPTDisplay.css'
import KanjiCard from '../components/KanjiCard';
import Kanji from '../models/kanji';
import { CircularProgress } from '@mui/material';

function JLPTDisplay() {
    const [kanji, setKanji] = useState(null);

    const API_ENDPOINT = 'https://sakura-kanji-backend.herokuapp.com';
  
    const sentence = `
    一二三四五六七八九十口日白百千万人分土時週月午年今木田力前後先来男女子お父火水金本川山雨花耳手足目北南東西上下中右左私半母毎何友気生魚大天空電車言語名店馬駅道社国外学校入見門間聞書読舌話買行出休食飲立会多小少古辛新安高長円
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
      <div className="kanjicollection">
          <div className="kanjicollection__container">
              <div className="kanjicollection__cards">
                {kanji && kanji.map((k, i) => <KanjiCard key={i} kanji={k}/>)}
              </div>
          </div>
      </div>
    );
}

export default JLPTDisplay