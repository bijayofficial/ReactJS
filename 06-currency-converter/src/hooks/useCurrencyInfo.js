import { useState, useEffect } from "react";

// const apikey = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;
const useCurrencyInfo = (currency) =>{
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
    .then((res)=> res.json())
    .then((res)=> setData(res[currency]));
    console.log(data);
  }, [currency, data])

  console.log(data);
  return data;
}

export default useCurrencyInfo;
