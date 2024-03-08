import { useEffect, useState } from "react";

function useCurrencyInfo(c) {
  let [currency, setCurrency] = useState({});
  // let currency = {1:2};
  useEffect(() => {
    fetch(
      // `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${c}.json`
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${c}.json`


      )
      .then((res) => res.json())
      .then((res) => setCurrency(res[c]))
  }, [c]);
  return currency;
}

export default useCurrencyInfo;
