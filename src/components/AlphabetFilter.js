import React, { useState, useEffect } from 'react';
import treatmentsData from '../data.json';

const AlphabetFilter = () => {
  const [treatments, setTreatments] = useState({});
  const [filteredTreatments, setFilteredTreatments] = useState({});
  const [highlightedLetters, setHighlightedLetters] = useState(new Set());
  const [selectedLetter, setSelectedLetter] = useState(null);

  useEffect(() => {
    const categorizedData = {};
    treatmentsData.termList.forEach(item => {
      const firstLetter = item.title.charAt(0).toUpperCase();
      if (!categorizedData[firstLetter]) {
        categorizedData[firstLetter] = [];
      }
      categorizedData[firstLetter].push(item);
    });
    setTreatments(categorizedData);
    setFilteredTreatments(categorizedData);

    const letters = new Set(Object.keys(categorizedData));
    setHighlightedLetters(letters);
  }, []);

  const handleLetterClick = (letter) => {
    setSelectedLetter(letter);
    if (treatments[letter]) {
      setFilteredTreatments({ [letter]: treatments[letter] });
    } 
  };

  return (
    <div className="alphabetical-list">
      <div className='treatment-heading'>
        <h2>Treatments, Services and Specialties</h2>
        <div className="alphabet-nav">
          {'ABCDEFGHIJKLMNOPQRSTUVWXYZ#'.split('').map(letter => (
            <span
              key={letter}
              className={highlightedLetters.has(letter) ? 'highlighted' : ''}
              onClick={() => handleLetterClick(letter)}
              style={{ cursor: highlightedLetters.has(letter) ? 'pointer' : 'default' }}
            >
              {letter}
            </span>
          ))}
        </div>
      </div>
      

      <div className="treatment-list">
        {Object.keys(filteredTreatments).map(letter => (
          <div key={letter}>
            <h2>{letter}</h2>
            <ul>
              {filteredTreatments[letter].map(item => (
                <li key={item.title}><a href={item.link}>{item.title}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlphabetFilter;