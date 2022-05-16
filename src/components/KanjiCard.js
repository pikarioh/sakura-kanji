import React from 'react'
import './KanjiCard.css'

function KanjiCard(props) {
  return (
    <div>
        <div className="kanjicard__body">
            <div className="kanjicard__kanji">
                <h1>{props.kanji}</h1>
            </div>
            {CheckKun(props)}
            {CheckOn(props)}
            <div className="kanjicard__translate">
                <h6>{props.translate}</h6>
            </div>
            <div className="kanjicard__level">
                <p>{props.level}</p>
            </div>
        </div>
    </div>
  )
}

function CheckKun(props) {
    console.log("CheckKun Loaded")
    const isKun = props.kun;
    if (isKun) {
        console.log("There is kunyomi")
        return <div className="kanjicard__kunyomi">
            <h3>【訓】</h3>
            <p>{props.kun}</p>
        </div>;
    }
    return;
}

function CheckOn(props) {
    console.log("CheckOn Loaded")
    const isKun = props.on;
    if (isKun) {
        console.log("There is onyomi")
        return <div className="kanjicard__kunyomi">
            <h3>【音】</h3>
            <p>{props.on}</p>
        </div>;
    }
    return;
}

export default KanjiCard