import React, { useState } from 'react'

export const Symptoms = () => {

  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [allSymptoms] = useState([
    'Fever',
    'Cough',
    'Headache',
    'Fatigue',
    'Nausea',
    'Sore throat',
    'Dizziness',
  ]);

 const handleChange = (e) => {
  const value = e.target.value;
  setInput(value);

   // If entire input is empty Suggestions Will be gone
  if (value === '') {
    setSuggestions([]);
    return;
  }

  const lastWord = value.split(',').pop().trim().toLowerCase();
  const selectedSymptoms = value
    .toLowerCase()
    .split(',')
    .map(s => s.trim());

  let matches = allSymptoms.filter(
    symptom => !selectedSymptoms.includes(symptom.toLowerCase())
  );

  if (lastWord.length > 0) {
    const filteredMatches = matches.filter(symptom =>
      symptom.toLowerCase().startsWith(lastWord)
    );

    // If there are filtered matches, show them
    if (filteredMatches.length > 0) {
      setSuggestions(filteredMatches);
    } else {
      // Otherwise, show all remaining (non-selected) suggestions
      setSuggestions(matches);
    }
  } else {
    // If nothing typed, show all remaining (non-selected) suggestions
    setSuggestions(matches);
  }
};


  const handleSuggestionClick = (suggestion) => {
    const parts = input.split(',');
    parts[parts.length - 1] = ` ${suggestion}`;
    const newValue = parts.join(',').trim() + ', ';
    setInput(newValue);
    setSuggestions([]);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && suggestions.length > 0) {
      e.preventDefault();
      handleSuggestionClick(suggestions[0]);
    }
  };
  return (
    <div>
          <h3 className='font-semibold text-gray-800 text-lg mb-1'>Symptoms:</h3>

              <textarea
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
                placeholder="Enter symptoms here..."
                 value={input}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
              >
                
              </textarea>
              {/*  */}


     {suggestions.length > 0 && (
        <ul className="border mt-1 border-gray-300 rounded bg-white shadow z-10 max-h-40 overflow-auto">
          {suggestions.map((symptom, index) => (
            <li
              key={index}
              className="p-2 cursor-pointer hover:bg-blue-100"
              onClick={() => handleSuggestionClick(symptom)}
            >
              {symptom}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
