import { useEffect, useState } from 'react';

function useCurrencyInfo() {
  const [currencyData, setCurrencyData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCurrencyData() {
      try {
        const response = await fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/inr.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCurrencyData(data);
      } catch (error) {
        setError(error.message || 'Failed to fetch data');
        console.error('Fetch error:', error);
      }
    }

    fetchCurrencyData();
  }, []);

  return { currencyData, error };
}

export default useCurrencyInfo;
