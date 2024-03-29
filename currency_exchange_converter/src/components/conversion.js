import React, { useState } from 'react';
import axios from 'axios';

const ConversionPage = () => {
  const [amount, setAmount] = useState('');
  const [convertedValue, setConvertedValue] = useState('');
  const [currency, setCurrency] = useState('USD');

  const convertCurrency = async () => {
    try {
      const response = await axios.get(`https://currency-converter-api.p.rapidapi.com/convert?from=USD&to=${currency}&amount=${amount}`, {
        headers: {
          'x-rapidapi-host': 'currency-converter-api.p.rapidapi.com',
          'x-rapidapi-key': 'eb263bb6d6mshe4434c14b1b377ap1a7b74jsn1fd2246aaeb4'
        }
      });
      setConvertedValue(response.data.amount);
      // Save converted value under the logged-in user's account
    } catch (error) {
      console.error('Error converting currency:', error);
    }
  };

  return (
    <div>
      <h2>Convert Currency</h2>
      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
        {/* Populate options with available currencies */}
        <option value="SGD">SGD</option>
        <option value="MYR">MYR</option>
        {/* Add other currencies here */}
      </select>
      <button onClick={convertCurrency}>Convert</button>
      {convertedValue && <p>Converted value: {convertedValue}</p>}
    </div>
  );
};

export default ConversionPage;
