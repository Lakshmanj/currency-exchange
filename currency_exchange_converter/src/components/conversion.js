import React, { useState } from 'react';

const ConversionPage = () => {
  const [initialAmount, setInitialAmount] = useState('');
  const [initialCurrency, setInitialCurrency] = useState('');
  const [targetCurrency, setTargetCurrency] = useState('');
  const [convertedAmount, setConvertedAmount] = useState('');

  const convertCurrency = async () => {
    if (!initialAmount || !initialCurrency || !targetCurrency) {
      console.error('Please fill in all fields.');
      return;
    }

    const url = `https://currency-exchange.p.rapidapi.com/exchange?from=${initialCurrency}&to=${targetCurrency}&q=${initialAmount}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'eb263bb6d6mshe4434c14b1b377ap1a7b74jsn1fd2246aaeb4',
        'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setConvertedAmount(result);
    } catch (error) {
      console.error('Error converting currency:', error);
    }
  };

  return (
    <div className='ConversionPage'>
      <h2>Convert Currency</h2>
      <div>
        <label>Initial Amount:</label>
        <input
          type="number"
          value={initialAmount}
          onChange={(e) => setInitialAmount(e.target.value)}
        />
      </div>
      <div>
        <label>Initial Currency:</label>
        <select value={initialCurrency} onChange={(e) => setInitialCurrency(e.target.value)}>
          <option value="">Select initial currency</option>
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
      </div>
      <div>
        <label>Target Currency:</label>
        <select value={targetCurrency} onChange={(e) => setTargetCurrency(e.target.value)}>
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
      </div>
      <button onClick={convertCurrency}>Convert</button>
      {convertedAmount && <p>Converted amount: {convertedAmount}</p>}
    </div>
  );
};

export default ConversionPage;
