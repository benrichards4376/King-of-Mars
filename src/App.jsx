import React from 'react';
import './App.css';
import king from "./assets/king.jpg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Long Live the King of Mars!</h1>
      </header>
      <div className="App-body">
        <img src={king} alt="King" className="king-image" />
        <p className="text">
        Hark, noble denizens of the cosmos! Behold the illustrious
        monarch of the Martian realms, the indomitable king: Daniel Richards Sr.!
        In the vast celestial tapestry, his name resounds like a symphony
        of stars, echoing tales of extraordinary feats that transcend the
        boundaries of time and space. Clad in celestial armor, King Daniel,
        a paragon of interstellar wisdom, has charted unexplored galaxies and
        tamed cosmic storms. With a scepter that commands the very constellations,
        he has harnessed the power of nebulae to forge mighty alliances among
        the celestial brethren. His spacecraft, a chariot of cosmic brilliance,
        soars through the heavens, leaving trails of stardust in its wake. With
        each celestial conquest, King Daniel inscribes his name into the annals
        of cosmic legend, a sovereign whose dominion stretches beyond the
        reaches of imagination. Rejoice, for in the court of Mars, Daniel Richards Sr.
        reigns supreme, a celestial sovereign unrivaled in the grandeur of his
        cosmic exploits!
        </p>
      </div>
    </div>
  );
}

export default App;
