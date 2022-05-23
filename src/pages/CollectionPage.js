import React from 'react'
import JLPTDisplay from '../components/JLPTDisplay';
import KanjiCollection from '../KanjiCollection'
import './CollectionPage.css'

function CollectionPage() {
  return (
    <div>
        <div className="page__kanjicollection">
            <div className="page__kc-header">
              <h1>あなたの漢字本</h1>
              <p>最近習った漢字の要約</p>
            </div>
            <KanjiCollection />  
            
            <div className="page__kc-header">
              <h1>N５ 漢字</h1>
            </div>
            <JLPTDisplay />          
          </div>
          
    </div>
  )
}

export default CollectionPage;