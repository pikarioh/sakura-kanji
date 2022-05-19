import React from 'react'
import './KanjiCard.css'

function KanjiCard({ kanji, kunyomi, onyomi, meaning, level, timestamp, author}) {
  return (
    <div>
        <div className="kanjicard__body">
            <div className="kanjicard__kanji">
                <h1>{kanji}</h1>
            </div>
            {kunyomi && (
                <div className="kanjicard__kunyomi">
                    <h3>【訓】</h3>
                    <p>{kunyomi}</p>
                </div>
            )}
            {onyomi && (
                <div className="kanjicard__kunyomi">
                    <h3>【音】</h3>
                    <p>{onyomi}</p>
                </div>
            )}
            <div className="kanjicard__meaning">
                <h6>{meaning}</h6>
            </div>
            <div className="kanjicard__level">
                <p>{level}</p>
            </div>
        </div>
    </div>
  )
}

export default KanjiCard