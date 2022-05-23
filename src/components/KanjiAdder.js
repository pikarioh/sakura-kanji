import React, { useState } from 'react'
import './KanjiAdder.css'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { Button } from '@mui/material';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import db from "../firebase"
import { useStateValue } from '../StateProvider';


function KanjiAdder({ show, onToggle }) {
  const [{ user }, dispatch] = useStateValue();
  const [kanji, setKanji] = useState("");
  const [kunyomi, setKunyomi] = useState("");
  const [onyomi, setOnyomi] = useState("");
  const [meaning, setMeaning] = useState("");
  const [level, setLevel] = useState("");

  

  const handleSubmit = (e) => {
    e.preventDefault();

    const validInput = validateInput({ kanji, meaning, level});
    if (!validInput) {
      return null;
    }

    db.collection('kanjicards').add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      query: kanji,
      kunyomi: [kunyomi],
      onyomi: [onyomi],
      meaning: meaning,
      jlptLlevel: level,
      author: user.displayName
    })

    setKanji("");
    setKunyomi("");
    setOnyomi("");
    setMeaning("");
    setLevel("");
  };

  return (<>
    {show && (
    <div className='kanjiadder'>
      <div className="kanjiadder__screen" onClick={ onToggle }></div>
      <div className="kanjiadder__module">
      <form className='kanjiadder__form'>
      <div className="kanjiadder__body">
        <div className="kanjiadder__input">
            <input required value={kanji} onChange={(e) => setKanji(e.target.value)} className='kajiadder__kanji' placeholder='字' type="text" />
            <input value={kunyomi} onChange={(e) => setKunyomi(e.target.value)} className='kajiadder__basic' placeholder='訓読み' type="text" />
            <input value={onyomi} onChange={(e) => setOnyomi(e.target.value)} className='kajiadder__basic' placeholder='音読み' type="text" />
            <input value={meaning} onChange={(e) => setMeaning(e.target.value)} className='kajiadder__basic' placeholder='意味(必要)' type="text" />
            <input value={level} onChange={(e) => setLevel(e.target.value)} className='kajiadder__basic' placeholder='レベル(必要)' type="text" />
        </div>
      </div>
      <div className="kanjiadder__button">
          <Button type="submit" onClick={handleSubmit}>
            追加
        </Button>
        </div>
      </form>
      </div>
    </div>
    )}    
    </>)
}

const validateInput = ({ kanji, meaning, level }) => {
  if (!kanji.trim()) {
    return false;
  }
  if (!meaning.trim()) {
    return false;
  }
  if (!level.trim()) {
    return false;
  }

  // other validations

  return true;
};

export default KanjiAdder