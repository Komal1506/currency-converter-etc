import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi('fca_live_119ryR8MaTKqSgQt68dHukpoJSaVsLhxU9jNWIpt');

convertcurrency('EUR','INR',2);

//this convert currency to currency

 export async function convertcurrency(fromcurrency,tocurrency,units)
{
     const res = await freecurrencyapi.latest({
        base_currency:fromcurrency,
        currencies:tocurrency
    });
    const multiplier = res.data[tocurrency];
   
    return multiplier*units;

}







//1 EUR = 89.89 INR
// 1 USD =83.5191 INR
