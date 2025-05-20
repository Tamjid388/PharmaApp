import React, { useState } from 'react'

export const Tests = () => {
      const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [allTests] = useState([
    'TSH',
    'CBC',
    'Urine',
    'Blood Sugar',
    'Lipid Profile',
    'ECG',
    'MRI',
    'X-Ray',
    'Liver Function Test',
    'Kidney Function Test',
  ]);

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);

    // Clear suggestions if input is empty
    if (value === '') {
      setSuggestions([]);
      return;
    }

    const lastWord = value.split(',').pop().trim().toLowerCase();
    const selectedTests = value
      .toLowerCase()
      .split(',')
      .map((t) => t.trim());

    let matches = allTests.filter(
      (test) => !selectedTests.includes(test.toLowerCase())
    );

    if (lastWord.length > 0) {
      const filteredMatches = matches.filter((test) =>
        test.toLowerCase().startsWith(lastWord)
      );
      setSuggestions(filteredMatches.length > 0 ? filteredMatches : matches);
    } else {
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




//   const handleKeyDown = (e) => {
//     if (e.key === 'Enter' && suggestions.length > 0) {
//       e.preventDefault();
//       handleSuggestionClick(suggestions[0]);
//     }
//   };
  return (
   <>
  
              <div >
              <h3 className='font-semibold text-gray-800 text-lg mb-1'>Tests:</h3>

              <textarea
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
                placeholder="Type Test Names ..."
                   value={input}
        onChange={handleChange}
        // onKeyDown={handleKeyDown}
              ></textarea>

              {/*  */}
              {suggestions.length > 0 && (
        <ul className="border mt-1 border-gray-300 rounded bg-white shadow z-10 max-h-40 overflow-auto">
          {suggestions.map((test, index) => (
            <li
              key={index}
              className="p-2 cursor-pointer hover:bg-blue-100"
              onClick={() => handleSuggestionClick(test)}
            >
              {test}
            </li>
          ))}
        </ul>
      )}
    </div>
     </>
  )
}
