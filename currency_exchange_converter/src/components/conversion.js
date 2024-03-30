import React, { useState, useEffect } from 'react';

const ConversionPage = () => {
  const [amount, setAmount] = useState('');
  const [convertedValue, setConvertedValue] = useState('');
  const [currency, setCurrency] = useState('USD');

  useEffect(() => {
    const savedConvertedValue = localStorage.getItem('convertedValue');
    if (savedConvertedValue) {
      setConvertedValue(savedConvertedValue);
    }
  }, []);

  const convertCurrency = async () => {
    try {
      const response = await fetch(`https://currency-converter-api.p.rapidapi.com/convert?from=USD&to=${currency}&amount=${amount}`, {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'currency-converter-api.p.rapidapi.com',
          'x-rapidapi-key': 'eb263bb6d6mshe4434c14b1b377ap1a7b74jsn1fd2246aaeb4'
        }
      });
      const data = await response.json();
      const convertedAmount = data.amount;
      setConvertedValue(convertedAmount);
      
      localStorage.setItem('convertedValue', JSON.stringify({ amount: convertedAmount, currency }));
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
        <option value="SGD">SGD</option>
        <option value="MYR">MYR</option>
        <option value="EUR">EUR</option>
        <option value="USD">USD</option>
        <option value="AUD">AUD</option>
        <option value="JPY">JPY</option>
        <option value="CNH">CNH</option>
        <option value="HKD">HKD</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
        <option value="DKK">DKK</option>
        <option value="GBP">GBP</option>
        <option value="RUB">RUB</option>
        <option value="NZD">NZD</option>
        <option value="MXN">MXN</option>
        <option value="IDR">IDR</option>
        <option value="TWD">TWD</option>
        <option value="THB">THB</option>
        <option value="VND">TND</option>
        
      </select>
      <button onClick={convertCurrency}>Convert</button>
      {convertedValue && <p>Converted value: {convertedValue}</p>}
    </div>
  );
};

export default ConversionPage;
