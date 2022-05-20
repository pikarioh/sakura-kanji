import React from 'react'
import KanjiCollection from '../KanjiCollection'
import './CollectionPage.css'

function CollectionPage() {
  return (
    <div>
        <div className="page__kanjicollection">
            <div className="page__kc-header">
                <h1>コレクション</h1>
                <p>最近習った漢字の要約</p>
            </div>
            <KanjiCollection />            
          </div>
    </div>
  )
}

export default CollectionPage;