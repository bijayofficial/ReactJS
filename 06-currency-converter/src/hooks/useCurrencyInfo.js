import { useState } from "react";
import { useEffect } from "react";
// `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
let url = `https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_he5pib6Ovt73DbDJeH5O4W0rq6PwZ8XENHZmZmaj`
 
// {
//     "data": {
//       "AUD": 1.5903703032,
//       "BGN": 1.7997402824,
//       "BRL": 5.7967307709,
//       "CAD": 1.4422202814,
//       "CHF": 0.8825001109,
//       "CNY": 7.2403209822,
//       "CZK": 23.0682433471,
//       "DKK": 6.8709708181,
//       "EUR": 0.9207601492,
//       "GBP": 0.7717301421,
//       "HKD": 7.7684709145,
//       "HRK": 6.5330710261,
//       "HUF": 367.9694126886,
//       "IDR": 16399.49686285,
//       "ILS": 3.6662506449,
//       "INR": 86.8427925366,
//       "ISK": 134.68464445,
//       "JPY": 147.8905066422,
//       "KRW": 1450.8757557751,
//       "MXN": 20.0740135118,
//       "MYR": 4.4354105551,
//       "NOK": 10.6792015313,
//       "NZD": 1.7530303496,
//       "PHP": 57.3177888603,
//       "PLN": 3.8483005016,
//       "RON": 4.5839906542,
//       "RUB": 86.0911214631,
//       "SEK": 10.1938610249,
//       "SGD": 1.3353102362,
//       "THB": 33.677065748,
//       "TRY": 36.67392506,
//       "USD": 1,
//       "ZAR": 18.2836727034
//     }
//   }

function useCurrencyInfo(currency) {
    useEffect(()=>{
        fetch()
    }, [])

}