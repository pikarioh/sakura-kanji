import { useState, useCallback } from 'react';
import './App.css';
import KanjiAdder from './components/KanjiAdder';
import Header from './Header';
import KanjiCollection from './KanjiCollection';
import Login from './Login';
import { useStateValue } from './StateProvider';

function App() {
  const [{ user }, dispatch] = useStateValue();
  const [showAdder, setShowAdder] = useState(false);
  const [showResMenu, setShowResMenu] = useState(false);
  const handleToggle = useCallback(() => setShowAdder(prevShow => !prevShow), [])
  const handleResToggle = useCallback(() => setShowResMenu(prevShow => !prevShow), [])

  return (
    // BEM naming convention
    <div className="app">
        {!user ? ( <h1><Login /></h1> ) : ( <>       {/* Header */}
        <Header show={showResMenu} onToggle={handleToggle} onResToggle={handleResToggle} />
        <KanjiAdder show={showAdder} onToggle={handleToggle} />
        

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
            
            <KanjiCollection />

          </div>
        </div>
        </>)}
    </div>
  );
}

export default App;
