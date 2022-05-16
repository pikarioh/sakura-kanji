import './App.css';
import KanjiAdder from './components/KanjiAdder';
import KanjiCard from './components/KanjiCard';
import Header from './Header';

function App() {
  return (
    // BEM naming convention
    <div className="app">
        {/* Header */}
        <Header />

        {/* App Body */}
        <div className="app__body">
          {/* Sidebar */}
          {/* <div className="app__sidebar">

          </div> */}
          {/* Feed */}
          <div className="app__display">
            
            <h1>
              ご機嫌よう！
            </h1>
            <p>
              最近習った漢字の要約
            </p>
            
            <div className="app__kanjislide">
            <KanjiCard kanji="時" kun="とき、-とき" on="ジ" translate="time, hour" level="N5, grade 2"/>
            <KanjiCard kanji="火" kun="ひ、 -び、 ほ-" on="カ" translate="fire" level="N5, grade １"/>
            <KanjiCard kanji="水" kun="みず、 みず-" on="スイ" translate="water" level="N5, grade 1"/>
            <KanjiCard kanji="議" on="ギ" translate="deliberation" level="N3, grade 4"/>
            </div>

            <KanjiAdder />

          </div>
        </div>   
    </div>
  );
}

export default App;
