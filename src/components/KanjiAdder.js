import React from 'react'
import './KanjiAdder.css'
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';

function KanjiAdder() {
  return (
    <div className="kanjiadder__body">
        <div className="kanjiadder__input">
            <input placeholder='Jisho URL' type="text" />
            <h3>OR</h3>
            <input placeholder='Search Kanji' type="text" />
            <IconButton>
                <SearchIcon />
            </IconButton>
        </div>
    </div>
  )
}

export default KanjiAdder