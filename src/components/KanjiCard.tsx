import React from 'react'
import './KanjiCard.css';
import Kanji from '../models/kanji';

class KanjiProps {
    kanji: Kanji;
}

function KanjiCard(props: KanjiProps) {
  const kanji = props.kanji;
  return (
    <div>
        <div className="kanjicard__body">
            <div className="kanjicard__kanji">
                <h1>{kanji.kanji}</h1>
            </div>
            {kanji.kunyomi.length != 0 && (
                <div className="kanjicard__kunyomi">
                    <h3>【訓】</h3>
                    <p>{kanji.kunyomi.join('、　')}</p>
                </div>
            )}
            {kanji.onyomi.length != 0 && (
                <div className="kanjicard__kunyomi">
                    <h3>【音】</h3>
                    <p>{kanji.onyomi.join('、　')}</p>
                </div>
            )}
            <div className="kanjicard__meaning">
                <h6>{kanji.meaning.join(', ')}</h6>
            </div>
            <div className="kanjicard__level">
                <p>N{kanji.level}{[null, undefined, ''].includes(kanji.grade) ? '' : `, ${kanji.grade}`}</p>
            </div>
        </div>
    </div>
  )
}

export default KanjiCard