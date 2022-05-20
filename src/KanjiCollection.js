import React, { useEffect } from 'react'
import './KanjiCollection.css'
import KanjiCard from './components/KanjiCard';
import { useState } from 'react';
import db from './firebase';
import Kanji from './models/kanji';

function KanjiCollection() {

    const [kanjicards, setKanjiCards] = useState([]);

    useEffect(() => {
        db.
        collection('kanjicards')
        .orderBy("timestamp", "desc")
        .onSnapshot(snapshot =>
            setKanjiCards(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
        );
    }, []);

  return (
    <div className='kanjicollection'>
      <div className="kanjicollection__container">
        <div className="kanjicollection__cards">
          {kanjicards.map(card => <KanjiCard key={card.id} kanji={Kanji.fromJishoJson(card.data)} />)}
        </div> 
      </div>      
    </div>
  )
}

export default KanjiCollection