import React, { useEffect } from 'react'
import './KanjiCollection.css'
import KanjiCard from './components/KanjiCard';
import { useState } from 'react';
import db from './firebase';

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
            {kanjicards.map((kanjicards) => (
                <KanjiCard
                    kanji={kanjicards.data.kanji} 
                    kunyomi={kanjicards.data.kunyomi} 
                    onyomi={kanjicards.data.onyomi} 
                    meaning={kanjicards.data.meaning} 
                    level={kanjicards.data.level}
                    timestamp={kanjicards.data.timestamp}
                    author={kanjicards.data.author}
                />
            ))}
        </div> 
        </div>      
    </div>
  )
}

export default KanjiCollection